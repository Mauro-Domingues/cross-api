export class CreateKafkaMessaging {
  public execute(): string {
    return `import { KafkaCore } fr\om 'cross-kafka';
import { messagingConfig } fr\om '@config/messaging';
import type { IMessagingProvider } fr\om '../models/IMessagingProvider';

export class KafkaProvider extends KafkaCore implements IMessagingProvider {
  public constructor() {
    super(messagingConfig.config.kafka);
  }
}
`;
  }
}
