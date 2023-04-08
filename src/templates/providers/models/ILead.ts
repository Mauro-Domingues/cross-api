export class CreateILead {
  public execute(): string {
    return `import { ICreateLeadDTO } from '../dtos/ICreateLeadDTO';

export interface ILeadProviderDTO {
  createLead(email: string): Promise<ICreateLeadDTO | undefined>;
}
`;
  }
}
