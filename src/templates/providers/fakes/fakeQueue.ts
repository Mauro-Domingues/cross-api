export class CreateFakeQueue {
  public execute(): string {
    return `import type { InjectionToken } fr\u006Fm 'tsyringe';
import { container } fr\u006Fm 'tsyringe';
import { randomUUID } fr\u006Fm 'node:crypto';
import type { IIntervalDTO } fr\u006Fm '@dtos/IIntervalDTO';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import { createErrorResponse } fr\u006Fm '@utils/createErrorResponse';
import type { IHandleDataDTO } fr\u006Fm '../dtos/IHandleDataDTO';
import type { IHandleDTO } fr\u006Fm '../dtos/IHandleDTO';
import type { IQueueDTO } fr\u006Fm '../dtos/IQueueDTO';
import type { IQueueProvider } fr\u006Fm '../models/IQueueProvider';
import { jobs } fr\u006Fm '../public/jobs';

export class FakeQueueProvider implements IQueueProvider {
  private readonly intervals: Map<string, NodeJS.Timeout> = new Map<
    string,
    NodeJS.Timeout
  >();

  private readonly queues: IQueueDTO<string> = {};

  public constructor() {
    this.init();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: Job.key,
        handle: async (jobData: unknown) => {
          const instance = container.resolve<{
            handle: (data: unknown) => Promise<void>;
          }>(Job as InjectionToken);
          return instance.handle(jobData);
        },
      };
    });
  }

  private scheduleOrRepeat({
    callback,
    delay,
    repeat = false,
    jobId = randomUUID(),
  }: {
    callback: () => Promise<void>;
    repeat?: boolean;
    jobId?: string;
    delay: number;
  }): void {
    let newInterval: NodeJS.Timeout;
    const MAX_DELAY = 2147483647;

    if (delay > MAX_DELAY) {
      newInterval = setTimeout(() => {
        this.scheduleOrRepeat({
          delay: delay - MAX_DELAY,
          callback,
          repeat,
          jobId,
        });
      }, MAX_DELAY);
    } else if (repeat) {
      newInterval = setInterval(() => {
        callback();
      }, delay);
    } else {
      newInterval = setTimeout(() => {
        callback();
      }, delay);
    }

    this.intervals.set(jobId, newInterval);
  }

  private async try<T extends IHandleDTO>({
    attempts,
    data,
    job,
  }: {
    data: IHandleDataDTO<T>;
    attempts: number;
    job: T;
  }): Promise<void> {
    try {
      await this.queues[job.key].handle({ data });
    } catch (error: unknown) {
      createErrorResponse(error);
      if (attempts > 1) {
        await this.try({ attempts: attempts - 1, data, job });
      }
    }
  }

  public async execute<T extends IHandleDTO>({
    attempts = 1,
    data,
    job,
  }: {
    data: IHandleDataDTO<T>;
    attempts: number;
    job: T;
  }): Promise<void> {
    return this.try({ attempts, data, job });
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
  }): Promise<void> {
    const parsedDelay = convertToMilliseconds(delay);

    this.scheduleOrRepeat({
      delay: parsedDelay,
      callback: () => this.try({ attempts, data, job }),
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
  }): Promise<void> {
    const parsedInterval = convertToMilliseconds(interval);
    const jobId = \`\${job.key}:\${client}\`;
    const existingInterval = this.intervals.get(jobId);

    if (existingInterval) {
      clearInterval(existingInterval);
    }

    this.scheduleOrRepeat({
      callback: () => this.try({ attempts, data, job }),
      delay: parsedInterval,
      repeat: true,
      jobId,
    });
  }

  public async close(): Promise<void> {
    this.intervals.forEach(interval => {
      clearInterval(interval);
      clearTimeout(interval);
    });
  }
}
`;
  }
}
