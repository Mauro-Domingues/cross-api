export class CreateFakeLead {
  public execute(): string {
    return `import { ILeadProviderDTO } ${'from'} '../models/ILeadProvider';
import { ICreateLeadDTO } ${'from'} '../dtos/ICreateLeadDTO';

export class FakeLeadProvider implements ILeadProviderDTO {
  private readonly leads: Array<string> = [];

  public async createLead(email: string): Promise<ICreateLeadDTO | undefined> {
    this.leads.push(email);

    return { event_uuid: 'test' };
  }
}
`;
  }
}
