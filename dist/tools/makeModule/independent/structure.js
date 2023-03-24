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
exports.MakeStructure = void 0;
const fs_1 = require("fs");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeStructure {
    constructor(names) {
        this.messages = new messages_1.Messages().execute();
        this.names = names;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.names) {
                console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
                throw new Error();
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'routes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'dtos'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'entities'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'repositories', 'fakes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `create${this.names.upperModuleName}`));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `delete${this.names.upperModuleName}`));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `list${this.names.upperModuleName}`));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `show${this.names.upperModuleName}`));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'modules', this.names.pluralLowerModuleName, 'services', `update${this.names.upperModuleName}`));
            }
        });
    }
}
exports.MakeStructure = MakeStructure;
