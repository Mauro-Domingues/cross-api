export class CreateMailConfig {
  public execute(): string {
    return `interface IMailConfigDTO {
  driver: 'nodemailer' | 'ses';
  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
  config: {
    host: string;
    port: number;
    user: string;
    secure: boolean;
    password: string;
    region: string;
  };
}

export const mailConfig: IMailConfigDTO = {
  driver: process.env.MAIL_DRIVER,
  defaults: {
    from: {
      name: process.env.MAIL_NAME,
      email: process.env.MAIL_ADRESS,
    },
  },
  config: {
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    user: process.env.MAIL_USER,
    secure: process.env.MAIL_SECURE === 'true',
    password: process.env.MAIL_PASS,
    region: process.env.MAIL_REGION,
  },
};
`;
  }
}
