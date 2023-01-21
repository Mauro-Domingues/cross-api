"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFourthLayer;
var _typeorm = _interopRequireDefault(require("../../../dist/templates/api/typeorm"));
var _appError = _interopRequireDefault(require("../../../dist/templates/errors/appError"));
var _container = _interopRequireDefault(require("../../../dist/templates/index/container"));
var _dataSource = _interopRequireDefault(require("../../../dist/templates/api/dataSource"));
var _mapAndClone = _interopRequireDefault(require("../../../dist/templates/utils/mappers/mapAndClone"));
var _mapAndInsert = _interopRequireDefault(require("../../../dist/templates/utils/mappers/mapAndInsert"));
var _mapAndPatch = _interopRequireDefault(require("../../../dist/templates/utils/mappers/mapAndPatch"));
var _mapAndPatchString = _interopRequireDefault(require("../../../dist/templates/utils/mappers/mapAndPatchString"));
var _mapAndUpdate = _interopRequireDefault(require("../../../dist/templates/utils/mappers/mapAndUpdate"));
var _mapAndUpdateString = _interopRequireDefault(require("../../../dist/templates/utils/mappers/mapAndUpdateString"));
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeFourthLayer() {
  if (!_fs.default.existsSync('src/utils/mappers/mapAndCloneAttribute.ts')) {
    _fs.default.appendFile('src/utils/mappers/mapAndCloneAttribute.ts', (0, _mapAndClone.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/mappers/mapAndCloneAttribute.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/mappers/mapAndCloneAttribute.ts', (0, _mapAndClone.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndCloneAttribute.ts.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/utils/mappers/mapAndInsertAttribute.ts')) {
    _fs.default.appendFile('src/utils/mappers/mapAndInsertAttribute.ts', (0, _mapAndInsert.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/mappers/mapAndInsertAttribute.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/mappers/mapAndInsertAttribute.ts', (0, _mapAndInsert.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndInsertAttribute.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/utils/mappers/mapAndPatchAttribute.ts')) {
    _fs.default.appendFile('src/utils/mappers/mapAndPatchAttribute.ts', (0, _mapAndPatch.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/mappers/mapAndPatchAttribute.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/mappers/mapAndPatchAttribute.ts', (0, _mapAndPatch.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndPatchAttribute.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/utils/mappers/mapAndPatchString.ts')) {
    _fs.default.appendFile('src/utils/mappers/mapAndPatchString.ts', (0, _mapAndPatchString.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/mappers/mapAndPatchString.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/mappers/mapAndPatchString.ts', (0, _mapAndPatchString.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndPatchString.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/utils/mappers/mapAndUpdateAttribute.ts')) {
    _fs.default.appendFile('src/utils/mappers/mapAndUpdateAttribute.ts', (0, _mapAndUpdate.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/mappers/mapAndUpdateAttribute.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/mappers/mapAndUpdateAttribute.ts', (0, _mapAndUpdate.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateAttribute.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/utils/mappers/mapAndUpdateString.ts')) {
    _fs.default.appendFile('src/utils/mappers/mapAndUpdateString.ts', (0, _mapAndUpdateString.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/utils/mappers/mapAndUpdateString.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/utils/mappers/mapAndUpdateString.ts', (0, _mapAndUpdateString.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateString.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/shared/container/index.ts')) {
    _fs.default.appendFile('src/shared/container/index.ts', (0, _container.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/index.ts', (0, _container.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- container/index.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/shared/errors/AppError.ts')) {
    _fs.default.appendFile('src/shared/errors/AppError.ts', (0, _appError.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/errors/AppError.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/errors/AppError.ts', (0, _appError.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- AppError.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/shared/typeorm/index.ts')) {
    _fs.default.appendFile('src/shared/typeorm/index.ts', (0, _typeorm.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/typeorm/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/typeorm/index.ts', (0, _typeorm.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- typeorm/index.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/shared/typeorm/dataSource.ts')) {
    _fs.default.appendFile('src/shared/typeorm/dataSource.ts', (0, _dataSource.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/typeorm/dataSource.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/typeorm/dataSource.ts', (0, _dataSource.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- dataSource.ts ${_messages.default.created}`, '\x1b[0m');
}