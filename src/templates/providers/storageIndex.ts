export class CreateStorageIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { storageConfig } fr\om '@config/storage';
import { DiskStorageProvider } fr\om './implementations/DiskStorageProvider';
import { S3StorageProvider } fr\om './implementations/S3StorageProvider';
import type { IStorageProvider } fr\om './models/IStorageProvider';

const providers: Record<typeof storageConfig.driver, () => IStorageProvider> = {
  disk: () => container.resolve(DiskStorageProvider),
  s3: () => container.resolve(S3StorageProvider),
};

container.registerInstance<IStorageProvider>(
  'StorageProvider',
  providers[storageConfig.driver](),
);
`;
  }
}
