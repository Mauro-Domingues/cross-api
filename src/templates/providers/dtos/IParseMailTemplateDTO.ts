export class CreateIMailTemplateDTO {
  public execute(): string {
    return `import { IMailTemplateFragmentDTO } fr\om './IMailTemplateFragmentDTO';

export interface IParseMailTemplateDTO extends IMailTemplateFragmentDTO {
  partials: Array<IMailTemplateFragmentDTO & { name: string }>;
}
`;
  }
}
