export class CreateLeadConfig {
  public execute(): string {
    return `interface ILeadConfigDTO {
  readonly driver: 'rdstation';
  readonly config: {
    readonly clientId: string;
    readonly clientSecret: string;
    readonly code: string;
    readonly publicApiKey: string;
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
