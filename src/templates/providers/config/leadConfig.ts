export class CreateLeadConfig {
  public execute(): string {
    return `interface ILeadConfigDTO {
  driver: 'rdstation';
  config: {
    clientId: string;
    clientSecret: string;
    code: string;
    publicApiKey: string;
  };
}

export const leadConfig: ILeadConfigDTO = {
  driver: 'rdstation',
  config: {
    clientId: process.env.RD_CLIENT_ID,
    clientSecret: process.env.RD_CLIENT_SECRET,
    code: process.env.RD_CODE,
    publicApiKey: process.env.RD_PUBLIC_API_KEY,
  },
};
`;
  }
}
