export class CreateKueQueue {
  public execute(): string {
    return `import { Job, Queue, createQueue, DoneCallback } ${'from'} 'kue';
import { queueConfig } ${'from'} '@config/queue';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';
import { IQueueProvider } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';
import { IHandleDTO } ${'from'} '../dtos/IHandleDTO';
import { IHandleDataDTO } ${'from'} '../dtos/IHandleDataDTO';

export class KueProvider implements IQueueProvider {
  private readonly queues: IQueueDTO<Queue> = {};

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
        handle: instance.handle.bind(instance),
      };
    });
  }

  public async execute<T extends IHandleDTO>({
    attempts = 1,
    data,
    job,
  }: {
    data: IHandleDataDTO<T>;
    attempts: number;
    job: T;
  }): Promise<Job> {
    return this.queues[job.key].queue
      .create(job.key, data as object)
      .attempts(attempts)
      .removeOnComplete(true)
      .save();
  }

  public async schedule<T extends IHandleDTO>({
    attempts = 1,
    delay,
    data,
    job,
  }: {
    data: IHandleDataDTO<T>;
    delay: IIntervalDTO;
    attempts: number;
    job: T;
  }): Promise<Job> {
    const parsedDelay = convertToMilliseconds(delay);
    return this.queues[job.key].queue
      .create(job.key, data as object)
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
        async (job: { data: object }, done: DoneCallback) => {
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
