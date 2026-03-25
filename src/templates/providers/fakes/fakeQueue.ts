export class CreateFakeQueue {
  public execute(): string {
    return `import type { InjectionToken } fr\om 'tsyringe';
import { container } fr\om 'tsyringe';
import type { IIntervalDTO } fr\om '@dtos/IIntervalDTO';
import { convertToMilliseconds } fr\om '@utils/convertToMilliseconds';
import type { IHandleDataDTO } fr\om '../dtos/IHandleDataDTO';
import type { IHandleDTO } fr\om '../dtos/IHandleDTO';
import type { IQueueDTO } fr\om '../dtos/IQueueDTO';
import type { IQueueProvider } fr\om '../models/IQueueProvider';
import { jobs } fr\om '../public/jobs';

export class FakeQueueProvider implements IQueueProvider {
  private readonly queues: IQueueDTO<string> = {};

  public constructor() {
    this.init();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: Job.key,
        handle: async (jobData: unknown) => {
          const instance = container.resolve(
            Job as unknown as InjectionToken<unknown>,
          ) as {
            handle: (data: unknown) => Promise<void>;
          };
          return instance.handle(jobData);
        },
      };
    });
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
    } catch {
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
    setTimeout(async () => {
      return this.try({ attempts, data, job });
    }, parsedDelay);
  }
}
`;
  }
}
