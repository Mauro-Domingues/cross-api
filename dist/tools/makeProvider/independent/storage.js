"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeStorageProvider;
var _fs = _interopRequireDefault(require("fs"));
var _uploadConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/uploadConfig"));
var _fakeStorage = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeStorage"));
var _DiskStorage = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/DiskStorage"));
var _S3Storage = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/S3Storage"));
var _IStorage = _interopRequireDefault(require("../../../../dist/templates/providers/models/IStorage"));
var _storageIndex = _interopRequireDefault(require("../../../../dist/templates/providers/storageIndex"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeStorageProvider() {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/shared')) {
    _fs.default.mkdirSync('src/shared');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/providers')) {
    _fs.default.mkdirSync('src/shared/container/providers');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider')) {
    _fs.default.mkdirSync('src/shared/container/providers/StorageProvider');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/fakes')) {
    _fs.default.mkdirSync('src/shared/container/providers/StorageProvider/fakes');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/implementations')) {
    _fs.default.mkdirSync('src/shared/container/providers/StorageProvider/implementations');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/models')) {
    _fs.default.mkdirSync('src/shared/container/providers/StorageProvider/models');
  }
  _fs.default.appendFile('src/shared/container/providers/index.ts', `\nimport './StorageProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/config/upload.ts')) {
    _fs.default.appendFile('src/config/upload.ts', (0, _uploadConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/upload.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/upload.ts', (0, _uploadConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', (0, _fakeStorage.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/fakes/FakeStorageProvider.ts', (0, _fakeStorage.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', (0, _DiskStorage.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/implementations/DiskStorageProvider.ts', (0, _DiskStorage.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', (0, _S3Storage.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/implementations/S3StorageProvider.ts', (0, _S3Storage.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', (0, _IStorage.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/models/IStorageProvider.ts', (0, _IStorage.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/StorageProvider/index.ts')) {
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/index.ts', (0, _storageIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/StorageProvider/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/StorageProvider/index.ts', (0, _storageIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- StorageProvider ${_messages.default.created}`, '\x1b[0m');
}