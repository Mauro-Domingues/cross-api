export class CreateCryptoIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { cryptoConfig } ${'from'} '@config/crypto';
import { CryptoProvider } ${'from'} './implementations/CryptoProvider';
import { ICryptoProvider } ${'from'} './models/ICryptoProvider';

const providers: Record<typeof cryptoConfig.driver, () => ICryptoProvider> =
  {
    crypto: () => container.resolve(CryptoProvider),
  };

container.registerInstance<ICryptoProvider>(
  'CryptoProvider',
  providers[cryptoConfig.driver](),
);
`;
  }
}
