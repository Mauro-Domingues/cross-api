export class CreateLeadConfig {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';

interface ILeadConfigDTO {
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

const leadValidator = Joi.object<ILeadConfigDTO>({
  driver: Joi.string().valid('rdstation').required(),
  config: Joi.object<ILeadConfigDTO['config']>({
    rdstation: Joi.object<ILeadConfigDTO['config']['rdstation']>({
      apiUrl: Joi.string().uri().required(),
      clientId: Joi.string().allow('').required(),
      clientSecret: Joi.string().allow('').required(),
      code: Joi.string().allow('').required(),
      publicApiKey: Joi.string().allow('').required(),
    }).required(),
  }).required(),
});

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

leadValidator.validateAsync(leadConfig);
`;
  }
}
