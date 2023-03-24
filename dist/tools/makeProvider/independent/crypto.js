"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeCryptoProvider = void 0;
const fs_1 = require("fs");
const cryptoConfig_1 = require("@templates/providers/config/cryptoConfig");
const cryptoIndex_1 = require("@templates/providers/cryptoIndex");
const ICryptoDTO_1 = require("@templates/providers/dtos/ICryptoDTO");
const Crypto_1 = require("@templates/providers/implementations/Crypto");
const ICrypto_1 = require("@templates/providers/models/ICrypto");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeCryptoProvider {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createICrypto = new ICrypto_1.CreateICrypto();
        this.createICryptoDTO = new ICryptoDTO_1.CreateICryptoDTO();
        this.createCrypto = new Crypto_1.CreateCrypto();
        this.createCryptoConfig = new cryptoConfig_1.CreateCryptoConfig();
        this.createCryptoIndex = new cryptoIndex_1.CreateCryptoIndex();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'config'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models'));
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './CryptoProvider';\n`);
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'crypto.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'crypto.ts'), this.createCryptoConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'crypto.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'crypto.ts'), this.createCryptoConfig.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'), this.createICryptoDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'dtos', 'ICryptoDTO.ts'), this.createICryptoDTO.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'), this.createCrypto.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'implementations', 'CryptoProvider.ts'), this.createCrypto.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'), this.createICrypto.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'models', 'ICryptoProvider.ts'), this.createICrypto.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'), this.createCryptoIndex.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'CryptoProvider', 'index.ts'), this.createCryptoIndex.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- CryptoProvider ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeCryptoProvider = MakeCryptoProvider;
