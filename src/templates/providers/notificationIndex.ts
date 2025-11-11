export class CreateNotificationIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { notificationConfig } fr\om '@config/notification';
import { FirebaseProvider } fr\om './implementations/FirebaseProvider';
import { OneSignalProvider } fr\om './implementations/OneSignalProvider';
import type { INotificationProvider } fr\om './models/INotificationProvider';

const providers: Record<
  typeof notificationConfig.driver,
  () => INotificationProvider
> = {
  onesignal: () => container.resolve(OneSignalProvider),
  firebase: () => container.resolve(FirebaseProvider),
};

container.registerInstance<INotificationProvider>(
  'NotificationProvider',
  providers[notificationConfig.driver](),
);
`;
  }
}
