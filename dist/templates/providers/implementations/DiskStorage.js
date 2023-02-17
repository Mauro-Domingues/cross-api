"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDiskStorage = createDiskStorage;
function createDiskStorage() {
  return `import uploadConfig from '@config/upload';
import fs from 'fs';
import path from 'path';

import IStorageProvider from '../models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    if (!fs.existsSync(uploadConfig.tmpFolder)) {
      fs.mkdirSync(uploadConfig.tmpFolder);
    }

    if (!fs.existsSync(uploadConfig.uploadsFolder)) {
      fs.mkdirSync(uploadConfig.uploadsFolder);
    }

    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file),
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
`;
}