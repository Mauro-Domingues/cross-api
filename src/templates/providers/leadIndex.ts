export default function createLeadIndex(): string {
  return `import { container } from 'tsyringe';

import ILeadProvider from './models/ILeadProvider';
import RDStationProvider from './implementations/RDStationProvider';

const providers = {
  rdStation: container.resolve(RDStationProvider),
};

container.registerInstance<ILeadProvider>('LeadProvider', providers.rdStation);
`;
}
