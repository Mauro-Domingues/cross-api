export class CreateIMailTemplate {
  public execute(): string {
    return `import IParseMailTemplateDTO from '../dtos/IParseMailTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseMailTemplateDTO): Promise<string>;
}
`;
  }
}
