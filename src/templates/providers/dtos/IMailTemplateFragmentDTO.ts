export class CreateIMailTemplateFragmentDTO {
  public execute(): string {
    return `export interface IMailTemplateFragmentDTO {
  file: string;
  variables: Record<string, unknown>;
}
`;
  }
}
