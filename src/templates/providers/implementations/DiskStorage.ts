export class CreateDiskStorage {
  public execute(): string {
    return `import { uploadConfig } ${'from'} '@config/upload';
import { existsSync, mkdirSync, unlinkSync, renameSync } ${'from'} 'fs';
import { resolve } ${'from'} 'path';

import { IStorageProviderDTO } ${'from'} '../models/IStorageProvider';

export class DiskStorageProvider implements IStorageProviderDTO {
  public async saveFile(file: string): Promise<string> {
    if (!existsSync(uploadConfig.config.tmpFolder)) {
      mkdirSync(uploadConfig.config.tmpFolder);
    }

    if (!existsSync(uploadConfig.config.uploadsFolder)) {
      mkdirSync(uploadConfig.config.uploadsFolder);
    }

    renameSync(
      resolve(uploadConfig.config.tmpFolder, file),
      resolve(uploadConfig.config.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    unlinkSync(resolve(uploadConfig.config.uploadsFolder, file));
  }
}
`;
  }
}
