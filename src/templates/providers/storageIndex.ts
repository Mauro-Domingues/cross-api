export class CreateStorageIndex {
  public execute(): string {
    return `import { uploadConfig } from '@config/upload';
import { container } from 'tsyringe';

import { DiskStorageProvider } from './implementations/DiskStorageProvider';
import { S3StorageProvider } from './implementations/S3StorageProvider';
import { IStorageProviderDTO } from './models/IStorageProvider';

const providers = {
  disk: container.resolve(DiskStorageProvider),
  s3: container.resolve(S3StorageProvider),
};

container.registerInstance<IStorageProviderDTO>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
`;
  }
}
