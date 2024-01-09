import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { BaseProvider } from './base';

export class MakeStorageProvider extends BaseProvider {
  private readonly createUploadConfig: CreateUploadConfig;
  private readonly createStorageIndex: CreateStorageIndex;
  private readonly createDiskStorage: CreateDiskStorage;
  private readonly createFakeStorage: CreateFakeStorage;
  private readonly createS3Storage: CreateS3Storage;
  private readonly createIStorage: CreateIStorage;

  public constructor() {
    super();
    this.createStorageIndex = new CreateStorageIndex();
    this.createUploadConfig = new CreateUploadConfig();
    this.createDiskStorage = new CreateDiskStorage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createIStorage = new CreateIStorage();
  }

  public execute(): void {
    this.constructBase();
    this.fileManager.checkAndCreateManyDirs([
      ['src', 'shared', 'container', 'providers', 'StorageProvider', 'fakes'],
      [
        'src',
        'shared',
        'container',
        'providers',
        'StorageProvider',
        'implementations',
      ],
      ['src', 'shared', 'container', 'providers', 'StorageProvider', 'models'],
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './StorageProvider';\n`,
    );
    return this.fileManager.checkAndCreateManyFiles([
      [['src', 'config', 'upload.ts'], this.createUploadConfig],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'fakes',
          'FakeStorageProvider.ts',
        ],
        this.createFakeStorage,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'DiskStorageProvider.ts',
        ],
        this.createDiskStorage,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'implementations',
          'S3StorageProvider.ts',
        ],
        this.createS3Storage,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'models',
          'IStorageProvider.ts',
        ],
        this.createIStorage,
      ],
      [
        [
          'src',
          'shared',
          'container',
          'providers',
          'StorageProvider',
          'index.ts',
        ],
        this.createStorageIndex,
      ],
    ]);
  }
}
