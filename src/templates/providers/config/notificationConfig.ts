export class CreateNotificationConfig {
  public execute(): string {
    return `interface INotificationConfigDTO {
  driver: 'onesignal' | 'firebase';
  onesignal: {
    api_url: string;
    app_id: string;
    token: string;
  };
  firebase: {
    api_url: string;
    api_key: string;
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
