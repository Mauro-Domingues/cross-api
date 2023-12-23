export class CreateNotificationIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';

import { notificationConfig } ${'from'} '@config/notification';
import { OneSignalProvider } ${'from'} './implementations/OneSignalProvider';
import { INotificationProviderDTO } ${'from'} './models/INotificationProvider';
import { FirebaseProvider } ${'from'} './implementations/FirebaseProvider';

const providers = {
  onesignal: container.resolve(OneSignalProvider),
  firebase: container.resolve(FirebaseProvider),
};

container.registerInstance<INotificationProviderDTO>(
  'NotificationProvider',
  providers[notificationConfig.driver],
);
`;
  }
}
