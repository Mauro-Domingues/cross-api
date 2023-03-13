export class CreateICryptoDTO {
  public execute(): string {
    return `export default interface ICryptoDTO {
  iv: string;
  content: string;
}
`;
  }
}
