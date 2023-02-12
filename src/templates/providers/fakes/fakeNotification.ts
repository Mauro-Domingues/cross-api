export function createFakeNotification(): string {
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
