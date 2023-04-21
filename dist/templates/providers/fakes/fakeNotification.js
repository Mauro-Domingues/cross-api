export class CreateFakeNotification {
  execute() {
    return `import { ISendNotificationDTO } from '../dtos/ISendNotificationDTO';
import { INotificationProviderDTO } from '../models/INotificationProvider';

export class FakeNotificationProvider implements INotificationProviderDTO {
  private notification: ISendNotificationDTO[] = [];

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    this.notification.push(data);
  }
}
`;
  }
}
