export class CreateNotificationConfig {
  public execute(): string {
    return `interface INotificationConfigDTO {
  driver: 'onesignal' | 'firebase';
  onesignal: {
    app_id: string;
    token: string;
    api_url: string;
  };

  firebase: {
    api_key: string;
    api_url: string;
  };
}

export const notificationConfig: INotificationConfigDTO = {
  driver: process.env.NOTIFICATION_DRIVER,
  firebase: {
    api_key: process.env.FIREBASE_API_KEY,
    api_url: process.env.FIREBASE_API_URL,
  },
  onesignal: {
    app_id: process.env.OS_APP_ID,
    token: process.env.OS_TOKEN,
    api_url: process.env.OS_API_URL,
  },
};
`;
  }
}
