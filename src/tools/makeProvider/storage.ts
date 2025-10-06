import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateStorageConfig } from '@templates/providers/config/storageConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateStorageProvider extends BaseProvider {
  private readonly createStorageConfig: CreateStorageConfig;
  private readonly createStorageIndex: CreateStorageIndex;
  private readonly createDiskStorage: CreateDiskStorage;
  private readonly createFakeStorage: CreateFakeStorage;
  private readonly createS3Storage: CreateS3Storage;
  private readonly createIStorage: CreateIStorage;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
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

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'StorageProvider', 'fakes'],
      [this.basePath, 'StorageProvider', 'implementations'],
      [this.basePath, 'StorageProvider', 'models'],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'storage.ts'], this.createStorageConfig];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [this.basePath, 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'],
      this.createFakeStorage,
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
        [
          this.basePath,
          'StorageProvider',
          'implementations',
          'DiskStorageProvider.ts',
        ],
        this.createDiskStorage,
      ],
      [
        [
          this.basePath,
          'StorageProvider',
          'implementations',
          'S3StorageProvider.ts',
        ],
        this.createS3Storage,
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
      [this.basePath, 'StorageProvider', 'models', 'IStorageProvider.ts'],
      this.createIStorage,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './StorageProvider';\n",
    );

    return [
      [this.basePath, 'StorageProvider', 'index.ts'],
      this.createStorageIndex,
    ];
  }
}
