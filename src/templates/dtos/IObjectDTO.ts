export class CreateIObjectDTO {
  public execute(): string {
    return `export interface IObjectDTO {
  [key: string]: unknown;
}
`;
  }
}
