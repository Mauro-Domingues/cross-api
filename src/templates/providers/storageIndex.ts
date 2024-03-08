export class CreateStorageIndex {
  public execute(): string {
    return `import { storageConfig } ${'from'} '@config/storage';
import { container } ${'from'} 'tsyringe';

import { DiskStorageProvider } ${'from'} './implementations/DiskStorageProvider';
import { S3StorageProvider } ${'from'} './implementations/S3StorageProvider';
import { IStorageProviderDTO } ${'from'} './models/IStorageProvider';

const providers: Record<typeof storageConfig.driver, () => IStorageProviderDTO> =
  {
    disk: () => container.resolve(DiskStorageProvider),
    s3: () => container.resolve(S3StorageProvider),
  };

container.registerInstance<IStorageProviderDTO>(
  'StorageProvider',
  providers[storageConfig.driver](),
);
`;
  }
}
