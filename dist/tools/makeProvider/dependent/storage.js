import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '../../../templates/index/container';
import { CreateUploadConfig } from '../../../templates/providers/config/uploadConfig';
import { CreateFakeStorage } from '../../../templates/providers/fakes/fakeStorage';
import { CreateDiskStorage } from '../../../templates/providers/implementations/DiskStorage';
import { CreateS3Storage } from '../../../templates/providers/implementations/S3Storage';
import { CreateIStorage } from '../../../templates/providers/models/IStorage';
import { CreateStorageIndex } from '../../../templates/providers/storageIndex';
import { Messages } from '../../messages';
import { resolve } from 'path';
export class MakeDependentStorageProvider {
    fatherNames;
    messages;
    createIStorage;
    createDiskStorage;
    createS3Storage;
    createFakeStorage;
    createUploadConfig;
    createStorageIndex;
    createContainer;
    constructor(fatherNames) {
        this.fatherNames = fatherNames;
        this.messages = new Messages().execute();
        this.createDiskStorage = new CreateDiskStorage();
        this.createS3Storage = new CreateS3Storage();
        this.createFakeStorage = new CreateFakeStorage();
        this.createUploadConfig = new CreateUploadConfig();
        this.createIStorage = new CreateIStorage();
        this.createStorageIndex = new CreateStorageIndex();
        this.createContainer = new CreateContainer();
    }
    async execute() {
        if (!this.fatherNames) {
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
            throw new Error();
        }
        if (!existsSync(resolve('src'))) {
            mkdirSync(resolve('src'));
        }
        if (!existsSync(resolve('src', 'config'))) {
            mkdirSync(resolve('src', 'config'));
        }
        if (!existsSync(resolve('src', 'modules'))) {
            mkdirSync(resolve('src', 'modules'));
        }
        if (!existsSync(resolve('src', 'shared'))) {
            mkdirSync(resolve('src', 'shared'));
        }
        if (!existsSync(resolve('src', 'shared', 'container'))) {
            mkdirSync(resolve('src', 'shared', 'container'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'index.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName))) {
            mkdirSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName));
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'))) {
            mkdirSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'));
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), '');
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider'))) {
            mkdirSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider'));
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes'))) {
            mkdirSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes'));
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations'))) {
            mkdirSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations'));
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models'))) {
            mkdirSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models'));
        }
        appendFileSync(resolve('src', 'shared', 'container', 'index.ts'), `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
        appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), `import './StorageProvider';\n`);
        if (!existsSync(resolve('src', 'config', 'upload.ts'))) {
            appendFileSync(resolve('src', 'config', 'upload.ts'), this.createUploadConfig.execute());
        }
        else {
            truncateSync(resolve('src', 'config', 'upload.ts'));
            appendFileSync(resolve('src', 'config', 'upload.ts'), this.createUploadConfig.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'), this.createFakeStorage.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'), this.createFakeStorage.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'), this.createDiskStorage.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'), this.createDiskStorage.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'), this.createS3Storage.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'), this.createS3Storage.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'), this.createIStorage.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'), this.createIStorage.execute());
        }
        if (!existsSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'))) {
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'), this.createStorageIndex.execute());
        }
        else {
            truncateSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'));
            appendFileSync(resolve('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'), this.createStorageIndex.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- StorageProvider ${this.messages.created}`, '\x1b[0m');
    }
}
