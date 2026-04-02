export class CreateINotification {
  public execute(): string {
    return `import type { ISendNotificationDTO } fr\u006Fm '../dtos/ISendNotificationDTO';

export interface INotificationProvider {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
  }
}
