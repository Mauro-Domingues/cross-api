"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMailTemplateIndex = void 0;
class CreateMailTemplateIndex {
  execute() {
    return `import { container } from 'tsyringe';

import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';
import IMailTemplateProvider from './models/IMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
`;
  }
}
exports.CreateMailTemplateIndex = CreateMailTemplateIndex;