export class CreateBeeQueue {
  public execute(): string {
    return `import Bee, { Job } ${'from'} 'bee-queue';
import { queueConfig } ${'from'} '@config/queue';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IQueueProvider } ${'from'} '../models/IQueueProvider';
import { jobs } ${'from'} '../public/jobs';
import { IQueueDTO } ${'from'} '../dtos/IQueueDTO';

export class BeeProvider implements IQueueProvider {
  private queues: IQueueDTO<Bee> = {};

  public constructor() {
    this.init();
    this.processQueue();
  }

  private init(): void {
    return jobs.forEach(Job => {
      const instance = new Job();
      this.queues[Job.key] = {
        queue: new Bee(Job.key, {
          prefix: queueConfig.config.prefix,
          activateDelayedJobs: true,
          redis: queueConfig.config,
        }),
        handle: instance.handle.bind(instance) as ({
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
  ): Promise<Job<T>> {
    return this.queues[key].queue.createJob(data).retries(attempts).save();
  }

  public async schedule<T extends object>(
    key: Capitalize<string>,
    data: T,
    delay: \`\${number}\${'d' | 'h' | 'min' | 's' | 'ms'}\`,
    attempts = 1,
  ): Promise<Job<T>> {
    const parsedDelay = convertToMilliseconds(delay);
    return this.queues[key].queue
      .createJob(data)
      .retries(attempts)
      .delayUntil(Date.now() + parsedDelay)
      .save();
  }

  private processQueue(): void {
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
