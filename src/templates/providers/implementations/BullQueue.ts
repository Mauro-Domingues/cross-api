export class CreateBullQueue {
  public execute(): string {
    return `import type { Job, Queue } fr\u006Fm 'bull';
import Bull fr\u006Fm 'bull';
import type { InjectionToken } fr\u006Fm 'tsyringe';
import { container } fr\u006Fm 'tsyringe';
import { queueConfig } fr\u006Fm '@config/queue';
import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import type { IHandleDataDTO } fr\u006Fm '../dtos/IHandleDataDTO';
import type { IHandleDTO } fr\u006Fm '../dtos/IHandleDTO';
import type { IQueueDTO } fr\u006Fm '../dtos/IQueueDTO';
import type { IQueueProvider } fr\u006Fm '../models/IQueueProvider';
import { jobs } fr\u006Fm '../public/jobs';

export class BullProvider implements IQueueProvider {
  private readonly queues: IQueueDTO<Queue> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: new Bull(Job.key, {
          prefix: queueConfig.config.redis.prefix,
          redis: queueConfig.config.redis,
          defaultJobOptions: {
            removeOnComplete: true,
          },
        }),
        handle: async (data: unknown) => {
          const instance = container.resolve(
            Job as unknown as InjectionToken<unknown>,
          ) as {
            handle: (data: unknown) => Promise<void>;
          };
          return instance.handle(data);
        },
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
      queue.on('error', (error: Error) => {
        throw error;
      });
    });
  }
}
`;
  }
}
