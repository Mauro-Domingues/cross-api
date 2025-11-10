export class CreateFakeNotification {
  public execute(): string {
    return `import type { ISendNotificationDTO } fr\om '../dtos/ISendNotificationDTO';
import type { INotificationProvider } fr\om '../models/INotificationProvider';

export class FakeNotificationProvider implements INotificationProvider {
  private readonly notification = new Set<ISendNotificationDTO>();

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    this.notification.add(data);
  }
}
`;
  }
}
