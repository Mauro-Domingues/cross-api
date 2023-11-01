export class CreateNotificationConfig {
  public execute(): string {
    return `interface INotificationConfigDTO {
  driver: 'onesignal';
}

export const notificationConfig: INotificationConfigDTO = {
  driver: 'onesignal',
};
`;
  }
}
