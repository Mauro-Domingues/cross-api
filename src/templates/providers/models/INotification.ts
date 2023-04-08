export class CreateINotification {
  public execute(): string {
    return `import { ISendNotificationDTO } from '../dtos/ISendNotificationDTO';

export interface INotificationProviderDTO {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
  }
}
