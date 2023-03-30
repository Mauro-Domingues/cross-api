"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRedisCache = void 0;
class CreateRedisCache {
    execute() {
        return `import cacheConfig from '@config/cache';
import Redis, { Redis as RedisClient } from 'ioredis';

import ICacheProvider from '../models/ICacheProvider';

class RedisCacheProvider implements ICacheProvider {
  private client: RedisClient;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save(key: string, value: string): Promise<void> {
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
    const keys = await this.client.keys(\`\${prefix}:*\`);

    const pipeline = this.client.pipeline();

    keys.forEach((key: any) => {
      pipeline.del(key);
    });

    await pipeline.exec();
  }
}

export default RedisCacheProvider;
`;
    }
}
exports.CreateRedisCache = CreateRedisCache;
