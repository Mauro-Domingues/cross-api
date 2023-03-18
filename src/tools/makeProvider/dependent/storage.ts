import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateUploadConfig } from '@templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '@templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '@templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '@templates/providers/implementations/S3Storage';
import { CreateIStorage } from '@templates/providers/models/IStorage';
import { CreateStorageIndex } from '@templates/providers/storageIndex';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentStorageProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: typeof messages;
  private createIStorage: CreateIStorage;
  private createDiskStorage: CreateDiskStorage;
  private createS3Storage: CreateS3Storage;
  private createFakeStorage: CreateFakeStorage;
  private createUploadConfig: CreateUploadConfig;
  private createStorageIndex: CreateStorageIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = messages;
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
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.providerNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/modules')) {
      mkdirSync('src/modules');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/index.ts')) {
      appendFileSync(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
      );
    }
    if (!existsSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      mkdirSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
        '',
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/models`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/models`,
      );
    }
    appendFileSync(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      `\nimport './StorageProvider';`,
    );
    if (!existsSync('src/config/upload.ts')) {
      appendFileSync('src/config/upload.ts', this.createUploadConfig.execute());
    } else {
      truncateSync('src/config/upload.ts');
      appendFileSync('src/config/upload.ts', this.createUploadConfig.execute());
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
        this.createFakeStorage.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/fakes/FakeStorageProvider.ts`,
        this.createFakeStorage.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
        this.createDiskStorage.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/DiskStorageProvider.ts`,
        this.createDiskStorage.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
        this.createS3Storage.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/implementations/S3StorageProvider.ts`,
        this.createS3Storage.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
        this.createIStorage.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/models/IStorageProvider.ts`,
        this.createIStorage.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
        this.createStorageIndex.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/StorageProvider/index.ts`,
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
