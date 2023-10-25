export class CreateIObjectDTO {
  public execute(): string {
    return `export type IObjectDTO = Record<string, unknown>;
`;
  }
}
