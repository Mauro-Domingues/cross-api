export class CreateMailConfig {
  execute() {
    return `interface IMailConfigDTO {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
}

export const mailConfig: IMailConfigDTO = {
  driver: process.env.MAIL_DRIVER,
  defaults: {
    from: {
      name: process.env.MAIL_ADRESS,
      email: process.env.MAIL_NAME,
    },
  },
};
`;
  }
}
