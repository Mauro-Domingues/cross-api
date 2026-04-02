export class CreateMailTemplateIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { mailTemplateConfig } fr\u006Fm '@config/mailTemplate';
import { HandlebarsProvider } fr\u006Fm './implementations/HandlebarsProvider';
import type { IMailTemplateProvider } fr\u006Fm './models/IMailTemplateProvider';

const providers: Record<
  typeof mailTemplateConfig.driver,
  () => IMailTemplateProvider
> = {
  handlebars: () => container.resolve(HandlebarsProvider),
};

container.registerInstance<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers[mailTemplateConfig.driver](),
);
`;
  }
}
