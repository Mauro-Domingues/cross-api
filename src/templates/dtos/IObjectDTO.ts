export class CreateIObjectDTO {
  public execute(): string {
    return `export default interface IObjectDTO {
  [key: string]: unknown;
}
`;
  }
}
