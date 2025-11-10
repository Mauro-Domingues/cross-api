export class CreateFakeLead {
  public execute(): string {
    return `import type { ILeadProvider } fr\om '../models/ILeadProvider';

export class FakeLeadProvider implements ILeadProvider {
  private readonly leads = new Set<string>();

  public async createLead(email: string): Promise<void> {
    this.leads.add(email);

    console.log('Lead created');
  }
}
`;
  }
}
