export class CreateNotificationIndex {
    execute() {
        return `import { container } from 'tsyringe';

import { OneSignalProvider } from './implementations/OneSignalProvider';
import { INotificationProviderDTO } from './models/INotificationProvider';

const providers = {
  onesignal: container.resolve(OneSignalProvider),
};

container.registerInstance<INotificationProviderDTO>(
  'NotificationProvider',
  providers.onesignal,
);
`;
    }
}
