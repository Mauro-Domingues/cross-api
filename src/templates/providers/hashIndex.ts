export class CreateHashIndex {
  public execute(): string {
    return `import { container } ${'from'} 'tsyringe';
import { hashConfig } ${'from'} '@config/hash';
import { BCryptHashProvider } ${'from'} './implementations/BCryptHashProvider';
import { IHashProviderDTO } ${'from'} './models/IHashProvider';

const providers: Record<typeof hashConfig.driver, () => IHashProviderDTO> = {
  bcrypt: () => container.resolve(BCryptHashProvider),
};

container.registerInstance<IHashProviderDTO>(
  'HashProvider',
  providers[hashConfig.driver](),
);
`;
  }
}
