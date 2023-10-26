import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { FileManager } from '@tools/fileManager';

export class MakeStorageProvider {
  private readonly createUploadConfig: CreateUploadConfig;
  private readonly createStorageIndex: CreateStorageIndex;
  private readonly createDiskStorage: CreateDiskStorage;
  private readonly createFakeStorage: CreateFakeStorage;
  private readonly createS3Storage: CreateS3Storage;
  private readonly createIStorage: CreateIStorage;
  private readonly fileManager: FileManager;

  constructor() {
    this.createStorageIndex = new CreateStorageIndex();
    this.createUploadConfig = new CreateUploadConfig();
    this.createDiskStorage = new CreateDiskStorage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createIStorage = new CreateIStorage();
    this.fileManager = new FileManager();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './StorageProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'upload.ts'],
      this.createUploadConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'StorageProvider',
        'index.ts',
      ],
      this.createStorageIndex,
    );
  }
}
