"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCacheConfig;
function createCacheConfig() {
  return `import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';
  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',
  config: {
    redis: {
      port: Number(process.env.REDIS_PORT),
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
    },
  },
} as ICacheConfig;
`;
}