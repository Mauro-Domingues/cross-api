export class CreateNotificationIndex {
  public execute(): string {
    return `import { container } from 'tsyringe';

import OneSignalProvider from './implementations/OneSignalProvider';
import INotificationProvider from './models/INotificationProvider';

const providers = {
  onesignal: container.resolve(OneSignalProvider),
};

container.registerInstance<INotificationProvider>(
  'NotificationProvider',
  providers.onesignal,
);
`;
  }
}
