export class CreateRedisCache {
  public execute(): string {
    return `import { Redis } fr\u006Fm 'ioredis';
import { cacheConfig } fr\u006Fm '@config/cache';
import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import type { ICacheProvider } fr\u006Fm '../models/ICacheProvider';

export class RedisProvider implements ICacheProvider {
  private readonly versions: Map<string, number> = new Map<string, number>();

  private readonly client: Redis;

  public constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  private splitKey(key: string): { namespace: string; remainder: string } {
    const segments = key.split(':');

    if (segments.length === 1) {
      return { namespace: segments[0], remainder: '' };
    }

    const namespace = segments.slice(0, 2).join(':');
    const remainder = segments.slice(2).join(':');

    return { namespace, remainder };
  }

  private async buildKeyWithVersion(baseKey: string): Promise<string> {
    const { namespace, remainder } = this.splitKey(baseKey);

    let currentVersion = this.versions.get(namespace) ?? 0;

    if (!currentVersion) {
      const versionLookupKey = \`\${namespace}:version\`;
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

      this.versions.set(namespace, currentVersion);
    }

    return \`\${namespace}:\${currentVersion}:\${remainder}\`;
  }

  public async save<T>(key: string, value: T): Promise<void> {
    const finalKey = await this.buildKeyWithVersion(key);
    await this.client.set(finalKey, JSON.stringify(value));
  }

  public async saveTemporary<T>(
    key: string,
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

  public async recovery<T>(key: string): Promise<T | null> {
    const finalKey = await this.buildKeyWithVersion(key);
    const data = await this.client.get(finalKey);

    if (!data) {
      return null;
    }

    return JSON.parse(data);
  }

  public async invalidate(key: string): Promise<void> {
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
