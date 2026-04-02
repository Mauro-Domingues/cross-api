export class CreateIMailTemplateDTO {
  public execute(): string {
    return `import type { IMailTemplateFragmentDTO } fr\u006Fm './IMailTemplateFragmentDTO';

export interface IParseMailTemplateDTO extends IMailTemplateFragmentDTO {
  partials: Array<IMailTemplateFragmentDTO & { name: string }>;
}
`;
  }
}
