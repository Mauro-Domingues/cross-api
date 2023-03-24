"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMailConfig = void 0;
class CreateMailConfig {
    execute() {
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
}
exports.CreateMailConfig = CreateMailConfig;
