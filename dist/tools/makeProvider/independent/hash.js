"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeHashProvider = makeHashProvider;
var _fs = require("fs");
var _hashConfig = require("../../../../dist/templates/providers/config/hashConfig");
var _fakeHash = require("../../../../dist/templates/providers/fakes/fakeHash");
var _hashIndex = require("../../../../dist/templates/providers/hashIndex");
var _BCrypt = require("../../../../dist/templates/providers/implementations/BCrypt");
var _IHash = require("../../../../dist/templates/providers/models/IHash");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeHashProvider() {
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
    (0, _fs.appendFile)('src/config/hash.ts', (0, _hashConfig.createHashConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/hash.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/hash.ts', (0, _hashConfig.createHashConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', (0, _fakeHash.createFakeHash)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/fakes/FakeHashProvider.ts', (0, _fakeHash.createFakeHash)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', (0, _BCrypt.createHash)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/implementations/BCryptHashProvider.ts', (0, _BCrypt.createHash)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/models/IHashProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/models/IHashProvider.ts', (0, _IHash.createIHash)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/HashProvider/models/IHashProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/models/IHashProvider.ts', (0, _IHash.createIHash)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/HashProvider/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/index.ts', (0, _hashIndex.createHashIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/HashProvider/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/HashProvider/index.ts', (0, _hashIndex.createHashIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- HashProvider ${_messages.default.created}`, '\x1b[0m');
}