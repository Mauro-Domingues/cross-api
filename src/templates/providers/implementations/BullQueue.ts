export class CreateBullQueue {
  public execute(): string {
    return `import Bull, { Job, Queue } ${'from'} 'bull';
import { queueConfig } ${'from'} '@config/queue';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';
import { IQueueProvider } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';
import { IHandleDTO } ${'from'} '../dtos/IHandleDTO';
import { IHandleDataDTO } ${'from'} '../dtos/IHandleDataDTO';

export class BullProvider implements IQueueProvider {
  private readonly queues: IQueueDTO<Queue> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      const instance = new Job();
      this.queues[Job.key] = {
        queue: new Bull(Job.key, {
          prefix: queueConfig.config.redis.prefix,
          redis: queueConfig.config.redis,
          defaultJobOptions: {
            removeOnComplete: true,
          },
        }),
        handle: instance.handle.bind(instance),
      };
    });
  }

  public async execute<T extends IHandleDTO>({
    attempts = 1,
    job,
    data,
  }: {
    data: IHandleDataDTO<T>;
    attempts: number;
    job: T;
  }): Promise<Job<IHandleDataDTO<T>>> {
    return this.queues[job.key].queue.add(data, { attempts });
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
  }): Promise<Job<IHandleDataDTO<T>>> {
    const parsedDelay = convertToMilliseconds(delay);
    return this.queues[job.key].queue.add(data, {
      delay: parsedDelay,
      attempts,
    });
  }

  private processQueue(): void {
    return jobs.forEach(job => {
      const { queue, handle } = this.queues[job.key];

      queue.process(handle);
      queue.on('error', error => {
        throw error;
      });
    });
  }
}
`;
  }
}
