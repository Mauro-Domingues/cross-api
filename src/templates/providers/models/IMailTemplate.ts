export class CreateIMailTemplate {
  public execute(): string {
    return `import { IParseMailTemplateDTO } fr\om '../dtos/IParseMailTemplateDTO';

export interface IMailTemplateProvider {
  compile(data: IParseMailTemplateDTO): string;
}
`;
  }
}
