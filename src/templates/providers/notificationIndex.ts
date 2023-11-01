export class CreateNotificationIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';

import { notificationConfig } ${'from'} '@config/notification';
import { OneSignalProvider } ${'from'} './implementations/OneSignalProvider';
import { INotificationProviderDTO } ${'from'} './models/INotificationProvider';

const providers = {
  onesignal: container.resolve(OneSignalProvider),
};

container.registerInstance<INotificationProviderDTO>(
  'NotificationProvider',
  providers[notificationConfig.driver],
);
`;
  }
}
