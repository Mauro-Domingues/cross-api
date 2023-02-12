"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMailConfig = createMailConfig;
function createMailConfig() {
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