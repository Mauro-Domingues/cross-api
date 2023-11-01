export class CreateLeadIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';

import { leadConfig } ${'from'} '@config/lead';
import { RDStationProvider } ${'from'} './implementations/RDStationProvider';
import { ILeadProviderDTO } ${'from'} './models/ILeadProvider';

const providers = {
  rdstation: container.resolve(RDStationProvider),
};

container.registerInstance<ILeadProviderDTO>(
  'LeadProvider',
  providers[leadConfig.driver],
);
`;
  }
}
