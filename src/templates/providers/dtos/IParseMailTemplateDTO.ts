export class CreateIMailTemplateDTO {
  public execute(): string {
    return `export interface IParseMailTemplateDTO {
  name: string;
  file: string;
  variables: Record<string, unknown>;
}
`;
  }
}
