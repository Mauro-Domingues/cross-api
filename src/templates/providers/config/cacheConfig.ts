export class CreateCacheConfig {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import { RedisOptions } fr\om 'ioredis';

interface ICacheConfigDTO {
  readonly driver: 'redis';
  readonly config: {
    readonly redis: RedisOptions & { readonly keyPrefix: string };
  };
}

const cacheValidator = Joi.object<ICacheConfigDTO>({
  driver: Joi.string().valid('redis').required(),
  config: Joi.object<ICacheConfigDTO['config']>({
    redis: Joi.object<ICacheConfigDTO['config']['redis']>({
      port: Joi.number().integer().positive().min(1).max(65535).required(),
      host: Joi.string().hostname().required(),
      password: Joi.string().allow('').required(),
      keyPrefix: Joi.string().required(),
    }).required(),
  }).required(),
});

export const cacheConfig = Object.freeze<ICacheConfigDTO>({
  driver: 'redis',
  config: {
    redis: {
      port: Number(process.env.REDIS_PORT),
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
      keyPrefix: process.env.REDIS_PREFIX,
    },
  },
});

cacheValidator.validateAsync(cacheConfig);
`;
  }
}
