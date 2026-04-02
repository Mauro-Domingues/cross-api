export class CreateIMailTemplate {
  public execute(): string {
    return `import type { IParseMailTemplateDTO } fr\u006Fm '../dtos/IParseMailTemplateDTO';

export interface IMailTemplateProvider {
  compile(data: IParseMailTemplateDTO): string;
}
`;
  }
}
