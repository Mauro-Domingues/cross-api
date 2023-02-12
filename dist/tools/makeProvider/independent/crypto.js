"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeCryptoProvider = makeCryptoProvider;
var _fs = require("fs");
var _cryptoConfig = require("../../../../dist/templates/providers/config/cryptoConfig");
var _cryptoIndex = require("../../../../dist/templates/providers/cryptoIndex");
var _ICryptoDTO = require("../../../../dist/templates/providers/dtos/ICryptoDTO");
var _Crypto = require("../../../../dist/templates/providers/implementations/Crypto");
var _ICrypto = require("../../../../dist/templates/providers/models/ICrypto");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeCryptoProvider() {
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
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CryptoProvider');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/dtos')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CryptoProvider/dtos');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/implementations')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CryptoProvider/implementations');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/models')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/CryptoProvider/models');
  }
  (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './CryptoProvider';`, error => {
    if (error) throw error;
  });
  if (!(0, _fs.existsSync)('src/config/crypto.ts')) {
    (0, _fs.appendFile)('src/config/crypto.ts', (0, _cryptoConfig.createCryptoConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/crypto.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/crypto.ts', (0, _cryptoConfig.createCryptoConfig)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', (0, _ICryptoDTO.createICryptoDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', (0, _ICryptoDTO.createICryptoDTO)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', (0, _Crypto.createCrypto)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', (0, _Crypto.createCrypto)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', (0, _ICrypto.createICrypto)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', (0, _ICrypto.createICrypto)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/index.ts', (0, _cryptoIndex.createCryptoIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/index.ts', (0, _cryptoIndex.createCryptoIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- CryptoProvider ${_messages.default.created}`, '\x1b[0m');
}