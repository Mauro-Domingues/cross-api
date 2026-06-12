export class CreateBullQueue {
  public execute(): string {
    return `import type { Job, Queue } fr\u006Fm 'bull';
import Bull fr\u006Fm 'bull';
import type { InjectionToken } fr\u006Fm 'tsyringe';
import { container } fr\u006Fm 'tsyringe';
import { queueConfig } fr\u006Fm '@config/queue';
import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { convertToCron } fr\u006Fm '@utils/convertToCron';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import { createErrorResponse } fr\u006Fm '@utils/createErrorResponse';
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
            removeOnFail: true,
          },
        }),
        handle: async (data: unknown) => {
          const instance = container.resolve<{
            handle: (data: unknown) => Promise<void>;
          }>(Job as InjectionToken);
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

  public async repeat<T extends IHandleDTO>({
    attempts = 1,
    interval,
    client,
    job,
    data,
  }: {
    data: IHandleDataDTO<T>;
    interval: IIntervalDTO;
    attempts: number;
    client: string;
    job: T;
  }): Promise<Job<IHandleDataDTO<T>>> {
    return this.queues[job.key].queue.add(data, {
      attempts,
      repeat: { cron: convertToCron(interval) },
      jobId: \`\${job.key}:\${client}\`,
    });
  }

  private processQueue(): void {
    return jobs.forEach(job => {
      const { queue, handle } = this.queues[job.key];

      queue.process(handle);
      queue.on('error', (error: Error) => {
        createErrorResponse(error);
        throw error;
      });
    });
  }

  public async close(): Promise<void> {
    await Promise.all(
      Object.values(this.queues).map(async ({ queue }) => queue.close()),
    );
  }
}
`;
  }
}
