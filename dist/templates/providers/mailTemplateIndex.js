"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateMailTemplateIndex = void 0;
class CreateMailTemplateIndex {
  execute() {
    return `import { container } from 'tsyringe';

import { HandlebarsMailTemplateProvider } from './implementations/HandlebarsMailTemplateProvider';
import { IMailTemplateProviderDTO } from './models/IMailTemplateProvider';

const providers = {
  handlebars: container.resolve(HandlebarsMailTemplateProvider),
};

container.registerInstance<IMailTemplateProviderDTO>(
  'MailTemplateProvider',
  providers.handlebars,
);
`;
  }
}
exports.CreateMailTemplateIndex = CreateMailTemplateIndex;