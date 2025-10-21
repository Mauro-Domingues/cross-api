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

    return JSON.parse(data);
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.unlink(key);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const execPromises: Array<Promise<unknown>> = [];
    const scanStream = this.client.scanStream({
      match: \`\${cacheConfig.config.redis.keyPrefix}\${prefix}:*\`,
      count: 500,
    });

    scanStream.on('data', (keys: Array<string>) => {
      if (!keys.length) return;

      const pipeline = this.client.pipeline();

      keys.forEach(key => {
        pipeline.unlink(key.replace(cacheConfig.config.redis.keyPrefix, ''));
      });

      execPromises.push(pipeline.exec());
    });

    const endPromise = new Promise<void>((resolve, reject) => {
      scanStream.on('end', () =>
        Promise.all(execPromises)
          .then(() => resolve())
          .catch(reject),
      );
      scanStream.on('error', reject);
    });

    return endPromise;
  }
}
`;
  }
}
