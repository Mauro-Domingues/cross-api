export class CreateDiskStorage {
  public execute(): string {
    return `import { existsSync, mkdirSync, renameSync, unlinkSync } fr\om 'node:fs';
import { resolve } fr\om 'node:path';
import { storageConfig } fr\om '@config/storage';
import type { IStorageProvider } fr\om '../models/IStorageProvider';

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
