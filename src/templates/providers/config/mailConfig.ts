export class CreateMailConfig {
  public execute(): string {
    return `interface IMailConfigDTO {
  readonly driver: 'smtp' | 'ses';
  readonly config: {
    readonly defaults: {
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

export const mailConfig = Object.freeze<IMailConfigDTO>({
  driver: process.env.MAIL_DRIVER,
  config: {
    defaults: {
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
`;
  }
}
