export class CreateRedisCache {
  public execute(): string {
    return `import { cacheConfig } from '@config/cache';
import { Redis } from 'ioredis';

import { ICacheProviderDTO } from '../models/ICacheProvider';

export class RedisCacheProvider implements ICacheProviderDTO {
  private readonly client: Redis;

  constructor() {
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

    const parsedData: T = JSON.parse(data);

    return parsedData;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(key);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = await this.client.keys(
      \`\${process.env.REDIS_PREFIX}\${prefix}:*\`,
    );

    const pipeline = this.client.pipeline();

    keys.forEach(key => {
      pipeline.del(key);
    });

    await pipeline.exec();
  }
}
`;
  }
}
