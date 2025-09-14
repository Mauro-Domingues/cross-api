export class CreateQueueConfig {
  public execute(): string {
    return `import { Joi } ${'from'} 'celebrate';

interface IQueueConfigDTO {
  readonly driver: 'kue' | 'bull' | 'bee';
  readonly config: {
    readonly redis: {
      readonly host: string;
      readonly port: number;
      readonly password: string;
      readonly prefix: string;
    };
  };
}

const queueValidator = Joi.object<IQueueConfigDTO>({
  driver: Joi.string().valid('kue', 'bull', 'bee').required(),
  config: Joi.object<IQueueConfigDTO['config']>({
    redis: Joi.object<IQueueConfigDTO['config']['redis']>({
      host: Joi.string().hostname().required(),
      port: Joi.number().integer().positive().min(1).max(65535).required(),
      password: Joi.string().required(),
      prefix: Joi.string().required(),
    }).required(),
  }).required(),
});

export const queueConfig = Object.freeze<IQueueConfigDTO>({
  driver: process.env.QUEUE_DRIVER,
  config: {
    redis: {
      port: Number(process.env.REDIS_PORT),
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
      prefix: process.env.REDIS_PREFIX,
    },
  },
});

queueValidator.validateAsync(queueConfig);
`;
  }
}
