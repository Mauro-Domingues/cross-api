export class CreateKueQueue {
  public execute(): string {
    return `import type { DoneCallback, Job, Queue } fr\u006Fm 'kue';
import { createQueue } fr\u006Fm 'kue';
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

export class KueProvider implements IQueueProvider {
  private readonly intervals: Map<string, NodeJS.Timeout> = new Map<
    string,
    NodeJS.Timeout
  >();

  private readonly queues: IQueueDTO<Queue> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: createQueue({
          redis: {
            ...queueConfig.config.redis,
            auth: queueConfig.config.redis.password,
          },
          prefix: queueConfig.config.redis.prefix,
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
  }): Promise<Job> {
    return this.queues[job.key].queue
      .create(job.key, data)
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
      .create(job.key, data)
      .attempts(attempts)
      .delay(parsedDelay)
      .removeOnComplete(true)
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
      this.queues[job.key].queue
        .create(job.key, data)
        .attempts(attempts)
        .removeOnComplete(true)
        .save(),
    );

    this.intervals.set(jobId, newInterval);
  }

  private processQueue(): void {
    return jobs.forEach(job => {
      const { queue, handle } = this.queues[job.key];

      queue.watchStuckJobs(900000);

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
      Object.values(this.queues).map(
        ({ queue }) =>
          new Promise<void>((resolve, reject) => {
            queue.shutdown(0, (error: Error) => {
              if (error) {
                createErrorResponse(error);
                reject(error);
              } else {
                resolve();
              }
            });
          }),
      ),
    );
  }
}
`;
  }
}
