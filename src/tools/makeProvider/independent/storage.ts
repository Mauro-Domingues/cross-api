import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import messages from '@tools/messages';
import { resolve } from 'path';

export class MakeStorageProvider {
  private messages: typeof messages;
  private createIStorage: CreateIStorage;
  private createDiskStorage: CreateDiskStorage;
  private createS3Storage: CreateS3Storage;
  private createFakeStorage: CreateFakeStorage;
  private createUploadConfig: CreateUploadConfig;
  private createStorageIndex: CreateStorageIndex;

  constructor() {
    this.messages = messages;
    this.createDiskStorage = new CreateDiskStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createUploadConfig = new CreateUploadConfig();
    this.createIStorage = new CreateIStorage();
    this.createStorageIndex = new CreateStorageIndex();
  }

  public async execute(): Promise<void> {
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
