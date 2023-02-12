export function createINotificationDTO(): string {
  return `export default interface ISendNotificationlDTO {
  name: string;
  device_id: string;
  headings: string;
  content: string;
}
`;
}
