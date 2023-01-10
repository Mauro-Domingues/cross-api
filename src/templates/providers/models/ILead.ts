export default function createILead(): string {
  return `import ICreateLeadDTO from '../dtos/ICreateLeadDTO';

export default interface ILeadProvider {
  createLead(email: string): Promise<ICreateLeadDTO | undefined>;
}
`;
}
