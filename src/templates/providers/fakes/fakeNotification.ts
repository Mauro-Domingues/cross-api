export class CreateFakeNotification {
  public execute(): string {
    return `import { ISendNotificationDTO } ${'from'} '../dtos/ISendNotificationDTO';
import { INotificationProvider } ${'from'} '../models/INotificationProvider';

export class FakeNotificationProvider implements INotificationProvider {
  private readonly notification: Array<ISendNotificationDTO> = [];

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    this.notification.push(data);
  }
}
`;
  }
}
