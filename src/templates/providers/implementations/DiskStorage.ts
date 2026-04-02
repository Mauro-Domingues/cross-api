export class CreateDiskStorage {
  public execute(): string {
    return `import { existsSync, mkdirSync, renameSync, unlinkSync } fr\u006Fm 'node:fs';
import { resolve } fr\u006Fm 'node:path';
import { storageConfig } fr\u006Fm '@config/storage';
import type { IStorageProvider } fr\u006Fm '../models/IStorageProvider';

export class DiskProvider implements IStorageProvider {
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
