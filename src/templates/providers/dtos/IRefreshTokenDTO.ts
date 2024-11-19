export class CreateIRefreshTokenDTO {
  public execute(): string {
    return `export interface IRefreshTokenDTO {
  token: string;
  type: 'sha256';
}
`;
  }
}
