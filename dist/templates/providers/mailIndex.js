"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMailIndex = void 0;
class CreateMailIndex {
  execute() {
    return `import mailConfig from '@config/mail';
import { container } from 'tsyringe';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';
import IMailProvider from './models/IMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
`;
  }
}
exports.CreateMailIndex = CreateMailIndex;