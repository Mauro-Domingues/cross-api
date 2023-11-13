export class CreateBullQueue {
  public execute(): string {
    return `import Bull, { Job, Queue } ${'from'} 'bull';
import { queueConfig } ${'from'} '@config/queue';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IQueueProviderDTO } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';

export class BullProvider implements IQueueProviderDTO {
  private queues: IQueueDTO<Queue> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      this.queues[Job.key] = {
        queue: new Bull(Job.key, {
          redis: queueConfig.config,
        }),
        handle: new Job().handle as ({
          data,
        }: {
          data: unknown;
        }) => Promise<void>,
      };
    });
  }

  public async execute<T extends object>(
    key: string,
    data: T,
    attempts = 1,
  ): Promise<Job<T>> {
    return this.queues[key].queue.add(data, { attempts });
  }

  public async schedule<T extends object>(
    key: string,
    data: T,
    delay:
      | \`\${number}d\`
      | \`\${number}h\`
      | \`\${number}min\`
      | \`\${number}s\`
      | \`\${number}ms\`,
    attempts = 1,
  ): Promise<Job<T>> {
    const parsedDelay = convertToMilliseconds(delay);
    return this.queues[key].queue.add(data, { delay: parsedDelay, attempts });
  }

  public processQueue(): void {
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
