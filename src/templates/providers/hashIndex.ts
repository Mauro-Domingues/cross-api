export class CreateHashIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { hashConfig } fr\u006Fm '@config/hash';
import { BcryptProvider } fr\u006Fm './implementations/BcryptProvider';
import type { IHashProvider } fr\u006Fm './models/IHashProvider';

const providers: Record<typeof hashConfig.driver, () => IHashProvider> = {
  bcrypt: () => container.resolve(BcryptProvider),
};

container.registerInstance<IHashProvider>(
  'HashProvider',
  providers[hashConfig.driver](),
);
`;
  }
}
