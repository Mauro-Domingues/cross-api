export class CreateMailTemplateIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { mailTemplateConfig } ${'from'} '@config/mailTemplate';
import { HandlebarsMailTemplateProvider } ${'from'} './implementations/HandlebarsMailTemplateProvider';
import { IMailTemplateProvider } ${'from'} './models/IMailTemplateProvider';

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
