export class CreateFakeQueue {
  public execute(): string {
    return `import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';
import { IQueueProvider } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';

export class FakeQueueProvider implements IQueueProvider {
  private queues: IQueueDTO<string> = {};

  public constructor() {
    this.init();
  }

  private init(): void {
    return jobs.forEach(Job => {
      const instance = new Job();
      this.queues[Job.key] = {
        queue: Job.key,
        handle: instance.handle.bind(instance) as ({
          data,
        }: {
          data: unknown;
        }) => Promise<void>,
      };
    });
  }

  private async try<T>({
    attempts,
    data,
    key,
  }: {
    key: Capitalize<string>;
    attempts: number;
    data: T;
  }): Promise<void> {
    try {
      await this.queues[key].handle({ data });
    } catch {
      if (attempts > 1) {
        await this.try({ attempts: attempts - 1, data, key });
      }
    }
  }

  public async execute<T extends object>(
    key: Capitalize<string>,
    data: T,
    attempts = 1,
  ): Promise<void> {
    return this.try({ attempts, data, key });
  }

  public async schedule<T extends object>(
    key: Capitalize<string>,
    data: T,
    delay: IIntervalDTO,
    attempts = 1,
  ): Promise<void> {
    const parsedDelay = convertToMilliseconds(delay);
    setTimeout(async () => {
      return this.try({ attempts, data, key });
    }, parsedDelay);
  }
}
`;
  }
}
