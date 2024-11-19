export class CreateIEncryptedDTO {
  public execute(): string {
    return `export interface IEncryptedDTO {
  iv: string;
  content: string;
}
`;
  }
}
