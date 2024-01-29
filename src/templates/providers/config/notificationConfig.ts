export class CreateNotificationConfig {
  public execute(): string {
    return `interface INotificationConfigDTO {
  readonly driver: 'onesignal' | 'firebase';
  readonly onesignal: {
    readonly api_url: string;
    readonly app_id: string;
    readonly token: string;
  };
  readonly firebase: {
    readonly api_url: string;
    readonly api_key: string;
  };
}

export const notificationConfig: INotificationConfigDTO = {
  driver: process.env.NOTIFICATION_DRIVER,
  firebase: {
    api_url: process.env.FIREBASE_API_URL,
    api_key: process.env.FIREBASE_API_KEY,
  },
  onesignal: {
    api_url: process.env.OS_API_URL,
    app_id: process.env.OS_APP_ID,
    token: process.env.OS_TOKEN,
  },
};
`;
  }
}
