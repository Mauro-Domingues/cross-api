export class CreateILead {
  public execute(): string {
    return `export interface ILeadProvider {
  createLead(email: string): Promise<void>;
}
`;
  }
}
