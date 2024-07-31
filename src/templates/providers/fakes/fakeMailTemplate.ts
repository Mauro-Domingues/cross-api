export class CreateFakeMailTemplate {
  public execute(): string {
    return `import { IMailTemplateProvider } ${'from'} '../models/IMailTemplateProvider';

export class FakeMailTemplateProvider implements IMailTemplateProvider {
  public parse(): string {
    return 'Mail content';
  }
}
`;
  }
}
