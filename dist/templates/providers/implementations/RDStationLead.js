"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRDStationLead;
function createRDStationLead() {
  return `import leadConfig from '@config/lead';
import axios from 'axios';

import AppError from '@shared/errors/AppError';

import ICreateLeadDTO from '../dtos/ICreateLeadDTO';
import ILeadProvider from '../models/ILeadProvider';

interface IAuth {
  access_token: string;
  expires_in: string;
  refresh_token: string;
}

class RDStationProvider implements ILeadProvider {
  public async createLead(email: string): Promise<ICreateLeadDTO | undefined> {
    try {
      const response = await axios.post<IAuth>(
        'https://api.rd.services/auth/token',
        {
          client_id: leadConfig.clientId,
          client_secret: leadConfig.clientSecret,
          code: leadConfig.code,
        },
      );

      axios.defaults.headers.common.Authorization = \`Bearer \${response.data.access_token}\`;

      const leadResponse = await axios.post<ICreateLeadDTO>(
        \`https://api.rd.services/platform/conversions?api_key=\${leadConfig.public_api_key}\`,
        {
          event_type: 'CONVERSION',
          event_family: 'CDP',
          payload: {
            conversion_identifier: 'Newsletter Home',
            email,
            available_for_mailing: true,
          },
        },
      );

      return leadResponse.data;
    } catch (error: any) {
      throw new AppError(error.response.statusText, error.response.status);
    }
  }
}

export default RDStationProvider;
`;
}