export class CreateStorageIndex {
  public execute(): string {
    return `import { storageConfig } fr\om '@config/storage';
import { container } fr\om 'tsyringe';
import { DiskStorageProvider } fr\om './implementations/DiskStorageProvider';
import { S3StorageProvider } fr\om './implementations/S3StorageProvider';
import { IStorageProvider } fr\om './models/IStorageProvider';

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
