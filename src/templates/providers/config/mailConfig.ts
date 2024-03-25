export class CreateMailConfig {
  public execute(): string {
    return `interface IMailConfigDTO {
  readonly driver: 'nodemailer' | 'ses';
  readonly config: {
    readonly defaults: {
      readonly from: {
        readonly name: string;
        readonly email: string;
      };
    };
    readonly host: string;
    readonly port: number;
    readonly user: string;
    readonly secure: boolean;
    readonly password: string;
    readonly region: string;
  };
}

export const mailConfig = Object.freeze<IMailConfigDTO>({
  driver: process.env.MAIL_DRIVER,
  config: {
    defaults: {
      from: {
        name: process.env.MAIL_NAME,
        email: process.env.MAIL_ADRESS,
      },
    },
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    user: process.env.MAIL_USER,
    secure: process.env.MAIL_SECURE === 'true',
    password: process.env.MAIL_PASS,
    region: process.env.MAIL_REGION,
  },
});
`;
  }
}
