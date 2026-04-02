export class CreateOneSignalNotification {
  public execute(): string {
    return `import type { AxiosInstance } fr\u006Fm 'axios';
import axios, { AxiosError } fr\u006Fm 'axios';
import { notificationConfig } fr\u006Fm '@config/notification';
import { AppError } fr\u006Fm '@shared/errors/AppError';
import type { ISendNotificationDTO } fr\u006Fm '../dtos/ISendNotificationDTO';
import type { INotificationProvider } fr\u006Fm '../models/INotificationProvider';

export class OneSignalProvider implements INotificationProvider {
  private readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create({
      baseURL: notificationConfig.config.onesignal.apiUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`Basic \${notificationConfig.config.onesignal.token}\`,
      },
    });
  }

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    try {
      const body = {
        app_id: notificationConfig.config.onesignal.appId,
        headings: { en: data.header },
        contents: { en: data.content },
        include_player_ids: [data.deviceId],
        data: data.variables,
      };

      await this.http.post('notifications', body);
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        throw new AppError(
          'FAILED_TO_CREATE_NOTIFICATION',
          error.response.statusText,
          error.response.status,
        );
      } else {
        throw error;
      }
    }
  }
}
`;
  }
}
