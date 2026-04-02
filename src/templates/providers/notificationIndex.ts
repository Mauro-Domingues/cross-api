export class CreateNotificationIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { notificationConfig } fr\u006Fm '@config/notification';
import { FirebaseProvider } fr\u006Fm './implementations/FirebaseProvider';
import { OneSignalProvider } fr\u006Fm './implementations/OneSignalProvider';
import type { INotificationProvider } fr\u006Fm './models/INotificationProvider';

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
