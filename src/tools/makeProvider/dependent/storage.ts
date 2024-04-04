import { CreateStorageConfig } from '@templates/providers/config/storageConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { IModuleNamesDTO } from '@tools/names';
import { DependentBaseProvider } from './base';

export class MakeDependentStorageProvider extends DependentBaseProvider {
  private readonly createStorageConfig: CreateStorageConfig;
  private readonly createStorageIndex: CreateStorageIndex;
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
    this.createStorageConfig = new CreateStorageConfig();
    this.createStorageIndex = new CreateStorageIndex();
    this.createDiskStorage = new CreateDiskStorage();
    this.createFakeStorage = new CreateFakeStorage();
    this.createS3Storage = new CreateS3Storage();
    this.createIStorage = new CreateIStorage();
  }

  public execute(): void {
    if (!this.fatherNames) {
      throw this.console.single({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    this.constructBase();
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
    this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'models',
      ],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'storage.ts'], this.createStorageConfig],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'StorageProvider',
          'index.ts',
        ],
        this.createStorageIndex,
      ],
    ]);
  }
}
