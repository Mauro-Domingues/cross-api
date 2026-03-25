export class CreateMessagingConfig {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import type { IKafkaConfigDTO } fr\om 'cross-kafka';
import { logLevel } fr\om 'cross-kafka';

interface IMessagingConfigDTO {
  readonly driver: 'kafka';
  readonly config: {
    readonly kafka: IKafkaConfigDTO;
  };
}

const mailValidator = Joi.object<IMessagingConfigDTO>({
  driver: Joi.string().valid('kafka').required(),
  config: Joi.object<IMessagingConfigDTO['config']>({
    kafka: Joi.object<IMessagingConfigDTO['config']['kafka']>({
      observerTimeout: Joi.number().integer().positive().required(),
      client: Joi.object<IMessagingConfigDTO['config']['kafka']['client']>({
        clientId: Joi.string().required(),
        brokers: Joi.array().items(Joi.string()).min(1).required(),
        requestTimeout: Joi.number().integer().positive().required(),
        logLevel: Joi.number()
          .valid(...Object.values(logLevel))
          .required(),
      }),
      consumer: Joi.object<IMessagingConfigDTO['config']['kafka']['consumer']>({
        groupId: Joi.string().required(),
      }),
    }).required(),
  }).required(),
});

export const messagingConfig = Object.freeze<IMessagingConfigDTO>({
  driver: 'kafka',
  config: {
    kafka: {
      observerTimeout: 40000,
      client: {
        brokers: ['localhost:9092'],
        requestTimeout: 30000,
        logLevel: logLevel.NOTHING,
        clientId: 'my-receiver',
      },
      consumer: {
        groupId: 'my-group',
      },
    },
  },
});

mailValidator.validateAsync(messagingConfig);
`;
  }
}
