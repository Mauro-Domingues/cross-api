"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMailTemplateIndex;
function createMailTemplateIndex() {
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