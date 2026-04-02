export class CreateQueueIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { queueConfig } fr\u006Fm '@config/queue';
import { BeeProvider } fr\u006Fm './implementations/BeeProvider';
import { BullProvider } fr\u006Fm './implementations/BullProvider';
import { KueProvider } fr\u006Fm './implementations/KueProvider';
import type { IQueueProvider } fr\u006Fm './models/IQueueProvider';

const providers: Record<typeof queueConfig.driver, () => IQueueProvider> = {
  kue: () => container.resolve(KueProvider),
  bull: () => container.resolve(BullProvider),
  bee: () => container.resolve(BeeProvider),
};

container.registerInstance<IQueueProvider>(
  'QueueProvider',
  providers[queueConfig.driver](),
);
`;
  }
}
