export class CreateQueueIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { queueConfig } fr\om '@config/queue';
import { BeeProvider } fr\om './implementations/BeeProvider';
import { BullProvider } fr\om './implementations/BullProvider';
import { KueProvider } fr\om './implementations/KueProvider';
import type { IQueueProvider } fr\om './models/IQueueProvider';

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
