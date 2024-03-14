export class CreateLeadIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { leadConfig } ${'from'} '@config/lead';
import { RDStationProvider } ${'from'} './implementations/RDStationProvider';
import { ILeadProviderDTO } ${'from'} './models/ILeadProvider';

const providers: Record<typeof leadConfig.driver, () => ILeadProviderDTO> = {
  rdstation: () => container.resolve(RDStationProvider),
};

container.registerInstance<ILeadProviderDTO>(
  'LeadProvider',
  providers[leadConfig.driver],
);
`;
  }
}
