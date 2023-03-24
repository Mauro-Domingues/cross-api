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
var _messages = require("../../../../dist/tools/messages");
var _path = require("path");
class MakeHashProvider {
  constructor() {
    this.messages = void 0;
    this.createIHash = void 0;
    this.createHash = void 0;
    this.createFakeHash = void 0;
    this.createHashConfig = void 0;
    this.createHashIndex = void 0;
    this.messages = new _messages.Messages().execute();
    this.createIHash = new _IHash.CreateIHash();
    this.createHash = new _BCrypt.CreateHash();
    this.createFakeHash = new _fakeHash.CreateFakeHash();
    this.createHashConfig = new _hashConfig.CreateHashConfig();
    this.createHashIndex = new _hashIndex.CreateHashIndex();
  }
  async execute() {
    if (!(0, _fs.existsSync)((0, _path.resolve)('src'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'config'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'fakes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'fakes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'implementations'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'implementations'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'models'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'models'));
    }
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './HashProvider';\n`);
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config', 'hash.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'hash.ts'), this.createHashConfig.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'config', 'hash.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'hash.ts'), this.createHashConfig.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'), this.createFakeHash.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'), this.createFakeHash.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'), this.createHash.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'), this.createHash.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'models', 'IHashProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'models', 'IHashProvider.ts'), this.createIHash.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'models', 'IHashProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'models', 'IHashProvider.ts'), this.createIHash.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'), this.createHashIndex.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'HashProvider', 'index.ts'), this.createHashIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- HashProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeHashProvider = MakeHashProvider;