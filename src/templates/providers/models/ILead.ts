export class CreateILead {
  public execute(): string {
    return `import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

export default interface ILeadProvider {
  createLead(email: string): Promise<ICreateLeadDTO | undefined>;
}
`;
  }
}
