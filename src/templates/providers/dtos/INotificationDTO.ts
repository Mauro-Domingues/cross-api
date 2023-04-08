export class CreateINotificationDTO {
  public execute(): string {
    return `export interface ISendNotificationDTO {
  name: string;
  device_id: string;
  headings: string;
  content: string;
}
`;
  }
}
