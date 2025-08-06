export class CreateFakeQueue {
  public execute(): string {
    return `import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';
import { IQueueProvider } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';
import { IHandleDTO } ${'from'} '../dtos/IHandleDTO';
import { IHandleDataDTO } ${'from'} '../dtos/IHandleDataDTO';

export class FakeQueueProvider implements IQueueProvider {
  private readonly queues: IQueueDTO<string> = {};

  public constructor() {
    this.init();
  }

  private init(): void {
    return jobs.forEach(Job => {
      const instance = new Job();
      this.queues[Job.key] = {
        queue: Job.key,
        handle: instance.handle.bind(instance),
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
