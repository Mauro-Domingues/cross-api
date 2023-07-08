export class CreateIAuthDTO {
  public execute(): string {
    return `export interface IAuthDTO {
  access_token: string;
  expires_in: string;
  refresh_token: string;
}`;
  }
}
