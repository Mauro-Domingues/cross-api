export class CreateKafkaMessaging {
  public execute(): string {
    return `import { KafkaCore } fr\u006Fm 'cross-kafka';
import { messagingConfig } fr\u006Fm '@config/messaging';
import type { IMessagingProvider } fr\u006Fm '../models/IMessagingProvider';

export class KafkaProvider extends KafkaCore implements IMessagingProvider {
  public constructor() {
    super(messagingConfig.config.kafka);
  }
}
`;
  }
}
