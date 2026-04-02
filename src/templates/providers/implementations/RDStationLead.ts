export class CreateRDStationLead {
  public execute(): string {
    return `import type { AxiosInstance } fr\u006Fm 'axios';
import axios, { AxiosError } fr\u006Fm 'axios';
import { leadConfig } fr\u006Fm '@config/lead';
import { AppError } fr\u006Fm '@shared/errors/AppError';
import type { IAuthDTO } fr\u006Fm '../dtos/IAuthDTO';
import type { ILeadProvider } fr\u006Fm '../models/ILeadProvider';

export class RDStationProvider implements ILeadProvider {
  private readonly http: AxiosInstance;

  public constructor() {
    this.http = axios.create({
      baseURL: leadConfig.config.rdstation.apiUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private async getSession(): Promise<void> {
    try {
      const body = {
        client_id: leadConfig.config.rdstation.clientId,
        client_secret: leadConfig.config.rdstation.clientSecret,
        code: leadConfig.config.rdstation.code,
      };

      const httpResult = await this.http.post<IAuthDTO>('auth/token', body);

      this.http.interceptors.request.use(config => {
        config.headers.Authorization = \`Bearer \${httpResult.data.access_token}\`;
        return config;
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        throw new AppError(
          'FAILED_TO_GET_SESSION',
          error.response.statusText,
          error.response.status,
        );
      } else {
        throw error;
      }
    }
  }

  public async createLead(email: string): Promise<void> {
    try {
      await this.getSession();

      const body = {
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
          conversion_identifier: 'Newsletter Home',
          email,
          available_for_mailing: true,
        },
      };

      await this.http.post('platform/conversions', body, {
        params: {
          api_key: leadConfig.config.rdstation.publicApiKey,
        },
      });
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        throw new AppError(
          'FAILED_TO_CREATE_LEAD',
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
