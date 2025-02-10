export class CreateAppConfig {
  public execute(): string {
    return `interface IAppConfigDTO {
  readonly config: {
    readonly apiMode: 'development' | 'production' | 'test';
    readonly apiUrl: string;
    readonly apiPort: number;
    readonly allowedDomains: Array<string>;
  };
}

export const appConfig = Object.freeze<IAppConfigDTO>({
  config: {
    apiMode: process.env.NODE_ENV,
    apiUrl: process.env.API_URL,
    apiPort: process.env.API_PORT,
    allowedDomains: process.env.ALLOWED_DOMAINS?.replace(/[[\\]]/g, '').split(
      ',',
    ),
  },
});
`;
  }
}
