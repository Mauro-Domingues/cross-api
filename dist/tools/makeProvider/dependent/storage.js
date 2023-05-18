import { CreateContainer } from '../../../templates/index/container.js';
import { CreateUploadConfig } from '../../../templates/providers/config/uploadConfig.js';
import { CreateFakeStorage } from '../../../templates/providers/fakes/fakeStorage.js';
import { CreateDiskStorage } from '../../../templates/providers/implementations/DiskStorage.js';
import { CreateS3Storage } from '../../../templates/providers/implementations/S3Storage.js';
import { CreateIStorage } from '../../../templates/providers/models/IStorage.js';
import { CreateStorageIndex } from '../../../templates/providers/storageIndex.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeDependentStorageProvider {
    fatherNames;
    messages;
    fileManager;
    console;
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
    async execute() {
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
        if (!this.fileManager.checkIfExists(['src'])) {
            await this.fileManager.createDir(['src']);
        }
        if (!this.fileManager.checkIfExists(['src', 'config'])) {
            await this.fileManager.createDir(['src', 'config']);
        }
        if (!this.fileManager.checkIfExists(['src', 'modules'])) {
            await this.fileManager.createDir(['src', 'modules']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared'])) {
            await this.fileManager.createDir(['src', 'shared']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
            await this.fileManager.createDir(['src', 'shared', 'container']);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'index.ts',
        ])) {
            await this.fileManager.createFile(['src', 'shared', 'container', 'index.ts'], this.createContainer.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'index.ts',
            ], '');
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'fakes',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'fakes',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'implementations',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'implementations',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'models',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'models',
            ]);
        }
        await this.fileManager.createFile(['src', 'shared', 'container', 'index.ts'], `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
        await this.fileManager.createFile([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
        ], `import './StorageProvider';\n`);
        if (!this.fileManager.checkIfExists(['src', 'config', 'upload.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'upload.ts'], this.createUploadConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'upload.ts']);
            await this.fileManager.createFile(['src', 'config', 'upload.ts'], this.createUploadConfig.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'fakes',
            'FakeStorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'fakes',
                'FakeStorageProvider.ts',
            ], this.createFakeStorage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'fakes',
                'FakeStorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'fakes',
                'FakeStorageProvider.ts',
            ], this.createFakeStorage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'implementations',
            'DiskStorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'implementations',
                'DiskStorageProvider.ts',
            ], this.createDiskStorage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'implementations',
                'DiskStorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'implementations',
                'DiskStorageProvider.ts',
            ], this.createDiskStorage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'implementations',
            'S3StorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'implementations',
                'S3StorageProvider.ts',
            ], this.createS3Storage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'implementations',
                'S3StorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'implementations',
                'S3StorageProvider.ts',
            ], this.createS3Storage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'models',
            'IStorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'models',
                'IStorageProvider.ts',
            ], this.createIStorage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'models',
                'IStorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'models',
                'IStorageProvider.ts',
            ], this.createIStorage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'StorageProvider',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'index.ts',
            ], this.createStorageIndex.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'index.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'StorageProvider',
                'index.ts',
            ], this.createStorageIndex.execute());
        }
        return this.console.one([
            `- StorageProvider ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
