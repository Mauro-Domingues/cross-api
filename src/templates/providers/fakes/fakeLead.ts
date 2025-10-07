export class CreateFakeLead {
  public execute(): string {
    return `import { ILeadProvider } fr\om '../models/ILeadProvider';

export class FakeLeadProvider implements ILeadProvider {
  private readonly leads: Array<string> = [];

  public async createLead(email: string): Promise<void> {
    this.leads.push(email);

    console.log('Lead created');
  }
}
`;
  }
}
