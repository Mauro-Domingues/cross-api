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
var _path = require("path");
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
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models'));
    }
    (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './CryptoProvider';\n`);
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config', 'crypto.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'crypto.ts'), this.createCryptoConfig.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'config', 'crypto.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'config', 'crypto.ts'), this.createCryptoConfig.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'), this.createICryptoDTO.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'), this.createICryptoDTO.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'), this.createCrypto.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'), this.createCrypto.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'), this.createICrypto.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'), this.createICrypto.execute());
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'), this.createCryptoIndex.execute());
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'), this.createCryptoIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- CryptoProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeCryptoProvider = MakeCryptoProvider;