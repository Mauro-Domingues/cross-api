export class CreateDiskStorage {
  public execute(): string {
    return `import { storageConfig } ${'from'} '@config/storage';
import { existsSync, mkdirSync, unlinkSync, renameSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';

import { IStorageProviderDTO } ${'from'} '../models/IStorageProvider';

export class DiskStorageProvider implements IStorageProviderDTO {
  public async saveFile(file: string): Promise<string> {
    if (!existsSync(storageConfig.config.tmpFolder)) {
      mkdirSync(storageConfig.config.tmpFolder);
    }

    if (!existsSync(storageConfig.config.uploadsFolder)) {
      mkdirSync(storageConfig.config.uploadsFolder);
    }

    renameSync(
      resolve(storageConfig.config.tmpFolder, file),
      resolve(storageConfig.config.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    unlinkSync(resolve(storageConfig.config.uploadsFolder, file));
  }
}
`;
  }
}
