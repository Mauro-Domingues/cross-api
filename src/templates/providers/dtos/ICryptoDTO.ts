export class CreateICryptoDTO {
  public execute(): string {
    return `export interface ICryptoDTO {
  iv: string;
  content: string;
}
`;
  }
}
