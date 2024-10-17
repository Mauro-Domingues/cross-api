export class CreateNotificationConfig {
  public execute(): string {
    return `interface INotificationConfigDTO {
  readonly driver: 'onesignal' | 'firebase';
  readonly config: {
    readonly onesignal: {
      readonly api_url: string;
      readonly app_id: string;
      readonly token: string;
    };
    readonly firebase: {
      readonly api_url: string;
      readonly api_key: string;
    };
  };
}

export const notificationConfig = Object.freeze<INotificationConfigDTO>({
  driver: process.env.NOTIFICATION_DRIVER,
  config: {
    firebase: {
      api_url: process.env.FIREBASE_API_URL,
      api_key: process.env.FIREBASE_API_KEY,
    },
    onesignal: {
      api_url: process.env.ONESIGNAL_API_URL,
      app_id: process.env.ONESIGNAL_APP_ID,
      token: process.env.ONESIGNAL_TOKEN,
    },
  },
});
`;
  }
}
