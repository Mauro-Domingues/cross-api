export class CreateHashIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { hashConfig } ${'from'} '@config/hash';
import { BCryptHashProvider } ${'from'} './implementations/BCryptHashProvider';
import { IHashProvider } ${'from'} './models/IHashProvider';

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
