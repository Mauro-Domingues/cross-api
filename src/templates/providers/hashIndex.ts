export class CreateHashIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { hashConfig } fr\om '@config/hash';
import { BCryptHashProvider } fr\om './implementations/BCryptHashProvider';
import { IHashProvider } fr\om './models/IHashProvider';

const providers: Record<typeof hashConfig.driver, () => IHashProvider> = {
  bcrypt: () => container.resolve(BCryptHashProvider),
};

container.registerInstance<IHashProvider>(
  'HashProvider',
  providers[hashConfig.driver](),
);
`;
  }
}
