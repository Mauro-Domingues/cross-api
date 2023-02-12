export function createMailConfig(): string {
  return `interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER,

  defaults: {
    from: {
      email: process.env.MAIL_NAME,
      name: process.env.MAIL_ADRESS,
    },
  },
} as IMailConfig;
`;
}
