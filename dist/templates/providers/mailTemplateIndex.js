export class CreateMailTemplateIndex {
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
