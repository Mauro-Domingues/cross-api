"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeHashProvider;
var _fs = _interopRequireDefault(require("fs"));
var _hashConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/hashConfig"));
var _fakeHash = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeHash"));
var _hashIndex = _interopRequireDefault(require("../../../../dist/templates/providers/hashIndex"));
var _BCrypt = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/BCrypt"));
var _IHash = _interopRequireDefault(require("../../../../dist/templates/providers/models/IHash"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeHashProvider() {
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
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider')) {
    _fs.default.mkdirSync('src/shared/container/providers/HashProvider');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider/fakes')) {
    _fs.default.mkdirSync('src/shared/container/providers/HashProvider/fakes');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider/implementations')) {
    _fs.default.mkdirSync('src/shared/container/providers/HashProvider/implementations');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider/models')) {
    _fs.default.mkdirSync('src/shared/container/providers/HashProvider/models');
  }
  _fs.default.appendFile('src/shared/container/providers/index.ts', `\nimport './HashProvider';`, error => {
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
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', (0, _fakeHash.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', (0, _fakeHash.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', (0, _BCrypt.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', (0, _BCrypt.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider/models/IHashProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/HashProvider/models/IHashProvider.ts', (0, _IHash.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/HashProvider/models/IHashProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/HashProvider/models/IHashProvider.ts', (0, _IHash.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/HashProvider/index.ts')) {
    _fs.default.appendFile('src/shared/container/providers/HashProvider/index.ts', (0, _hashIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/HashProvider/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/HashProvider/index.ts', (0, _hashIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- HashProvider ${_messages.default.created}`, '\x1b[0m');
}