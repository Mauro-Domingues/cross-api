export class CreateINotificationDTO {
  public execute(): string {
    return `export interface ISendNotificationDTO {
  device_id: string;
  header: string;
  content: string;
}
`;
  }
}
