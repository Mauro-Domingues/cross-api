export class CreateLeadConfig {
  public execute(): string {
    return `interface ILeadConfig {
  clientId: string;
  clientSecret: string;
  code: string;
  publicApiKey: string;
}

export default {
  clientId: process.env.RD_CLIENT_ID,
  clientSecret: process.env.RD_CLIENT_SECRET,
  code: process.env.RD_CODE,
  publicApiKey: process.env.RD_PUBLIC_API_KEY,
} as ILeadConfig;
`;
  }
}
