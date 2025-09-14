export class CreateAppConfig {
  public execute(): string {
    return `import { Joi } ${'from'} 'celebrate';
import { cpus } ${'from'} 'node:os';

interface IAppConfigDTO {
  readonly config: {
    readonly apiMode: 'development' | 'production' | 'test';
    readonly apiUrl: string;
    readonly apiPort: number;
    readonly apiWorkers: number;
    readonly allowedDomains: Array<string>;
  };
}

const appValidator = Joi.object<IAppConfigDTO>({
  config: Joi.object<IAppConfigDTO['config']>({
    apiMode: Joi.string().valid('development', 'production', 'test').required(),
    apiUrl: Joi.string()
      .uri({ scheme: ['http', 'https'] })
      .required(),
    apiPort: Joi.number().integer().positive().min(1).max(65535).required(),
    apiWorkers: Joi.number()
      .integer()
      .positive()
      .min(1)
      .max(cpus().length)
      .required(),
    allowedDomains: Joi.array()
      .items(Joi.string().uri({ scheme: ['http', 'https'] }))
      .min(1)
      .required(),
  }).required(),
});

export const appConfig = Object.freeze<IAppConfigDTO>({
  config: {
    apiMode: process.env.NODE_ENV,
    apiUrl: process.env.API_URL,
    apiPort: process.env.API_PORT,
    apiWorkers: process.env.API_WORKERS,
    allowedDomains: process.env.ALLOWED_DOMAINS?.replace(/[[\\]]/g, '')
      .split(/\\s*,\\s*/)
      .map(domain => domain.trim()),
  },
});

appValidator.validateAsync(appConfig);
`;
  }
}
