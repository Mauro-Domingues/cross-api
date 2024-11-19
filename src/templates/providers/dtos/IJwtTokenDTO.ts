export class CreateIJwtTokenDTO {
  public execute(): string {
    return `export interface IJwtTokenDTO {
  token: string;
  type: 'Bearer';
  expiresIn: number;
}
`;
  }
}
