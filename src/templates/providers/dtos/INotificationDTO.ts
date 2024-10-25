export class CreateINotificationDTO {
  public execute(): string {
    return `export interface ISendNotificationDTO {
  deviceId: string;
  header: string;
  content: string;
}
`;
  }
}
