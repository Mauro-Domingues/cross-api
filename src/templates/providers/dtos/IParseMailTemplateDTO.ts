export class CreateIMailTemplateDTO {
  public execute(): string {
    return `interface ITemplateVariablesDTO {
  [key: string]: string | number;
}

export interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariablesDTO;
}
`;
  }
}
