export class CreateRDStationLead {
  public execute(): string {
    return `import { leadConfig } from '@config/lead';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import { AppError } from '@shared/errors/AppError';

import { ICreateLeadDTO } from '../dtos/ICreateLeadDTO';
import { ILeadProviderDTO } from '../models/ILeadProvider';

interface IAuthDTO {
  access_token: string;
  expires_in: string;
  refresh_token: string;
}

export class RDStationProvider implements ILeadProviderDTO {
  private async getSession(): Promise<IAuthDTO> {
    try {
      const url: AxiosRequestConfig['url'] = \`\${process.env.RD_API_URL}/auth/token\`;

      const body = {
        client_id: leadConfig.clientId,
        client_secret: leadConfig.clientSecret,
        code: leadConfig.code,
      };

      const axiosResult = await axios.post<IAuthDTO>(url, body);

      if (axiosResult.status.toString().at(0) !== '2') {
        throw new AppError('Failed get session');
      }

      return axiosResult.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response) {
        throw new AppError(error.response.statusText, error.response.status);
      } else {
        throw error;
      }
    }
  }

  public async createLead(email: string): Promise<ICreateLeadDTO | undefined> {
    try {
      const token = await this.getSession();

      const url: AxiosRequestConfig['url'] = \`\${process.env.RD_API_URL}/platform/conversions?api_key=\${leadConfig.publicApiKey}\`;

      const body = {
        event_type: 'CONVERSION',
        event_family: 'CDP',
        payload: {
          conversion_identifier: 'Newsletter Home',
          email,
          available_for_mailing: true,
        },
      };

      const options: AxiosRequestConfig = {
        headers: {
          'Content-Type': 'application/json',
          token: \`Bearer \${token.access_token}\`,
        },
      };

      const axiosResult = await axios.post<ICreateLeadDTO>(url, body, options);

      if (axiosResult.status.toString().at(0) !== '2') {
        throw new AppError('Failed create lead');
      }

      return axiosResult.data;
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
