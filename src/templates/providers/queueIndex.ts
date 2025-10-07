export class CreateQueueIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { queueConfig } fr\om '@config/queue';
import { KueProvider } fr\om './implementations/KueProvider';
import { IQueueProvider } fr\om './models/IQueueProvider';
import { BullProvider } fr\om './implementations/BullProvider';
import { BeeProvider } fr\om './implementations/BeeProvider';

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
