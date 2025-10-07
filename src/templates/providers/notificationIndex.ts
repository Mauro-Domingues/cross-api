export class CreateNotificationIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { notificationConfig } fr\om '@config/notification';
import { OneSignalProvider } fr\om './implementations/OneSignalProvider';
import { INotificationProvider } fr\om './models/INotificationProvider';
import { FirebaseProvider } fr\om './implementations/FirebaseProvider';

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
