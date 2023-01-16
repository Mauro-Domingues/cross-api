"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeCryptoProvider;
var _fs = _interopRequireDefault(require("fs"));
var _cryptoConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/cryptoConfig"));
var _cryptoIndex = _interopRequireDefault(require("../../../../dist/templates/providers/cryptoIndex"));
var _ICryptoDTO = _interopRequireDefault(require("../../../../dist/templates/providers/dtos/ICryptoDTO"));
var _fakeCrypto = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeCrypto"));
var _Crypto = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/Crypto"));
var _ICrypto = _interopRequireDefault(require("../../../../dist/templates/providers/models/ICrypto"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeCryptoProvider() {
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
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider')) {
    _fs.default.mkdirSync('src/shared/container/providers/CryptoProvider');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/dtos')) {
    _fs.default.mkdirSync('src/shared/container/providers/CryptoProvider/dtos');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/fakes')) {
    _fs.default.mkdirSync('src/shared/container/providers/CryptoProvider/fakes');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/implementations')) {
    _fs.default.mkdirSync('src/shared/container/providers/CryptoProvider/implementations');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/models')) {
    _fs.default.mkdirSync('src/shared/container/providers/CryptoProvider/models');
  }
  _fs.default.appendFile('src/shared/container/providers/index.ts', `\nimport './CryptoProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/config/crypto.ts')) {
    _fs.default.appendFile('src/config/crypto.ts', (0, _cryptoConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/crypto.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/crypto.ts', (0, _cryptoConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts')) {
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', (0, _ICryptoDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', (0, _ICryptoDTO.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts', (0, _fakeCrypto.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/fakes/FakeCryptoProvider.ts', (0, _fakeCrypto.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', (0, _Crypto.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', (0, _Crypto.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', (0, _ICrypto.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', (0, _ICrypto.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/CryptoProvider/index.ts')) {
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/index.ts', (0, _cryptoIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/CryptoProvider/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/CryptoProvider/index.ts', (0, _cryptoIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- CryptoProvider ${_messages.default.created}`, '\x1b[0m');
}