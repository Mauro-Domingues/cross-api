export class CreateKueQueue {
  public execute(): string {
    return `import { Job, Queue, createQueue } ${'from'} 'kue';
import { queueConfig } ${'from'} '@config/queue';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IQueueProviderDTO } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';

export class KueProvider implements IQueueProviderDTO {
  private queues: IQueueDTO<Queue> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: createQueue({
          redis: { ...queueConfig.config, auth: queueConfig.config.password },
        }),
        handle: new Job().handle as ({
          data,
        }: {
          data: unknown;
        }) => Promise<void>,
      };
    });
  }

  public async execute<T extends object>(
    key: Capitalize<string>,
    data: T,
    attempts = 1,
  ): Promise<Job> {
    return this.queues[key].queue.create(key, data).attempts(attempts).save();
  }

  public async schedule<T extends object>(
    key: Capitalize<string>,
    data: T,
    delay: \`\${number}\${'d' | 'h' | 'min' | 's' | 'ms'}\`,
    attempts = 1,
  ): Promise<Job> {
    const parsedDelay = convertToMilliseconds(delay);
    return this.queues[key].queue
      .create(key, data)
      .attempts(attempts)
      .delay(parsedDelay)
      .save();
  }

  private processQueue(): void {
    return jobs.forEach(job => {
      const { queue, handle } = this.queues[job.key];

      queue.process(job.key, handle);
      queue.on('error', error => {
        throw error;
      });
    });
  }
}
`;
  }
}
