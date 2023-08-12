export class CreateQueueConfig {
  public execute(): string {
    return `interface IQueueConfigDTO {
  driver: 'kue' | 'bull' | 'bee';
  config: {
    host: string;
    port: number;
    password: string;
  };
}

export const queueConfig: IQueueConfigDTO = {
  driver: process.env.QUEUE_DRIVER,
  config: {
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  },
};
`;
  }
}
