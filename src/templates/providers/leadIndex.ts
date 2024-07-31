export class CreateLeadIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { leadConfig } ${'from'} '@config/lead';
import { RDStationProvider } ${'from'} './implementations/RDStationProvider';
import { ILeadProvider } ${'from'} './models/ILeadProvider';

const providers: Record<typeof leadConfig.driver, () => ILeadProvider> = {
  rdstation: () => container.resolve(RDStationProvider),
};

container.registerInstance<ILeadProvider>(
  'LeadProvider',
  providers[leadConfig.driver],
);
`;
  }
}
