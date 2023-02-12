export function createINotification(): string {
  return `import ISendNotificationDTO from '../dtos/ISendNotificationDTO';

export default interface INotificationProvider {
  sendNotification(data: ISendNotificationDTO): Promise<void>;
}
`;
}
