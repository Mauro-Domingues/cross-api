export class CreateRDStationLead {
  public execute(): string {
    return `import { leadConfig } ${'from'} '@config/lead';
import axios, { AxiosError, AxiosRequestConfig } ${'from'} 'axios';

import { AppError } ${'from'} '@shared/errors/AppError';

import { ICreateLeadDTO } ${'from'} '../dtos/ICreateLeadDTO';
import { ILeadProviderDTO } ${'from'} '../models/ILeadProvider';
import { IAuthDTO } ${'from'} '../dtos/IAuthDTO';

export class RDStationProvider implements ILeadProviderDTO {
  private options: AxiosRequestConfig;

  constructor() {
    this.options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  private async getSession(): Promise<void> {
    try {
      const body = {
        client_id: leadConfig.config.clientId,
        client_secret: leadConfig.config.clientSecret,
        code: leadConfig.config.code,
      };

      const axiosResult = await axios.post<IAuthDTO>(
        'auth/token',
        body,
        this.options,
      );

      if (this.options.headers) {
        this.options.headers.Authorization = \`Bearer \${axiosResult.data.access_token}\`;
      }
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

      const axiosResult = await axios.post<ICreateLeadDTO>(
        \`platform/conversions?api_key=\${leadConfig.config.publicApiKey}\`,
        body,
        this.options,
      );

      return axiosResult.data;
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
