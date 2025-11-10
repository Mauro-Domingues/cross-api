export class CreateINotification {
  public execute(): string {
    return `import type { ISendNotificationDTO } fr\om '../dtos/ISendNotificationDTO';

export interface INotificationProvider {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
  }
}
