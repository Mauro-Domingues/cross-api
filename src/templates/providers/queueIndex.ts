export class CreateQueueIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { queueConfig } ${'from'} '@config/queue';
import { KueProvider } ${'from'} './implementations/KueProvider';
import { IQueueProviderDTO } ${'from'} './models/IQueueProvider';
import { BullProvider } ${'from'} './implementations/BullProvider';
import { BeeProvider } ${'from'} './implementations/BeeProvider';

const providers = {
  kue: container.resolve(KueProvider),
  bull: container.resolve(BullProvider),
  bee: container.resolve(BeeProvider),
};

container.registerInstance<IQueueProviderDTO>(
  'QueueProvider',
  providers[queueConfig.driver],
);
`;
  }
}
