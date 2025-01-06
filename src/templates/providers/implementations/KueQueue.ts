export class CreateKueQueue {
  public execute(): string {
    return `import { Job, Queue, createQueue, DoneCallback } ${'from'} 'kue';
import { queueConfig } ${'from'} '@config/queue';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';
import { IQueueProvider } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';

export class KueProvider implements IQueueProvider {
  private queues: IQueueDTO<Queue> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      const instance = new Job();
      this.queues[Job.key] = {
        queue: createQueue({
          redis: {
            ...queueConfig.config.redis,
            auth: queueConfig.config.redis.password,
          },
          prefix: queueConfig.config.redis.prefix,
        }),
        handle: instance.handle.bind(instance) as ({
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
    return this.queues[key].queue
      .create(key, data)
      .attempts(attempts)
      .removeOnComplete(true)
      .save();
  }

  public async schedule<T extends object>(
    key: Capitalize<string>,
    data: T,
    delay: IIntervalDTO,
    attempts = 1,
  ): Promise<Job> {
    const parsedDelay = convertToMilliseconds(delay);
    return this.queues[key].queue
      .create(key, data)
      .attempts(attempts)
      .delay(parsedDelay)
      .removeOnComplete(true)
      .save();
  }

  private processQueue(): void {
    return jobs.forEach(job => {
      const { queue, handle } = this.queues[job.key];

      queue.process(
        job.key,
        async (job: { data: unknown }, done: DoneCallback) => {
          try {
            await handle(job);
            done();
          } catch (error) {
            done(error);
          }
        },
      );
      queue.on('error', error => {
        throw error;
      });
    });
  }
}
`;
  }
}
