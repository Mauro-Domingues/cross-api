export class CreateLeadConfig {
  public execute(): string {
    return `interface ILeadConfigDTO {
  readonly driver: 'rdstation';
  readonly config: {
    readonly rdstation: {
      readonly api_url: string;
      readonly client_id: string;
      readonly client_secret: string;
      readonly code: string;
      readonly public_api_key: string;
    };
  };
}

export const leadConfig = Object.freeze<ILeadConfigDTO>({
  driver: 'rdstation',
  config: {
    rdstation: {
      api_url: process.env.RDSTATION_API_URL,
      client_id: process.env.RDSTATION_CLIENT_ID,
      client_secret: process.env.RDSTATION_CLIENT_SECRET,
      code: process.env.RDSTATION_CODE,
      public_api_key: process.env.RDSTATION_PUBLIC_API_KEY,
    },
  },
});
`;
  }
}
