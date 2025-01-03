export class CreateDiskStorage {
  public execute(): string {
    return `import { storageConfig } ${'from'} '@config/storage';
import { existsSync, mkdirSync, unlinkSync, renameSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';
import { IStorageProvider } ${'from'} '../models/IStorageProvider';

export class DiskStorageProvider implements IStorageProvider {
  public constructor() {
    if (!existsSync(storageConfig.config.tmpFolder)) {
      mkdirSync(storageConfig.config.tmpFolder);
    }

    if (!existsSync(storageConfig.config.uploadsFolder)) {
      mkdirSync(storageConfig.config.uploadsFolder);
    }
  }

  public async saveFile(file: string): Promise<void> {
    renameSync(
      resolve(storageConfig.config.tmpFolder, file),
      resolve(storageConfig.config.uploadsFolder, file),
    );
  }

  public async deleteFile(file: string): Promise<void> {
    unlinkSync(resolve(storageConfig.config.uploadsFolder, file));
  }
}
`;
  }
}
