export class CreateIMailTemplateDTO {
  public execute(): string {
    return `import type { IMailTemplateFragmentDTO } fr\om './IMailTemplateFragmentDTO';

export interface IParseMailTemplateDTO extends IMailTemplateFragmentDTO {
  partials: Array<IMailTemplateFragmentDTO & { name: string }>;
}
`;
  }
}
