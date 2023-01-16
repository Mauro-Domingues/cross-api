"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFakeNotification;
function createFakeNotification() {
  return `import ISendNotificationDTO from '../dtos/ISendNotificationDTO';
import INotificationProvider from '../models/INotificationProvider';

class FakeNotificationProvider implements INotificationProvider {
  private notification: ISendNotificationDTO[] = [];

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    this.notification.push(data);
  }
}

export default FakeNotificationProvider;
`;
}