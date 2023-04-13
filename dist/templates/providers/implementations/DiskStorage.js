export class CreateDiskStorage {
  execute() {
    return `import { uploadConfig } from '@config/upload';
import { existsSync, mkdirSync, unlinkSync, renameSync } from 'fs';
import { resolve } from 'path';

import { IStorageProviderDTO } from '../models/IStorageProvider';

export class DiskStorageProvider implements IStorageProviderDTO {
  public async saveFile(file: string): Promise<string> {
    if (!existsSync(uploadConfig.tmpFolder)) {
      mkdirSync(uploadConfig.tmpFolder);
    }

    if (!existsSync(uploadConfig.uploadsFolder)) {
      mkdirSync(uploadConfig.uploadsFolder);
    }

    renameSync(
      resolve(uploadConfig.tmpFolder, file),
      resolve(uploadConfig.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    unlinkSync(resolve(uploadConfig.uploadsFolder, file));
  }
}
`;
  }
}
