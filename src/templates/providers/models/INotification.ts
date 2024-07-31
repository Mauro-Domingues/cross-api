export class CreateINotification {
  public execute(): string {
    return `import { ISendNotificationDTO } ${'from'} '../dtos/ISendNotificationDTO';

export interface INotificationProvider {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
  }
}
