export class CreateEncryptionIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { encryptionConfig } fr\om '@config/encryption';
import { CryptoProvider } fr\om './implementations/CryptoProvider';
import type { IEncryptionProvider } fr\om './models/IEncryptionProvider';

const providers: Record<
  typeof encryptionConfig.driver,
  () => IEncryptionProvider
> = {
  encryption: () => container.resolve(CryptoProvider),
};

container.registerInstance<IEncryptionProvider>(
  'EncryptionProvider',
  providers[encryptionConfig.driver](),
);
`;
  }
}
