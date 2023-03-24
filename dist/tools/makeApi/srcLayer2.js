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
exports.MakeSecondLayer = void 0;
const messages_1 = require("@tools/messages");
const fs_1 = require("fs");
const path_1 = require("path");
class MakeSecondLayer {
    constructor() {
        this.messages = new messages_1.Messages().execute();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'swagger.json'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'swagger.json'), '{}');
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'swagger.json'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'swagger.json'), '{}');
            }
            console.log('\x1b[38;2;255;255;0m', `- swagger.json ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeSecondLayer = MakeSecondLayer;
