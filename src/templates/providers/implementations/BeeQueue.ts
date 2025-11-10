export class CreateBeeQueue {
  public execute(): string {
    return `import Bee, { type Job } fr\om 'bee-queue';
import { queueConfig } fr\om '@config/queue';
import { convertToMilliseconds } fr\om '@utils/convertToMilliseconds';
import type { IIntervalDTO } fr\om '@dtos/IIntervalDTO';
import type { IQueueProvider } fr\om '../models/IQueueProvider';
import { jobs } fr\om '../public/jobs';
import type { IQueueDTO } fr\om '../dtos/IQueueDTO';
import type { IHandleDTO } fr\om '../dtos/IHandleDTO';
import type { IHandleDataDTO } fr\om '../dtos/IHandleDataDTO';

export class BeeProvider implements IQueueProvider {
  private readonly queues: IQueueDTO<Bee> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      const instance = new Job();
      this.queues[Job.key] = {
        queue: new Bee(Job.key, {
          prefix: queueConfig.config.redis.prefix,
          redis: queueConfig.config.redis,
          activateDelayedJobs: true,
          removeOnSuccess: true,
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
  }): Promise<Job<IHandleDataDTO<T>>> {
    return this.queues[job.key].queue.createJob(data).retries(attempts).save();
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
    return this.queues[job.key].queue
      .createJob(data)
      .retries(attempts)
      .delayUntil(Date.now() + parsedDelay)
      .save();
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
