export class CreateIMailTemplateDTO {
  public execute(): string {
    return `export interface IParseMailTemplateDTO {
  file: string;
  variables: Record<string, string | number>;
}
`;
  }
}
