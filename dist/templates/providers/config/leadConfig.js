"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateLeadConfig = void 0;
class CreateLeadConfig {
    execute() {
        return `interface ILeadConfigDTO {
  clientId: string;
  clientSecret: string;
  code: string;
  publicApiKey: string;
}

export const leadConfig: ILeadConfigDTO = {
  clientId: process.env.RD_CLIENT_ID,
  clientSecret: process.env.RD_CLIENT_SECRET,
  code: process.env.RD_CODE,
  publicApiKey: process.env.RD_PUBLIC_API_KEY,
};
`;
    }
}
exports.CreateLeadConfig = CreateLeadConfig;
