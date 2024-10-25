export class CreateRDStationLead {
  public execute(): string {
    return `import { leadConfig } ${'from'} '@config/lead';
import axios, { AxiosInstance, AxiosError } ${'from'} 'axios';
import { AppError } ${'from'} '@shared/errors/AppError';
import { ICreateLeadDTO } ${'from'} '../dtos/ICreateLeadDTO';
import { ILeadProvider } ${'from'} '../models/ILeadProvider';
import { IAuthDTO } ${'from'} '../dtos/IAuthDTO';

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

  public async createLead(email: string): Promise<ICreateLeadDTO | undefined> {
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

      const httpResult = await this.http.post<ICreateLeadDTO>(
        'platform/conversions',
        body,
        {
          params: {
            api_key: leadConfig.config.rdstation.publicApiKey,
          },
        },
      );

      return httpResult.data;
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
