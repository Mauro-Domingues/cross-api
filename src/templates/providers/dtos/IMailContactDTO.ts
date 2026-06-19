export class CreateIMailContactDTO {
  public execute(): string {
    return `export interface IMailContactDTO {
  name: string;
  email: string;
}
`;
  }
}
