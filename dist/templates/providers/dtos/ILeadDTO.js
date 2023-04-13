export class CreateILeadDTO {
    execute() {
        return `export interface ICreateLeadDTO {
  event_uuid: string;
}
`;
    }
}
