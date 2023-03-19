"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentHashProvider = void 0;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _hashConfig = require("../../../../dist/templates/providers/config/hashConfig");
var _fakeHash = require("../../../../dist/templates/providers/fakes/fakeHash");
var _hashIndex = require("../../../../dist/templates/providers/hashIndex");
var _BCrypt = require("../../../../dist/templates/providers/implementations/BCrypt");
var _IHash = require("../../../../dist/templates/providers/models/IHash");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _path = require("path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentHashProvider {
  constructor(fatherNames) {
    this.fatherNames = void 0;
    this.messages = void 0;
    this.createIHash = void 0;
    this.createHash = void 0;
    this.createFakeHash = void 0;
    this.createHashConfig = void 0;
    this.createHashIndex = void 0;
    this.createContainer = void 0;
    this.fatherNames = fatherNames;
    this.messages = _messages.default;
    this.createIHash = new _IHash.CreateIHash();
    this.createHash = new _BCrypt.CreateHash();
    this.createFakeHash = new _fakeHash.CreateFakeHash();
    this.createHashConfig = new _hashConfig.CreateHashConfig();
    this.createHashIndex = new _hashIndex.CreateHashIndex();
    this.createContainer = new _container.CreateContainer();
  }
  async execute() {
    if (!this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'config'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), this.createContainer.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), '');
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'fakes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'fakes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'implementations'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'implementations'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'models'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'models'));
    }
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers;`);
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), `\nimport './HashProvider';`);
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config', 'hash.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'hash.ts'), this.createHashConfig.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'config', 'hash.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'hash.ts'), this.createHashConfig.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'), this.createFakeHash.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'fakes', 'FakeHashProvider.ts'), this.createFakeHash.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'), this.createHash.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'implementations', 'BCryptHashProvider.ts'), this.createHash.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'models', 'IHashProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'models', 'IHashProvider.ts'), this.createIHash.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'models', 'IHashProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'models', 'IHashProvider.ts'), this.createIHash.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'index.ts'), this.createHashIndex.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'HashProvider', 'index.ts'), this.createHashIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- HashProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeDependentHashProvider = MakeDependentHashProvider;