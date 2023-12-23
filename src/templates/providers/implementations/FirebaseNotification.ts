export class CreateFirebaseNotification {
  public execute(): string {
    return `import axios, { AxiosError, AxiosRequestConfig } ${'from'} 'axios';
import { AppError } ${'from'} '@shared/errors/AppError';
import { ISendNotificationDTO } ${'from'} '../dtos/ISendNotificationDTO';
import { INotificationProviderDTO } ${'from'} '../models/INotificationProvider';

export class FirebaseProvider implements INotificationProviderDTO {
  private readonly options: AxiosRequestConfig;

  public constructor() {
    this.options = {
      baseURL: process.env.FIREBASE_API_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: \`key=\${process.env.FIREBASE_API_KEY}\`,
      },
    };
  }

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    const body = {
      to: data.device_id,
      notification: {
        title: data.headings,
        body: data.content,
      },
    };

    try {
      const axiosResult = await axios.post('fcm/send', body, this.options);

      return console.log(axiosResult.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        throw new AppError(error.response.statusText, error.response.status);
      } else {
        throw error;
      }
    }
  }
}
`;
  }
}
