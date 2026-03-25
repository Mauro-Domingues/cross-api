export class CreateStorageIndex {
  public execute(): string {
    return `import { container } fr\om 'tsyringe';
import { storageConfig } fr\om '@config/storage';
import { DiskProvider } fr\om './implementations/DiskProvider';
import { S3Provider } fr\om './implementations/S3Provider';
import type { IStorageProvider } fr\om './models/IStorageProvider';

const providers: Record<typeof storageConfig.driver, () => IStorageProvider> = {
  disk: () => container.resolve(DiskProvider),
  s3: () => container.resolve(S3Provider),
};

container.registerInstance<IStorageProvider>(
  'StorageProvider',
  providers[storageConfig.driver](),
);
`;
  }
}
