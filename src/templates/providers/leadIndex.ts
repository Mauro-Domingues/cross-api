export class CreateLeadIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { leadConfig } fr\om '@config/lead';
import { RDStationProvider } fr\om './implementations/RDStationProvider';
import type { ILeadProvider } fr\om './models/ILeadProvider';

const providers: Record<typeof leadConfig.driver, () => ILeadProvider> = {
  rdstation: () => container.resolve(RDStationProvider),
};

container.registerInstance<ILeadProvider>(
  'LeadProvider',
  providers[leadConfig.driver](),
);
`;
  }
}
