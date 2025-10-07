export class CreateFakeNotification {
  public execute(): string {
    return `import { ISendNotificationDTO } fr\om '../dtos/ISendNotificationDTO';
import { INotificationProvider } fr\om '../models/INotificationProvider';

export class FakeNotificationProvider implements INotificationProvider {
  private readonly notification: Array<ISendNotificationDTO> = [];

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    this.notification.push(data);
  }
}
`;
  }
}
