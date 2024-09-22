import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateStorageConfig } from '@templates/providers/config/storageConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { DependentBaseProvider } from '@tools/makeProvider/dependent/base';

export class MakeDependentStorageProvider extends DependentBaseProvider {
  private readonly createStorageConfig: CreateStorageConfig;
  private readonly createStorageIndex: CreateStorageIndex;
  private readonly createDiskStorage: CreateDiskStorage;
  private readonly createFakeStorage: CreateFakeStorage;
  private readonly createS3Storage: CreateS3Storage;
  private readonly createIStorage: CreateIStorage;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
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

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected declare createDtos: () => Array<IMultiFileDTO>;

  protected createInfra(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'models',
      ],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'storage.ts'], this.createStorageConfig];
  }

  protected createFake(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'fakes',
        'FakeStorageProvider.ts',
      ],
      this.createFakeStorage,
    ];
  }

  protected createImplementations(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
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
          fatherNames.pluralLowerModuleName,
          'providers',
          'StorageProvider',
          'implementations',
          'S3StorageProvider.ts',
        ],
        this.createS3Storage,
      ],
    ];
  }

  protected createModel(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'models',
        'IStorageProvider.ts',
      ],
      this.createIStorage,
    ];
  }

  protected createInjection(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    this.fileManager.createFile(
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      "import './StorageProvider';\n",
    );

    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'StorageProvider',
        'index.ts',
      ],
      this.createStorageIndex,
    ];
  }
}
