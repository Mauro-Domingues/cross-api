export class CreateNotificationConfig {
  public execute(): string {
    return `interface INotificationConfigDTO {
  readonly driver: 'onesignal' | 'firebase';
  readonly config: {
    readonly onesignal: {
      readonly apiUrl: string;
      readonly appId: string;
      readonly token: string;
    };
    readonly firebase: {
      readonly apiUrl: string;
      readonly apiKey: string;
    };
  };
}

export const notificationConfig = Object.freeze<INotificationConfigDTO>({
  driver: process.env.NOTIFICATION_DRIVER,
  config: {
    firebase: {
      apiUrl: process.env.FIREBASE_API_URL,
      apiKey: process.env.FIREBASE_API_KEY,
    },
    onesignal: {
      apiUrl: process.env.ONESIGNAL_API_URL,
      appId: process.env.ONESIGNAL_APP_ID,
      token: process.env.ONESIGNAL_TOKEN,
    },
  },
});
`;
  }
}
