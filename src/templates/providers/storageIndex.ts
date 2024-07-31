export class CreateStorageIndex {
  public execute(): string {
    return `import { storageConfig } ${'from'} '@config/storage';
import { container } ${'from'} 'tsyringe';
import { DiskStorageProvider } ${'from'} './implementations/DiskStorageProvider';
import { S3StorageProvider } ${'from'} './implementations/S3StorageProvider';
import { IStorageProvider } ${'from'} './models/IStorageProvider';

const providers: Record<
  typeof storageConfig.driver,
  () => IStorageProvider
> = {
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
