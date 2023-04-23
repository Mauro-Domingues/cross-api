export class CreateCryptoIndex {
    execute() {
        return `import { container } from 'tsyringe';

import { CryptoProvider } from './implementations/CryptoProvider';
import { ICryptoProviderDTO } from './models/ICryptoProvider';

const providers = {
  crypto: container.resolve(CryptoProvider),
};

container.registerInstance<ICryptoProviderDTO>(
  'CryptoProvider',
  providers.crypto,
);
`;
    }
}
