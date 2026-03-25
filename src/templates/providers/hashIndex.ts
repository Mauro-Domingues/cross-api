export class CreateHashIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { hashConfig } fr\om '@config/hash';
import { BcryptProvider } fr\om './implementations/BcryptProvider';
import type { IHashProvider } fr\om './models/IHashProvider';

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
