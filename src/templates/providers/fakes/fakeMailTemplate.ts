export class CreateFakeMailTemplate {
  public execute(): string {
    return `import { IMailTemplateProviderDTO } ${'from'} '../models/IMailTemplateProvider';

export class FakeMailTemplateProvider implements IMailTemplateProviderDTO {
  public parse(): string {
    return 'Mail content';
  }
}
`;
  }
}
