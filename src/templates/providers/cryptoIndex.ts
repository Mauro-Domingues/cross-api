export class CreateCryptoIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';

import { cryptoConfig } ${'from'} '@config/crypto';
import { CryptoProvider } ${'from'} './implementations/CryptoProvider';
import { ICryptoProviderDTO } ${'from'} './models/ICryptoProvider';

const providers: Record<typeof cryptoConfig.driver, () => ICryptoProviderDTO> =
  {
    crypto: () => container.resolve(CryptoProvider),
  };

container.registerInstance<ICryptoProviderDTO>(
  'CryptoProvider',
  providers[cryptoConfig.driver](),
);
`;
  }
}
