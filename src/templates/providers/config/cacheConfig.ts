export class CreateCacheConfig {
  public execute(): string {
    return `import { RedisOptions } ${'from'} 'ioredis';

interface ICacheConfigDTO {
  driver: 'redis';
  config: {
    redis: RedisOptions;
  };
}

export const cacheConfig: ICacheConfigDTO = {
  driver: 'redis',
  config: {
    redis: {
      port: Number(process.env.REDIS_PORT),
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
      keyPrefix: process.env.REDIS_PREFIX,
    },
  },
};
`;
  }
}
