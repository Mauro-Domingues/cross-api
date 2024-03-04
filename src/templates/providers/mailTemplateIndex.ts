export class CreateMailTemplateIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';

import { mailTemplateConfig } ${'from'} '@config/mailTemplate';
import { HandlebarsMailTemplateProvider } ${'from'} './implementations/HandlebarsMailTemplateProvider';
import { IMailTemplateProviderDTO } ${'from'} './models/IMailTemplateProvider';

const providers: Record<
  typeof mailTemplateConfig.driver,
  () => IMailTemplateProviderDTO
> = {
  handlebars: () => container.resolve(HandlebarsMailTemplateProvider),
};

container.registerInstance<IMailTemplateProviderDTO>(
  'MailTemplateProvider',
  providers[mailTemplateConfig.driver](),
);
`;
  }
}
