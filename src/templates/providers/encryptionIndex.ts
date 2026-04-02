export class CreateEncryptionIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { encryptionConfig } fr\u006Fm '@config/encryption';
import { CryptoProvider } fr\u006Fm './implementations/CryptoProvider';
import type { IEncryptionProvider } fr\u006Fm './models/IEncryptionProvider';

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
