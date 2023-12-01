export class CreateINotificationDTO {
  public execute(): string {
    return `export interface ISendNotificationDTO {
  name: string;
  device_id: string;
  header: string;
  content: string;
}
`;
  }
}
