export class CreateNotificationIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { notificationConfig } ${'from'} '@config/notification';
import { OneSignalProvider } ${'from'} './implementations/OneSignalProvider';
import { INotificationProvider } ${'from'} './models/INotificationProvider';
import { FirebaseProvider } ${'from'} './implementations/FirebaseProvider';

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
