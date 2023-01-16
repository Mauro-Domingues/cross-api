"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createNotificationIndex;
function createNotificationIndex() {
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