export class CreateICryptoDTO {
    execute() {
        return `export interface ICryptoDTO {
  iv: string;
  content: string;
}
`;
    }
}
