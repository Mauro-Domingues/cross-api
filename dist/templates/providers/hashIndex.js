export class CreateHashIndex {
  execute() {
    return `import { container } from 'tsyringe';

import { BCryptHashProvider } from './implementations/BCryptHashProvider';
import { IHashProviderDTO } from './models/IHashProvider';

const providers = {
  bcrypt: container.resolve(BCryptHashProvider),
};

container.registerInstance<IHashProviderDTO>('HashProvider', providers.bcrypt);
`;
  }
}
