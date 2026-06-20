export class CreateFakeCache {
  public execute(): string {
    return `import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import type { ICacheKeyDTO } fr\u006Fm '../dtos/ICacheKeyDTO';
import type { ICacheProvider } fr\u006Fm '../models/ICacheProvider';

export class FakeCacheProvider implements ICacheProvider {
  private readonly versions: Map<string, number> = new Map<string, number>();

  private readonly cache: Map<string, string> = new Map<string, string>();

  private buildKeyWithVersion({ prefix, suffix }: ICacheKeyDTO): string {
    let currentVersion = this.versions.get(prefix) ?? 0;

    if (!currentVersion) {
      currentVersion = 1;
      this.versions.set(prefix, currentVersion);
    }

    if (!suffix) {
      return \`\${prefix}:\${currentVersion}\`;
    }

    return \`\${prefix}:\${currentVersion}:\${suffix}\`;
  }

  public async save<T>(key: ICacheKeyDTO, value: T): Promise<void> {
    const storeKey = this.buildKeyWithVersion(key);
    this.cache.set(storeKey, JSON.stringify(value));
  }

  public async saveTemporary<T>(
    key: ICacheKeyDTO,
    value: T,
    ttl: IIntervalDTO,
  ): Promise<void> {
    const storeKey = this.buildKeyWithVersion(key);
    this.cache.set(storeKey, JSON.stringify(value));

    setTimeout(() => {
      this.cache.delete(storeKey);
    }, convertToMilliseconds(ttl));
  }

  public async recovery<T>(key: ICacheKeyDTO): Promise<T | null> {
    const storeKey = this.buildKeyWithVersion(key);
    const data = this.cache.get(storeKey);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }

  public async invalidate(key: ICacheKeyDTO): Promise<void> {
    const storeKey = this.buildKeyWithVersion(key);
    this.cache.delete(storeKey);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    Array.from(this.versions.entries()).forEach(([key, value]) => {
      if (key.startsWith(\`\${prefix}:\`)) {
        this.versions.set(key, value + 1);
      }
    });
  }

  declare public close: () => void;
}
`;
  }
}
