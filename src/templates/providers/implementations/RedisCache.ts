export class CreateRedisCache {
  public execute(): string {
    return `import { Redis } fr\u006Fm 'ioredis';
import { cacheConfig } fr\u006Fm '@config/cache';
import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import type { ICacheKeyDTO } fr\u006Fm '../dtos/ICacheKeyDTO';
import type { ICacheProvider } fr\u006Fm '../models/ICacheProvider';

export class RedisProvider implements ICacheProvider {
  private readonly versions: Map<string, number> = new Map<string, number>();

  private readonly client: Redis;

  public constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  private async buildKeyWithVersion({
    prefix,
    suffix,
  }: ICacheKeyDTO): Promise<string> {
    let currentVersion = this.versions.get(prefix) ?? 0;

    if (!currentVersion) {
      const versionLookupKey = \`\${prefix}:version\`;
      const storedVersion = await this.client.get(versionLookupKey);

      if (
        storedVersion &&
        !Number.isNaN(Number(storedVersion)) &&
        Number(storedVersion) >= 1
      ) {
        currentVersion = Number(storedVersion);
      } else {
        currentVersion = 1;
      }

      this.versions.set(prefix, currentVersion);
    }

    if (!suffix) {
      return \`\${prefix}:\${currentVersion}\`;
    }

    return \`\${prefix}:\${currentVersion}:\${suffix}\`;
  }

  public async save<T>(key: ICacheKeyDTO, value: T): Promise<void> {
    const finalKey = await this.buildKeyWithVersion(key);
    await this.client.set(finalKey, JSON.stringify(value));
  }

  public async saveTemporary<T>(
    key: ICacheKeyDTO,
    value: T,
    ttl: IIntervalDTO,
  ): Promise<void> {
    const finalKey = await this.buildKeyWithVersion(key);
    await this.client.set(
      finalKey,
      JSON.stringify(value),
      'PX',
      convertToMilliseconds(ttl),
    );
  }

  public async recovery<T>(key: ICacheKeyDTO): Promise<T | null> {
    const finalKey = await this.buildKeyWithVersion(key);
    const data = await this.client.get(finalKey);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }

  public async invalidate(key: ICacheKeyDTO): Promise<void> {
    const finalKey = await this.buildKeyWithVersion(key);
    await this.client.unlink(finalKey);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    await this.client.incr(\`\${prefix}:version\`);
    this.versions.set(prefix, 0);
  }

  public close(): void {
    this.client.disconnect();
  }
}
`;
  }
}
