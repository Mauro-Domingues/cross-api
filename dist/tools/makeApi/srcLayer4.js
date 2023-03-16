"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeFourthLayer = void 0;
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
class MakeFourthLayer {
  constructor() {
    this.messages = void 0;
    this.createMapAndUpdateString = void 0;
    this.createMapAndUpdate = void 0;
    this.createMapAndPatchString = void 0;
    this.createMapAndPatch = void 0;
    this.createMapAndInsert = void 0;
    this.createMapAndClone = void 0;
    this.createDataSource = void 0;
    this.createContainer = void 0;
    this.createAppError = void 0;
    this.createTypeorm = void 0;
    this.messages = _messages.default;
    this.createMapAndUpdateString = new _mapAndUpdateString.CreateMapAndUpdateString();
    this.createMapAndUpdate = new _mapAndUpdate.CreateMapAndUpdate();
    this.createMapAndPatchString = new _mapAndPatchString.CreateMapAndPatchString();
    this.createMapAndPatch = new _mapAndPatch.CreateMapAndPatch();
    this.createMapAndInsert = new _mapAndInsert.CreateMapAndInsert();
    this.createMapAndClone = new _mapAndClone.CreateMapAndClone();
    this.createDataSource = new _dataSource.CreateDataSource();
    this.createContainer = new _container.CreateContainer();
    this.createAppError = new _appError.CreateAppError();
    this.createTypeorm = new _typeorm.CreateTypeorm();
  }
  async execute() {
    if (!(0, _fs.existsSync)('src/utils/mappers/mapAndCloneAttribute.ts')) {
      (0, _fs.appendFile)('src/utils/mappers/mapAndCloneAttribute.ts', this.createMapAndClone.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/mappers/mapAndCloneAttribute.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/utils/mappers/mapAndCloneAttribute.ts', this.createMapAndClone.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- mapAndCloneAttribute.ts.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/mappers/mapAndInsertAttribute.ts')) {
      (0, _fs.appendFile)('src/utils/mappers/mapAndInsertAttribute.ts', this.createMapAndInsert.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/mappers/mapAndInsertAttribute.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/utils/mappers/mapAndInsertAttribute.ts', this.createMapAndInsert.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- mapAndInsertAttribute.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/mappers/mapAndPatchAttribute.ts')) {
      (0, _fs.appendFile)('src/utils/mappers/mapAndPatchAttribute.ts', this.createMapAndPatch.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/mappers/mapAndPatchAttribute.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/utils/mappers/mapAndPatchAttribute.ts', this.createMapAndPatch.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- mapAndPatchAttribute.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/mappers/mapAndPatchString.ts')) {
      (0, _fs.appendFile)('src/utils/mappers/mapAndPatchString.ts', this.createMapAndPatchString.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/mappers/mapAndPatchString.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/utils/mappers/mapAndPatchString.ts', this.createMapAndPatchString.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- mapAndPatchString.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/mappers/mapAndUpdateAttribute.ts')) {
      (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateAttribute.ts', this.createMapAndUpdate.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/mappers/mapAndUpdateAttribute.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateAttribute.ts', this.createMapAndUpdate.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateAttribute.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/utils/mappers/mapAndUpdateString.ts')) {
      (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateString.ts', this.createMapAndUpdateString.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/utils/mappers/mapAndUpdateString.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/utils/mappers/mapAndUpdateString.ts', this.createMapAndUpdateString.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- mapAndUpdateString.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/index.ts', this.createContainer.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/index.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/index.ts', this.createContainer.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- container/index.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/errors/AppError.ts')) {
      (0, _fs.appendFile)('src/shared/errors/AppError.ts', this.createAppError.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/errors/AppError.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/errors/AppError.ts', this.createAppError.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- AppError.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/typeorm/index.ts')) {
      (0, _fs.appendFile)('src/shared/typeorm/index.ts', this.createTypeorm.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/typeorm/index.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/typeorm/index.ts', this.createTypeorm.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- typeorm/index.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/shared/typeorm/dataSource.ts')) {
      (0, _fs.appendFile)('src/shared/typeorm/dataSource.ts', this.createDataSource.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/typeorm/dataSource.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/typeorm/dataSource.ts', this.createDataSource.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- dataSource.ts ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeFourthLayer = MakeFourthLayer;