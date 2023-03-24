"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeDependentStorageProvider = void 0;
const fs_1 = require("fs");
const container_1 = require("@templates/index/container");
const uploadConfig_1 = require("@templates/providers/config/uploadConfig");
const fakeStorage_1 = require("@templates/providers/fakes/fakeStorage");
const DiskStorage_1 = require("@templates/providers/implementations/DiskStorage");
const S3Storage_1 = require("@templates/providers/implementations/S3Storage");
const IStorage_1 = require("@templates/providers/models/IStorage");
const storageIndex_1 = require("@templates/providers/storageIndex");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeDependentStorageProvider {
    constructor(fatherNames) {
        this.fatherNames = fatherNames;
        this.messages = new messages_1.Messages().execute();
        this.createDiskStorage = new DiskStorage_1.CreateDiskStorage();
        this.createS3Storage = new S3Storage_1.CreateS3Storage();
        this.createFakeStorage = new fakeStorage_1.CreateFakeStorage();
        this.createUploadConfig = new uploadConfig_1.CreateUploadConfig();
        this.createIStorage = new IStorage_1.CreateIStorage();
        this.createStorageIndex = new storageIndex_1.CreateStorageIndex();
        this.createContainer = new container_1.CreateContainer();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.fatherNames) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'config'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), '');
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models'));
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), `import './StorageProvider';\n`);
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'upload.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'upload.ts'), this.createUploadConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'upload.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'upload.ts'), this.createUploadConfig.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'), this.createFakeStorage.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'fakes', 'FakeStorageProvider.ts'), this.createFakeStorage.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'), this.createDiskStorage.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'DiskStorageProvider.ts'), this.createDiskStorage.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'), this.createS3Storage.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'implementations', 'S3StorageProvider.ts'), this.createS3Storage.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'), this.createIStorage.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'models', 'IStorageProvider.ts'), this.createIStorage.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'), this.createStorageIndex.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'StorageProvider', 'index.ts'), this.createStorageIndex.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- StorageProvider ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeDependentStorageProvider = MakeDependentStorageProvider;
