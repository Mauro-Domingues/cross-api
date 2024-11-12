export class CreateOneSignalNotification {
  public execute(): string {
    return `import axios, { AxiosError, AxiosInstance } ${'from'} 'axios';
import { AppError } ${'from'} '@shared/errors/AppError';
import { notificationConfig } ${'from'} '@config/notification';
import { ISendNotificationDTO } ${'from'} '../dtos/ISendNotificationDTO';
import { INotificationProvider } ${'from'} '../models/INotificationProvider';

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
    const body = {
      app_id: notificationConfig.config.onesignal.appId,
      headings: { en: data.header },
      contents: { en: data.content },
      include_player_ids: [data.deviceId],
    };

    try {
      await this.http.post('api/v1/notifications', body);
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
