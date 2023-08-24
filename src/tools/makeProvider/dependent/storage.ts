import { CreateContainer } from '@templates/index/container';
import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeDependentStorageProvider {
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly createIStorage: CreateIStorage;
  private readonly createDiskStorage: CreateDiskStorage;
  private readonly createS3Storage: CreateS3Storage;
  private readonly createFakeStorage: CreateFakeStorage;
  private readonly createUploadConfig: CreateUploadConfig;
  private readonly createStorageIndex: CreateStorageIndex;
  private readonly createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createDiskStorage = new CreateDiskStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createUploadConfig = new CreateUploadConfig();
    this.createIStorage = new CreateIStorage();
    this.createStorageIndex = new CreateStorageIndex();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'modules']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'StorageProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'StorageProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'StorageProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'StorageProvider',
      'models',
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        '',
      );
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    await this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './StorageProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'upload.ts'],
      this.createUploadConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
        'modules',
        this.fatherNames.pluralLowerModuleName,
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
