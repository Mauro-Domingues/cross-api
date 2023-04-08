"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCacheConfig = void 0;
class CreateCacheConfig {
  execute() {
    return `import { RedisOptions } from 'ioredis';

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
    },
  },
};
`;
  }
}
exports.CreateCacheConfig = CreateCacheConfig;