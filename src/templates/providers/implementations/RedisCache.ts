export class CreateRedisCache {
  public execute(): string {
    return `import { cacheConfig } from '@config/cache';
import { Redis } from 'ioredis';

import { ICacheProviderDTO } from '../models/ICacheProvider';

export class RedisCacheProvider implements ICacheProviderDTO {
  private client: Redis;

  constructor() {
    this.client = new Redis(cacheConfig.config.redis);
  }

  public async save<T>(key: string, value: T): Promise<void> {
    await this.client.set(
      \`\${process.env.REDIS_PREFIX}_\${key}\`,
      JSON.stringify(value),
    );
  }

  public async recovery<T>(key: string): Promise<T | null> {
    const data = await this.client.get(\`\${process.env.REDIS_PREFIX}_\${key}\`);

    if (!data) {
      return null;
    }

    const parsedData: T = JSON.parse(data);

    return parsedData;
  }

  public async invalidate(key: string): Promise<void> {
    await this.client.del(\`\${process.env.REDIS_PREFIX}_\${key}\`);
  }

  public async invalidatePrefix(prefix: string): Promise<void> {
    const keys = await this.client.keys(
      \`\${process.env.REDIS_PREFIX}_\${prefix}:*\`,
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
