export class CreateFirebaseNotification {
  public execute(): string {
    return `import axios, { AxiosError, AxiosInstance } ${'from'} 'axios';
import { AppError } ${'from'} '@shared/errors/AppError';
import { ISendNotificationDTO } ${'from'} '../dtos/ISendNotificationDTO';
import { INotificationProvider } ${'from'} '../models/INotificationProvider';

export class FirebaseProvider implements INotificationProvider {
  private readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create({
      baseURL: process.env.FIREBASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`key=\${process.env.FIREBASE_API_KEY}\`,
      },
    });
  }

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    const body = {
      to: data.device_id,
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
