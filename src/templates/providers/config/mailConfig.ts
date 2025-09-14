export class CreateMailConfig {
  public execute(): string {
    return `import { Joi } ${'from'} 'celebrate';

interface IMailConfigDTO {
  readonly driver: 'smtp' | 'ses';
  readonly config: {
    readonly default: {
      readonly from: {
        readonly name: string;
        readonly email: string;
      };
    };
    readonly smtp: {
      readonly host: string;
      readonly port: number;
      readonly secure: boolean;
      readonly user: string;
      readonly password: string;
    };
    readonly ses: {
      readonly user: string;
      readonly password: string;
      readonly region: string;
    };
  };
}

const mailValidator = Joi.object<IMailConfigDTO>({
  driver: Joi.string().valid('smtp', 'ses').required(),
  config: Joi.object<IMailConfigDTO['config']>({
    default: Joi.object<IMailConfigDTO['config']['default']>({
      from: Joi.object<IMailConfigDTO['config']['default']['from']>({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
      }).required(),
    }).required(),
    smtp: Joi.object<IMailConfigDTO['config']['smtp']>({
      host: Joi.string().hostname().allow('').required(),
      port: Joi.number()
        .allow(0)
        .integer()
        .positive()
        .min(1)
        .max(65535)
        .required(),
      secure: Joi.boolean().required(),
      user: Joi.string().allow('').required(),
      password: Joi.string().allow('').required(),
    }).required(),
    ses: Joi.object<IMailConfigDTO['config']['ses']>({
      user: Joi.string().allow('').required(),
      password: Joi.string().allow('').required(),
      region: Joi.string()
        .valid(
          'us-east-1',
          'us-east-2',
          'us-west-1',
          'us-west-2',
          'ca-central-1',
          'eu-west-1',
          'eu-west-2',
          'eu-west-3',
          'eu-central-1',
          'eu-central-2',
          'eu-north-1',
          'eu-south-1',
          'ap-south-1',
          'ap-south-2',
          'ap-northeast-1',
          'ap-northeast-2',
          'ap-northeast-3',
          'ap-southeast-1',
          'ap-southeast-2',
          'ap-southeast-3',
          'me-south-1',
          'me-central-1',
          'il-central-1',
          'af-south-1',
          'sa-east-1',
          'us-gov-west-1',
          'us-gov-east-1',
        )
        .allow('')
        .required(),
    }).required(),
  }).required(),
});

export const mailConfig = Object.freeze<IMailConfigDTO>({
  driver: process.env.MAIL_DRIVER,
  config: {
    default: {
      from: {
        name: process.env.MAIL_NAME,
        email: process.env.MAIL_ADDRESS,
      },
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      user: process.env.SMTP_USER,
      secure: process.env.SMTP_SECURE === 'true',
      password: process.env.SMTP_PASSWORD,
    },
    ses: {
      user: process.env.SES_USER,
      password: process.env.SES_PASSWORD,
      region: process.env.SES_REGION,
    },
  },
});

mailValidator.validateAsync(mailConfig);
`;
  }
}
