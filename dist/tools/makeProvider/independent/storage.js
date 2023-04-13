import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateUploadConfig } from '../../../templates/providers/config/uploadConfig.js';
import { CreateFakeStorage } from '../../../templates/providers/fakes/fakeStorage.js';
import { CreateDiskStorage } from '../../../templates/providers/implementations/DiskStorage.js';
import { CreateS3Storage } from '../../../templates/providers/implementations/S3Storage.js';
import { CreateIStorage } from '../../../templates/providers/models/IStorage.js';
import { CreateStorageIndex } from '../../../templates/providers/storageIndex.js';
import { Messages } from '../../messages.js';

export class MakeStorageProvider {
  messages;
  createIStorage;
  createDiskStorage;
  createS3Storage;
  createFakeStorage;
  createUploadConfig;
  createStorageIndex;
  constructor() {
    this.messages = new Messages().execute();
    this.createDiskStorage = new CreateDiskStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createUploadConfig = new CreateUploadConfig();
    this.createIStorage = new CreateIStorage();
    this.createStorageIndex = new CreateStorageIndex();
  }
  async execute() {
    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'providers'))) {
      mkdirSync(resolve('src', 'shared', 'container', 'providers'));
    }
    if (
      !existsSync(
        resolve('src', 'shared', 'container', 'providers', 'StorageProvider'),
      )
    ) {
      mkdirSync(
        resolve('src', 'shared', 'container', 'providers', 'StorageProvider'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      `import './StorageProvider';\n`,
    );
    if (!existsSync(resolve('src', 'config', 'upload.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'upload.ts'),
        this.createUploadConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'upload.ts'));
      appendFileSync(
        resolve('src', 'config', 'upload.ts'),
        this.createUploadConfig.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'fakes',
          'FakeStorageProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'fakes',
          'FakeStorageProvider.ts',
        ),
        this.createFakeStorage.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'fakes',
          'FakeStorageProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'fakes',
          'FakeStorageProvider.ts',
        ),
        this.createFakeStorage.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'DiskStorageProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'DiskStorageProvider.ts',
        ),
        this.createDiskStorage.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'DiskStorageProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'DiskStorageProvider.ts',
        ),
        this.createDiskStorage.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'S3StorageProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'S3StorageProvider.ts',
        ),
        this.createS3Storage.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'S3StorageProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'S3StorageProvider.ts',
        ),
        this.createS3Storage.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'models',
          'IStorageProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'models',
          'IStorageProvider.ts',
        ),
        this.createIStorage.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'models',
          'IStorageProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'models',
          'IStorageProvider.ts',
        ),
        this.createIStorage.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'index.ts',
        ),
        this.createStorageIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'index.ts',
        ),
        this.createStorageIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- StorageProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
