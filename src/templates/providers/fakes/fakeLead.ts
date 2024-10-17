export class CreateFakeLead {
  public execute(): string {
    return `import { randomUUID } ${'from'} 'node:crypto';
import { ILeadProvider } ${'from'} '../models/ILeadProvider';
import { ICreateLeadDTO } ${'from'} '../dtos/ICreateLeadDTO';

export class FakeLeadProvider implements ILeadProvider {
  private readonly leads: Array<string> = [];

  public async createLead(email: string): Promise<ICreateLeadDTO | undefined> {
    this.leads.push(email);

    return { event_uuid: randomUUID() };
  }
}
`;
  }
}
