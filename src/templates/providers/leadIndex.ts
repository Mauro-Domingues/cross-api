export class CreateLeadIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { leadConfig } fr\u006Fm '@config/lead';
import { RDStationProvider } fr\u006Fm './implementations/RDStationProvider';
import type { ILeadProvider } fr\u006Fm './models/ILeadProvider';

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
