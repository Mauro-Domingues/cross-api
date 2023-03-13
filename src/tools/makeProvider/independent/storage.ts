import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import messages from '@tools/messages';

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
    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/providers')) {
      mkdirSync('src/shared/container/providers');
    }
    if (!existsSync('src/shared/container/providers/StorageProvider')) {
      mkdirSync('src/shared/container/providers/StorageProvider');
    }
    if (!existsSync('src/shared/container/providers/StorageProvider/fakes')) {
      mkdirSync('src/shared/container/providers/StorageProvider/fakes');
    }
    if (
      !existsSync(
        'src/shared/container/providers/StorageProvider/implementations',
      )
    ) {
      mkdirSync(
        'src/shared/container/providers/StorageProvider/implementations',
      );
    }
    if (!existsSync('src/shared/container/providers/StorageProvider/models')) {
      mkdirSync('src/shared/container/providers/StorageProvider/models');
    }
    appendFile(
      'src/shared/container/providers/index.ts',
      `\nimport './StorageProvider';`,
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync('src/config/upload.ts')) {
      appendFile(
        'src/config/upload.ts',
        this.createUploadConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/upload.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/upload.ts',
        this.createUploadConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
        this.createFakeStorage.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts',
        this.createFakeStorage.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
        this.createDiskStorage.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts',
        this.createDiskStorage.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
        this.createS3Storage.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts',
        this.createS3Storage.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
        this.createIStorage.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/StorageProvider/models/IStorageProvider.ts',
        this.createIStorage.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync('src/shared/container/providers/StorageProvider/index.ts')
    ) {
      appendFile(
        'src/shared/container/providers/StorageProvider/index.ts',
        this.createStorageIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/StorageProvider/index.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/StorageProvider/index.ts',
        this.createStorageIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- StorageProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
