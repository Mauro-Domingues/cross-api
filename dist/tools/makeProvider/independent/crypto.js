"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeCryptoProvider = void 0;
var _fs = require("fs");
var _cryptoConfig = require("../../../../dist/templates/providers/config/cryptoConfig");
var _cryptoIndex = require("../../../../dist/templates/providers/cryptoIndex");
var _ICryptoDTO = require("../../../../dist/templates/providers/dtos/ICryptoDTO");
var _Crypto = require("../../../../dist/templates/providers/implementations/Crypto");
var _ICrypto = require("../../../../dist/templates/providers/models/ICrypto");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeCryptoProvider {
  constructor() {
    this.messages = void 0;
    this.createICrypto = void 0;
    this.createICryptoDTO = void 0;
    this.createCrypto = void 0;
    this.createCryptoConfig = void 0;
    this.createCryptoIndex = void 0;
    this.messages = _messages.default;
    this.createICrypto = new _ICrypto.CreateICrypto();
    this.createICryptoDTO = new _ICryptoDTO.CreateICryptoDTO();
    this.createCrypto = new _Crypto.CreateCrypto();
    this.createCryptoConfig = new _cryptoConfig.CreateCryptoConfig();
    this.createCryptoIndex = new _cryptoIndex.CreateCryptoIndex();
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
      (0, _fs.appendFile)('src/config/crypto.ts', this.createCryptoConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/crypto.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/config/crypto.ts', this.createCryptoConfig.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', this.createICryptoDTO.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/dtos/ICryptoDTO.ts', this.createICryptoDTO.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', this.createCrypto.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/implementations/CryptoProvider.ts', this.createCrypto.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', this.createICrypto.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/models/ICryptoProvider.ts', this.createICrypto.execute(), error => {
        if (error) throw error;
      });
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers/CryptoProvider/index.ts')) {
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/index.ts', this.createCryptoIndex.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/shared/container/providers/CryptoProvider/index.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/shared/container/providers/CryptoProvider/index.ts', this.createCryptoIndex.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- CryptoProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeCryptoProvider = MakeCryptoProvider;