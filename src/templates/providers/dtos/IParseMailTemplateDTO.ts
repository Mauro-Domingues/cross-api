export function createIMailTemplateDTO(): string {
  return `interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseMailTemplateDTO {
  file: string;
  variables: ITemplateVariables;
}
`;
}
