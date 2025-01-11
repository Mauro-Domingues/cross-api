export class CreateIMailTemplate {
  public execute(): string {
    return `import { IParseMailTemplateDTO } ${'from'} '../dtos/IParseMailTemplateDTO';

export interface IMailTemplateProvider {
  registerPartial(data: IParseMailTemplateDTO): void;
  parse(data: Omit<IParseMailTemplateDTO, 'name'>): string;
}
`;
  }
}
