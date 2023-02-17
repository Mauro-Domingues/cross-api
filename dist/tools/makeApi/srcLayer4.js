"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFourthLayer = makeFourthLayer;
var _typeorm = require("../../../dist/templates/api/typeorm");
var _appError = require("../../../dist/templates/errors/appError");
var _container = require("../../../dist/templates/index/container");
var _dataSource = require("../../../dist/templates/api/dataSource");
var _mapAndClone = require("../../../dist/templates/utils/mappers/mapAndClone");
var _mapAndInsert = require("../../../dist/templates/utils/mappers/mapAndInsert");
var _mapAndPatch = require("../../../dist/templates/utils/mappers/mapAndPatch");
var _mapAndPatchString = require("../../../dist/templates/utils/mappers/mapAndPatchString");
var _mapAndUpdate = require("../../../dist/templates/utils/mappers/mapAndUpdate");
var _mapAndUpdateString = require("../../../dist/templates/utils/mappers/mapAndUpdateString");
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = require("fs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeFourthLayer() {
  if (!(0, _fs.existsSync)('src/utils/mappers/mapAndCloneAttribute.ts')) {
    (0, _fs.appendFile)('src/utils/mappers/mapAndCloneAttribute.ts', (0, _mapAndClone.createMapAndClone)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/mappers/mapAndCloneAttribute.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/mappers/mapAndCloneAttribute.ts', (0, _mapAndClone.createMapAndClone)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndCloneAttribute.ts.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/utils/mappers/mapAndInsertAttribute.ts')) {
    (0, _fs.appendFile)('src/utils/mappers/mapAndInsertAttribute.ts', (0, _mapAndInsert.createMapAndInsert)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/mappers/mapAndInsertAttribute.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/mappers/mapAndInsertAttribute.ts', (0, _mapAndInsert.createMapAndInsert)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndInsertAttribute.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/utils/mappers/mapAndPatchAttribute.ts')) {
    (0, _fs.appendFile)('src/utils/mappers/mapAndPatchAttribute.ts', (0, _mapAndPatch.createMapAndPatch)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/mappers/mapAndPatchAttribute.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/mappers/mapAndPatchAttribute.ts', (0, _mapAndPatch.createMapAndPatch)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndPatchAttribute.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/utils/mappers/mapAndPatchString.ts')) {
    (0, _fs.appendFile)('src/utils/mappers/mapAndPatchString.ts', (0, _mapAndPatchString.createMapAndPatchString)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/mappers/mapAndPatchString.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/mappers/mapAndPatchString.ts', (0, _mapAndPatchString.createMapAndPatchString)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndPatchString.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/utils/mappers/mapAndUpdateAttribute.ts')) {
    (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateAttribute.ts', (0, _mapAndUpdate.createMapAndUpdate)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/mappers/mapAndUpdateAttribute.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateAttribute.ts', (0, _mapAndUpdate.createMapAndUpdate)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateAttribute.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/utils/mappers/mapAndUpdateString.ts')) {
    (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateString.ts', (0, _mapAndUpdateString.createMapAndUpdateString)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/utils/mappers/mapAndUpdateString.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateString.ts', (0, _mapAndUpdateString.createMapAndUpdateString)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateString.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/index.ts', (0, _container.createContainer)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/index.ts', (0, _container.createContainer)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- container/index.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/shared/errors/AppError.ts')) {
    (0, _fs.appendFile)('src/shared/errors/AppError.ts', (0, _appError.createAppError)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/errors/AppError.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/errors/AppError.ts', (0, _appError.createAppError)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- AppError.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/shared/typeorm/index.ts')) {
    (0, _fs.appendFile)('src/shared/typeorm/index.ts', (0, _typeorm.createTypeorm)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/typeorm/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/typeorm/index.ts', (0, _typeorm.createTypeorm)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- typeorm/index.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('src/shared/typeorm/dataSource.ts')) {
    (0, _fs.appendFile)('src/shared/typeorm/dataSource.ts', (0, _dataSource.createDataSource)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/typeorm/dataSource.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/typeorm/dataSource.ts', (0, _dataSource.createDataSource)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- dataSource.ts ${_messages.default.created}`, '\x1b[0m');
}