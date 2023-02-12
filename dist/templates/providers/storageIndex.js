"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStorageIndex = createStorageIndex;
function createStorageIndex() {
  return `import uploadConfig from '@config/upload';
import { container } from 'tsyringe';

import DiskStorageProvider from './implementations/DiskStorageProvider';
import S3StorageProvider from './implementations/S3StorageProvider';
import IStorageProvider from './models/IStorageProvider';

const providers = {
  disk: DiskStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  providers[uploadConfig.driver],
);
`;
}