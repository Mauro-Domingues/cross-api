export class CreateOneSignalNotification {
  public execute(): string {
    return `import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { AppError } from '@shared/errors/AppError';
import { ISendNotificationDTO } from '../dtos/ISendNotificationDTO';
import { INotificationProviderDTO } from '../models/INotificationProvider';

export class OneSignalProvider implements INotificationProviderDTO {
  private readonly options: AxiosRequestConfig;

  constructor() {
    this.options = {
      headers: {
        'Content-Type': 'application/json',
        token: process.env.OS_TOKEN,
      },
    };
  }

  public async sendNotification(data: ISendNotificationDTO): Promise<void> {
    const body = {
      app_id: process.env.OS_APP_ID,
      headings: { en: data.headings },
      contents: { en: data.headings },
      include_player_ids: [data.device_id],
    };

    try {
      const url: AxiosRequestConfig['url'] = \`\${process.env.OS_API_URL}/api/v1/notifications\`;

      return axios.post(url, body, this.options);
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
