export class CreateIMailTemplate {
  public execute(): string {
    return `import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';

export interface IMailTemplateProvider {
  registerPartial(data: IParseMailTemplateDTO & { name: string }): void;
  parse(data: IParseMailTemplateDTO): string;
}
`;
  }
}
