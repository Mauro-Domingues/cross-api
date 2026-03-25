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
        allowAutoTopicCreation: Joi.boolean().required(),
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
        brokers: [process.env.KAFKA_BROKERS],
        requestTimeout: 30000,
        logLevel: logLevel.NOTHING,
        clientId: process.env.KAFKA_CLIENT_ID,
      },
      consumer: {
        groupId: process.env.KAFKA_GROUP_ID,
        allowAutoTopicCreation: true,
      },
    },
  },
});

mailValidator.validateAsync(messagingConfig);
`;
  }
}
