import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeStorageProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createIStorage: CreateIStorage;
  private readonly createDiskStorage: CreateDiskStorage;
  private readonly createS3Storage: CreateS3Storage;
  private readonly createFakeStorage: CreateFakeStorage;
  private readonly createUploadConfig: CreateUploadConfig;
  private readonly createStorageIndex: CreateStorageIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createDiskStorage = new CreateDiskStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createUploadConfig = new CreateUploadConfig();
    this.createIStorage = new CreateIStorage();
    this.createStorageIndex = new CreateStorageIndex();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'StorageProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './StorageProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'upload.ts'],
      this.createUploadConfig,
    );
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    return this.console.one([
      `- StorageProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
