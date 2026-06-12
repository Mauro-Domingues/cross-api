export class CreateBeeQueue {
  public execute(): string {
    return `import type { Job } fr\u006Fm 'bee-queue';
import Bee fr\u006Fm 'bee-queue';
import type { InjectionToken } fr\u006Fm 'tsyringe';
import { container } fr\u006Fm 'tsyringe';
import { queueConfig } fr\u006Fm '@config/queue';
import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import { createErrorResponse } fr\u006Fm '@utils/createErrorResponse';
import type { IHandleDataDTO } fr\u006Fm '../dtos/IHandleDataDTO';
import type { IHandleDTO } fr\u006Fm '../dtos/IHandleDTO';
import type { IQueueDTO } fr\u006Fm '../dtos/IQueueDTO';
import type { IQueueProvider } fr\u006Fm '../models/IQueueProvider';
import { jobs } fr\u006Fm '../public/jobs';

export class BeeProvider implements IQueueProvider {
  private readonly intervals: Map<string, NodeJS.Timeout> = new Map<
    string,
    NodeJS.Timeout
  >();

  private readonly queues: IQueueDTO<Bee> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: new Bee(Job.key, {
          prefix: queueConfig.config.redis.prefix,
          redis: queueConfig.config.redis,
          activateDelayedJobs: true,
          removeOnSuccess: true,
          removeOnFailure: true,
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

  private scheduleInterval(
    interval: number,
    callback: () => Promise<unknown>,
  ): NodeJS.Timeout {
    const MAX_DELAY = 2147483647;

    if (interval > MAX_DELAY) {
      return setTimeout(() => {
        this.scheduleInterval(interval - MAX_DELAY, callback);
      }, MAX_DELAY);
    }

    return setInterval(() => {
      callback();
    }, interval);
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
  }): Promise<void> {
    const parsedInterval = convertToMilliseconds(interval);
    const jobId = \`\${job.key}:\${client}\`;
    const existingInterval = this.intervals.get(jobId);

    if (existingInterval) {
      clearInterval(existingInterval);
    }

    const newInterval = this.scheduleInterval(parsedInterval, async () =>
      this.queues[job.key].queue.createJob(data).retries(attempts).save(),
    );

    this.intervals.set(jobId, newInterval);
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
    this.intervals.forEach(interval => {
      clearInterval(interval);
      clearTimeout(interval);
    });

    await Promise.all(
      Object.values(this.queues).map(async ({ queue }) => queue.close()),
    );
  }
}
`;
  }
}
