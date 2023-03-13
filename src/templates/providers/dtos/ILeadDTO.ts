export class CreateILeadDTO {
  public execute(): string {
    return `export default interface ICreateLeadDTO {
  event_uuid: string;
}
`;
  }
}
