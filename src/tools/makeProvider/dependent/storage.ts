import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { IModuleNamesDTO } from '@tools/names';
import { DependentBaseProvider } from './base';

export class MakeDependentStorageProvider extends DependentBaseProvider {
  private readonly createStorageIndex: CreateStorageIndex;
  private readonly createUploadConfig: CreateUploadConfig;
  private readonly createDiskStorage: CreateDiskStorage;
  private readonly createFakeStorage: CreateFakeStorage;
  private readonly createS3Storage: CreateS3Storage;
  private readonly createIStorage: CreateIStorage;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createStorageIndex = new CreateStorageIndex();
    this.createUploadConfig = new CreateUploadConfig();
    this.createDiskStorage = new CreateDiskStorage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createIStorage = new CreateIStorage();
  }

  public execute(): void {
    if (!this.fatherNames) {
      throw this.console.one({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'StorageProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'StorageProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'StorageProvider',
      'models',
    ]);
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './StorageProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'upload.ts'],
      this.createUploadConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    return this.fileManager.checkAndCreateFile(
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
  }
}
