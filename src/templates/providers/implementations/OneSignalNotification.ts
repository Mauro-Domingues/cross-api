export class CreateOneSignalNotification {
  public execute(): string {
    return `import axios, { AxiosError, AxiosRequestConfig } ${'from'} 'axios';
import { AppError } ${'from'} '@shared/errors/AppError';
import { ISendNotificationDTO } ${'from'} '../dtos/ISendNotificationDTO';
import { INotificationProviderDTO } ${'from'} '../models/INotificationProvider';

export class OneSignalProvider implements INotificationProviderDTO {
  private readonly options: AxiosRequestConfig;

  public constructor() {
    this.options = {
      baseURL: process.env.OS_API_URL,
      headers: {
        'Content-Type': 'application/json',
        token: \`Basic \${process.env.OS_TOKEN}\`,
      },
    };
  }

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    const body = {
      app_id: process.env.OS_APP_ID,
      headings: { en: data.header },
      contents: { en: data.content },
      include_player_ids: [data.device_id],
    };

    try {
      const axiosResult = await axios.post(
        'api/v1/notifications',
        body,
        this.options,
      );

      return console.log(axiosResult.data);
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
