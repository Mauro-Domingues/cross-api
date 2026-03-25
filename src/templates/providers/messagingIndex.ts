export class CreateMessagingIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { messagingConfig } fr\om '@config/messaging';
import { KafkaProvider } fr\om './implementations/KafkaProvider';
import type { IMessagingProvider } fr\om './models/IMessagingProvider';

const providers: Record<
  typeof messagingConfig.driver,
  () => IMessagingProvider
> = {
  kafka: () => container.resolve(KafkaProvider),
};

container.registerInstance<IMessagingProvider>(
  'MessagingProvider',
  providers[messagingConfig.driver](),
);
`;
  }
}
