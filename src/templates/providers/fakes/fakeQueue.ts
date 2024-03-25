export class CreateFakeQueue {
  public execute(): string {
    return `import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IQueueProviderDTO } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';

export class FakeQueueProvider implements IQueueProviderDTO {
  private queues: IQueueDTO<string> = {};

  public constructor() {
    this.init();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: Job.key,
        handle: new Job().handle as ({
          data,
        }: {
          data: unknown;
        }) => Promise<void>,
      };
    });
  }

  public async execute<T extends object>(
    key: Capitalize<string>,
    data: T,
    attempts = 1,
  ): Promise<void> {
    while (attempts > 0) {
      try {
        this.queues[key].handle({ data });
        break;
      } catch {
        attempts -= 1;
      }
    }
  }

  public async schedule<T extends object>(
    key: Capitalize<string>,
    data: T,
    delay: \`\${number}\${'d' | 'h' | 'min' | 's' | 'ms'}\`,
    attempts = 1,
  ): Promise<void> {
    const parsedDelay = convertToMilliseconds(delay);
    setTimeout(() => {
      while (attempts > 0) {
        try {
          this.queues[key].handle({ data });
          break;
        } catch {
          attempts -= 1;
        }
      }
    }, parsedDelay);
  }
}
`;
  }
}
