"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLeadIndex = void 0;
class CreateLeadIndex {
  execute() {
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
exports.CreateLeadIndex = CreateLeadIndex;