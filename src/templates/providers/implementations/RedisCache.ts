export class CreateRedisCache {
  public execute(): string {
    return `import { cacheConfig } fr\om '@config/cache';
import { Redis } fr\om 'ioredis';
import { ICacheProvider } fr\om '../models/ICacheProvider';

export class RedisCacheProvider implements ICacheProvider {
  private readonly client: Redis;

  public constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save<T>(key: string, value: T): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  public async recovery<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);

    if (!data) {
      return null;
    }

    const parsedData = JSON.parse(data) as T;

    return parsedData;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = await this.client.keys(
      \`\${cacheConfig.config.redis.keyPrefix}\${prefix}:*\`,
    );

    const pipeline = this.client.pipeline();

    keys.forEach(key => {
      pipeline.del(key.replace(cacheConfig.config.redis.keyPrefix, ''));
    });

    await pipeline.exec();
  }
}
`;
  }
}
