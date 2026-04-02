export class CreateFakeNotification {
  public execute(): string {
    return `import type { ISendNotificationDTO } fr\u006Fm '../dtos/ISendNotificationDTO';
import type { INotificationProvider } fr\u006Fm '../models/INotificationProvider';

export class FakeNotificationProvider implements INotificationProvider {
  private readonly notification = new Set<ISendNotificationDTO>();

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    this.notification.add(data);
  }
}
`;
  }
}
