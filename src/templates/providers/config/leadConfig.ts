export class CreateLeadConfig {
  public execute(): string {
    return `interface ILeadConfigDTO {
  readonly driver: 'rdstation';
  readonly config: {
    readonly rdstation: {
      readonly apiUrl: string;
      readonly clientId: string;
      readonly clientSecret: string;
      readonly code: string;
      readonly publicApiKey: string;
    };
  };
}

export const leadConfig = Object.freeze<ILeadConfigDTO>({
  driver: 'rdstation',
  config: {
    rdstation: {
      apiUrl: process.env.RDSTATION_API_URL,
      clientId: process.env.RDSTATION_CLIENT_ID,
      clientSecret: process.env.RDSTATION_CLIENT_SECRET,
      code: process.env.RDSTATION_CODE,
      publicApiKey: process.env.RDSTATION_PUBLIC_API_KEY,
    },
  },
});
`;
  }
}
