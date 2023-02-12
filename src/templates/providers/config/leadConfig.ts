export function createLeadConfig(): string {
  return `interface ILeadConfig {
  clientId: string;
  clientSecret: string;
  code: string;
  public_api_key: string;
}

export default {
  clientId: process.env.RD_CLIENT_ID,
  clientSecret: process.env.RD_CLIENT_SECRET,
  code: process.env.RD_CODE,
  public_api_key: process.env.RD_PUBLIC_API_KEY,
} as ILeadConfig;
`;
}
