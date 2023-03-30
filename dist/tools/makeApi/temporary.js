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
exports.MakeTemporary = void 0;
const fs_1 = require("fs");
const messages_1 = require("../messages");
const authConfig_1 = require("../../templates/providers/config/authConfig");
const corsConfig_1 = require("../../templates/providers/config/corsConfig");
const path_1 = require("path");
class MakeTemporary {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createCorsConfig = new corsConfig_1.CreateCorsConfig();
        this.createAuthConfig = new authConfig_1.CreateAuthConfig();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'auth.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'auth.ts'), this.createAuthConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'auth.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'auth.ts'), this.createAuthConfig.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- auth.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', 'cors.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'cors.ts'), this.createCorsConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'config', 'cors.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'config', 'cors.ts'), this.createCorsConfig.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- cors.ts ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeTemporary = MakeTemporary;
