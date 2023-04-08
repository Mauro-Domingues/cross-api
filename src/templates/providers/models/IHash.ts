export class CreateIHash {
  public execute(): string {
    return `export interface IHashProviderDTO {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
`;
  }
}
