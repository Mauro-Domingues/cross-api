import { CreateUploadConfig } from '../../../templates/providers/config/uploadConfig.js';
import { CreateFakeStorage } from '../../../templates/providers/fakes/fakeStorage.js';
import { CreateDiskStorage } from '../../../templates/providers/implementations/DiskStorage.js';
import { CreateS3Storage } from '../../../templates/providers/implementations/S3Storage.js';
import { CreateIStorage } from '../../../templates/providers/models/IStorage.js';
import { CreateStorageIndex } from '../../../templates/providers/storageIndex.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeStorageProvider {
    messages;
    console;
    fileManager;
    createIStorage;
    createDiskStorage;
    createS3Storage;
    createFakeStorage;
    createUploadConfig;
    createStorageIndex;
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
    async execute() {
        if (!this.fileManager.checkIfExists(['src'])) {
            await this.fileManager.createDir(['src']);
        }
        if (!this.fileManager.checkIfExists(['src', 'config'])) {
            await this.fileManager.createDir(['src', 'config']);
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
            'providers',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'fakes',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'fakes',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'implementations',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'implementations',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'models',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'models',
            ]);
        }
        await this.fileManager.createFile(['src', 'shared', 'container', 'providers', 'index.ts'], `import './StorageProvider';\n`);
        if (!this.fileManager.checkIfExists(['src', 'config', 'upload.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'upload.ts'], this.createUploadConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'upload.ts']);
            await this.fileManager.createFile(['src', 'config', 'upload.ts'], this.createUploadConfig.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'fakes',
            'FakeStorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'fakes',
                'FakeStorageProvider.ts',
            ], this.createFakeStorage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'fakes',
                'FakeStorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'fakes',
                'FakeStorageProvider.ts',
            ], this.createFakeStorage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'implementations',
            'DiskStorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'implementations',
                'DiskStorageProvider.ts',
            ], this.createDiskStorage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'implementations',
                'DiskStorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'implementations',
                'DiskStorageProvider.ts',
            ], this.createDiskStorage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'implementations',
            'S3StorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'implementations',
                'S3StorageProvider.ts',
            ], this.createS3Storage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'implementations',
                'S3StorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'implementations',
                'S3StorageProvider.ts',
            ], this.createS3Storage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'models',
            'IStorageProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'models',
                'IStorageProvider.ts',
            ], this.createIStorage.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'models',
                'IStorageProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'models',
                'IStorageProvider.ts',
            ], this.createIStorage.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'StorageProvider',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'index.ts',
            ], this.createStorageIndex.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'StorageProvider',
                'index.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
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
