export class CreateIMailTemplate {
  public execute(): string {
    return `import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';

export interface IMailTemplateProviderDTO {
  parse(data: IParseMailTemplateDTO): string;
}
`;
  }
}
