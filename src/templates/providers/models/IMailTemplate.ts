export class CreateIMailTemplate {
  public execute(): string {
    return `import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';

export interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): string;
}
`;
  }
}
