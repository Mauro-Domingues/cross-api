export class CreateStorageIndex {
  public execute(): string {
    return `import { container } fr\u006Fm 'tsyringe';
import { storageConfig } fr\u006Fm '@config/storage';
import { DiskProvider } fr\u006Fm './implementations/DiskProvider';
import { S3Provider } fr\u006Fm './implementations/S3Provider';
import type { IStorageProvider } fr\u006Fm './models/IStorageProvider';

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
