export class CreateINotificationDTO {
    execute() {
        return `export interface ISendNotificationDTO {
  name: string;
  device_id: string;
  headings: string;
  content: string;
}
`;
    }
}
