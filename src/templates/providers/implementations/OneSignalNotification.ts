export class CreateOneSignalNotification {
  public execute(): string {
    return `import type { AxiosInstance } fr\om 'axios';
import axios, { AxiosError } fr\om 'axios';
import { AppError } fr\om '@shared/errors/AppError';
import { notificationConfig } fr\om '@config/notification';
import type { ISendNotificationDTO } fr\om '../dtos/ISendNotificationDTO';
import type { INotificationProvider } fr\om '../models/INotificationProvider';

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
