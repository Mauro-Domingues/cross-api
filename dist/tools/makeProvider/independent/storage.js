"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeStorageProvider = void 0;
var _fs = require("fs");
var _uploadConfig = require("../../../../dist/templates/providers/config/uploadConfig");
var _fakeStorage = require("../../../../dist/templates/providers/fakes/fakeStorage");
var _DiskStorage = require("../../../../dist/templates/providers/implementations/DiskStorage");
var _S3Storage = require("../../../../dist/templates/providers/implementations/S3Storage");
var _IStorage = require("../../../../dist/templates/providers/models/IStorage");
var _storageIndex = require("../../../../dist/templates/providers/storageIndex");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeStorageProvider {
  constructor() {
    this.messages = void 0;
    this.createIStorage = void 0;
    this.createDiskStorage = void 0;
    this.createS3Storage = void 0;
    this.createFakeStorage = void 0;
    this.createUploadConfig = void 0;
    this.createStorageIndex = void 0;
    this.messages = _messages.default;
    this.createDiskStorage = new _DiskStorage.CreateDiskStorage();
    this.createS3Storage = new _S3Storage.CreateS3Storage();
    this.createFakeStorage = new _fakeStorage.CreateFakeStorage();
    this.createUploadConfig = new _uploadConfig.CreateUploadConfig();
    this.createIStorage = new _IStorage.CreateIStorage();
    this.createStorageIndex = new _storageIndex.CreateStorageIndex();
  }
  async execute() {
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/config')) {
      (0, _fs.mkdirSync)('src/config');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers')) {
      (0, _fs.mkdirSync)('src/shared/container/providers');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/StorageProvider');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/fakes')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/StorageProvider/fakes');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/implementations')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/StorageProvider/implementations');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/models')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/StorageProvider/models');
    }
    (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './StorageProvider';`, error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)('src/config/upload.ts')) {
      (0, _fs.appendFile)('src/config/upload.ts', this.createUploadConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/upload.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/config/upload.ts', this.createUploadConfig.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', this.createFakeStorage.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', this.createFakeStorage.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', this.createDiskStorage.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', this.createDiskStorage.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', this.createS3Storage.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', this.createS3Storage.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', this.createIStorage.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', this.createIStorage.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/index.ts', this.createStorageIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/StorageProvider/index.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/index.ts', this.createStorageIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- StorageProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeStorageProvider = MakeStorageProvider;