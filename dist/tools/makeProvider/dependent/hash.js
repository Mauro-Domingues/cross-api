"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentHashProvider;
var _fs = _interopRequireDefault(require("fs"));
var _container = _interopRequireDefault(require("../../../../dist/templates/index/container"));
var _hashConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/hashConfig"));
var _fakeHash = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeHash"));
var _hashIndex = _interopRequireDefault(require("../../../../dist/templates/providers/hashIndex"));
var _BCrypt = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/BCrypt"));
var _IHash = _interopRequireDefault(require("../../../../dist/templates/providers/models/IHash"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentHashProvider(fatherData) {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/modules')) {
    _fs.default.mkdirSync('src/modules');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/index.ts')) {
    _fs.default.appendFile('src/shared/container/index.ts', (0, _container.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, '', error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models`);
  }
  _fs.default.appendFile(`src/shared/container/index.ts`, `import '@modules/${fatherData.pluralLowerModuleName}/providers';`, error => {
    if (error) throw error;
  });
  _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, `\nimport './HashProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/config/hash.ts')) {
    _fs.default.appendFile('src/config/hash.ts', (0, _hashConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/hash.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/hash.ts', (0, _hashConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`, (0, _fakeHash.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/fakes/FakeHashProvider.ts`, (0, _fakeHash.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`, (0, _BCrypt.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/implementations/BCryptHashProvider.ts`, (0, _BCrypt.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`, (0, _IHash.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/models/IHashProvider.ts`, (0, _IHash.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`, (0, _hashIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/HashProvider/index.ts`, (0, _hashIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- HashProvider ${_messages.default.created}`, '\x1b[0m');
}