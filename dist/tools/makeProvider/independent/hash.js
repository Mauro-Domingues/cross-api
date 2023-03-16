"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeHashProvider = void 0;
var _fs = require("fs");
var _hashConfig = require("../../../../dist/templates/providers/config/hashConfig");
var _fakeHash = require("../../../../dist/templates/providers/fakes/fakeHash");
var _hashIndex = require("../../../../dist/templates/providers/hashIndex");
var _BCrypt = require("../../../../dist/templates/providers/implementations/BCrypt");
var _IHash = require("../../../../dist/templates/providers/models/IHash");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeHashProvider {
  constructor() {
    this.messages = void 0;
    this.createIHash = void 0;
    this.createHash = void 0;
    this.createFakeHash = void 0;
    this.createHashConfig = void 0;
    this.createHashIndex = void 0;
    this.messages = _messages.default;
    this.createIHash = new _IHash.CreateIHash();
    this.createHash = new _BCrypt.CreateHash();
    this.createFakeHash = new _fakeHash.CreateFakeHash();
    this.createHashConfig = new _hashConfig.CreateHashConfig();
    this.createHashIndex = new _hashIndex.CreateHashIndex();
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
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/HashProvider');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/fakes')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/HashProvider/fakes');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/implementations')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/HashProvider/implementations');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/models')) {
      (0, _fs.mkdirSync)('src/shared/container/providers/HashProvider/models');
    }
    (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './HashProvider';`, error => {
      if (error) throw error;
    });
    if (!(0, _fs.existsSync)('src/config/hash.ts')) {
      (0, _fs.appendFile)('src/config/hash.ts', this.createHashConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/hash.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/config/hash.ts', this.createHashConfig.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', this.createFakeHash.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', this.createFakeHash.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', this.createHash.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', this.createHash.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/models/IHashProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/models/IHashProvider.ts', this.createIHash.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/HashProvider/models/IHashProvider.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/models/IHashProvider.ts', this.createIHash.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/index.ts', this.createHashIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/HashProvider/index.ts', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('src/shared/container/providers/HashProvider/index.ts', this.createHashIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- HashProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeHashProvider = MakeHashProvider;