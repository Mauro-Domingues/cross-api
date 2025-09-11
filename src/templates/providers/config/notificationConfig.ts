export class CreateNotificationConfig {
  public execute(): string {
    return `import { resolve } ${'from'} 'node:path';

interface INotificationConfigDTO {
  readonly driver: 'firebase' | 'onesignal';
  readonly config: {
    readonly onesignal: {
      readonly apiUrl: string;
      readonly appId: string;
      readonly token: string;
    };
    readonly firebase: {
      readonly apiUrl: string;
      readonly appId: string;
      readonly clientEmail: string;
      readonly certPath: string;
      readonly scopes: string;
    };
  };
}

export const notificationConfig = Object.freeze<INotificationConfigDTO>({
  driver: process.env.NOTIFICATION_DRIVER,
  config: {
    firebase: {
      apiUrl: process.env.FIREBASE_API_URL,
      appId: process.env.FIREBASE_APP_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      certPath: resolve(__dirname, '..', 'keys', 'firebase.pem'),
      scopes: 'https://www.googleapis.com/auth/firebase.messaging',
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
