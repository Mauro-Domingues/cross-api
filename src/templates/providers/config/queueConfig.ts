export class CreateQueueConfig {
  public execute(): string {
    return `interface IQueueConfigDTO {
  readonly driver: 'kue' | 'bull' | 'bee';
  readonly config: {
    readonly host: string;
    readonly port: number;
    readonly password: string;
  };
}

export const queueConfig = Object.freeze<IQueueConfigDTO>({
  driver: process.env.QUEUE_DRIVER,
  config: {
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
    password: process.env.REDIS_PASSWORD,
  },
});
`;
  }
}
