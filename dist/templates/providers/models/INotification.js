"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createINotification;
function createINotification() {
  return `import ISendNotificationDTO from '../dtos/ISendNotificationDTO';

export default interface INotificationProvider {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
}