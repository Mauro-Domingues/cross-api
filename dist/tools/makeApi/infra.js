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
exports.MakeInfra = void 0;
const messages_1 = require("@tools/messages");
const fs_1 = require("fs");
const path_1 = require("path");
class MakeInfra {
    constructor() {
        this.messages = new messages_1.Messages().execute();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'config'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', '@types'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', '@types'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'dtos'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'dtos'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'assets'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'assets'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'middlewares'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'middlewares'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'routes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'utils'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'utils', 'mappers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'utils', 'mappers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'errors'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'errors'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'typeorm'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'typeorm'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'migrations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'migrations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'seeds'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'typeorm', 'seeds'));
            }
            console.log('\x1b[1m', '\x1b[38;2;0;155;255m', this.messages.apiCreated, '\x1b[0m');
        });
    }
}
exports.MakeInfra = MakeInfra;
