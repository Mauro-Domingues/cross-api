export class CreateMessagingIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { messagingConfig } fr\u006Fm '@config/messaging';
import { KafkaProvider } fr\u006Fm './implementations/KafkaProvider';
import type { IMessagingProvider } fr\u006Fm './models/IMessagingProvider';

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
