export class CreateINotification {
  execute() {
    return `import { ISendNotificationDTO } from '../dtos/ISendNotificationDTO';

export interface INotificationProviderDTO {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
  }
}
