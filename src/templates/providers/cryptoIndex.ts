export class CreateCryptoIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { cryptoConfig } fr\om '@config/crypto';
import { CryptoProvider } fr\om './implementations/CryptoProvider';
import type { ICryptoProvider } fr\om './models/ICryptoProvider';

const providers: Record<typeof cryptoConfig.driver, () => ICryptoProvider> = {
  crypto: () => container.resolve(CryptoProvider),
};

container.registerInstance<ICryptoProvider>(
  'CryptoProvider',
  providers[cryptoConfig.driver](),
);
`;
  }
}
