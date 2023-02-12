"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeStorageProvider = makeStorageProvider;
var _fs = require("fs");
var _uploadConfig = require("../../../../dist/templates/providers/config/uploadConfig");
var _fakeStorage = require("../../../../dist/templates/providers/fakes/fakeStorage");
var _DiskStorage = require("../../../../dist/templates/providers/implementations/DiskStorage");
var _S3Storage = require("../../../../dist/templates/providers/implementations/S3Storage");
var _IStorage = require("../../../../dist/templates/providers/models/IStorage");
var _storageIndex = require("../../../../dist/templates/providers/storageIndex");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeStorageProvider() {
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
    (0, _fs.appendFile)('src/config/upload.ts', (0, _uploadConfig.createUploadConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/upload.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/upload.ts', (0, _uploadConfig.createUploadConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', (0, _fakeStorage.createFakeStorage)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', (0, _fakeStorage.createFakeStorage)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', (0, _DiskStorage.createDiskStorage)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', (0, _DiskStorage.createDiskStorage)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', (0, _S3Storage.createS3Storage)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', (0, _S3Storage.createS3Storage)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', (0, _IStorage.createIStorage)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', (0, _IStorage.createIStorage)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/StorageProvider/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/index.ts', (0, _storageIndex.createStorageIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/StorageProvider/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/StorageProvider/index.ts', (0, _storageIndex.createStorageIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- StorageProvider ${_messages.default.created}`, '\x1b[0m');
}