"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateFakeNotification = void 0;
class CreateFakeNotification {
  execute() {
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
}
exports.CreateFakeNotification = CreateFakeNotification;