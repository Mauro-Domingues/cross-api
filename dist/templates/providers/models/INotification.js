"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateINotification = void 0;
class CreateINotification {
  execute() {
    return `import ISendNotificationDTO from '../dtos/ISendNotificationDTO';

export default interface INotificationProvider {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
  }
}
exports.CreateINotification = CreateINotification;