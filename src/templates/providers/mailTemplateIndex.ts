export class CreateMailTemplateIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { mailTemplateConfig } fr\om '@config/mailTemplate';
import { HandlebarsMailTemplateProvider } fr\om './implementations/HandlebarsMailTemplateProvider';
import type { IMailTemplateProvider } fr\om './models/IMailTemplateProvider';

const providers: Record<
  typeof mailTemplateConfig.driver,
  () => IMailTemplateProvider
> = {
  handlebars: () => container.resolve(HandlebarsMailTemplateProvider),
};

container.registerInstance<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers[mailTemplateConfig.driver](),
);
`;
  }
}
