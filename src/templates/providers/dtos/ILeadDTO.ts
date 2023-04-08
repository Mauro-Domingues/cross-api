export class CreateILeadDTO {
  public execute(): string {
    return `export interface ICreateLeadDTO {
  event_uuid: string;
}
`;
  }
}
