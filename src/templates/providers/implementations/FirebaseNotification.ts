export class CreateFirebaseNotification {
  public execute(): string {
    return `import axios, { AxiosError, AxiosInstance } ${'from'} 'axios';
import { AppError } ${'from'} '@shared/errors/AppError';
import { notificationConfig } ${'from'} '@config/notification';
import { ISendNotificationDTO } ${'from'} '../dtos/ISendNotificationDTO';
import { INotificationProvider } ${'from'} '../models/INotificationProvider';

export class FirebaseProvider implements INotificationProvider {
  private readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create({
      baseURL: notificationConfig.config.firebase.apiUrl,
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`key=\${notificationConfig.config.firebase.apiKey}\`,
      },
    });
  }

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    const body = {
      to: data.deviceId,
      notification: {
        title: data.header,
        body: data.content,
      },
    };

    try {
      const httpResult = await this.http.post('fcm/send', body);

      return console.log(httpResult.data);
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
