export class CreateLeadIndex {
  public execute(): string {
    return `import { container } from 'tsyringe';

import { RDStationProvider } from './implementations/RDStationProvider';
import { ILeadProviderDTO } from './models/ILeadProvider';

const providers = {
  rdStation: container.resolve(RDStationProvider),
};

container.registerInstance<ILeadProviderDTO>(
  'LeadProvider',
  providers.rdStation,
);
`;
  }
}
