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
exports.MakeMailTemplateProvider = void 0;
const fs_1 = require("fs");
const IParseMailTemplateDTO_1 = require("@templates/providers/dtos/IParseMailTemplateDTO");
const fakeMailTemplate_1 = require("@templates/providers/fakes/fakeMailTemplate");
const MailTemplate_1 = require("@templates/providers/implementations/MailTemplate");
const mailTemplateIndex_1 = require("@templates/providers/mailTemplateIndex");
const IMailTemplate_1 = require("@templates/providers/models/IMailTemplate");
const messages_1 = require("@tools/messages");
const path_1 = require("path");
class MakeMailTemplateProvider {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createIMailTemplate = new IMailTemplate_1.CreateIMailTemplate();
        this.createIMailTemplateDTO = new IParseMailTemplateDTO_1.CreateIMailTemplateDTO();
        this.createMailTemplate = new MailTemplate_1.CreateMailTemplate();
        this.createFakeMailTemplate = new fakeMailTemplate_1.CreateFakeMailTemplate();
        this.createMailTemplateIndex = new mailTemplateIndex_1.CreateMailTemplateIndex();
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
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations'));
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models'))) {
                (0, fs_1.mkdirSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models'));
            }
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), `import './MailTemplateProvider';\n`);
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'), this.createIMailTemplateDTO.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'), this.createIMailTemplateDTO.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'), this.createFakeMailTemplate.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'), this.createFakeMailTemplate.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'), this.createMailTemplate.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'), this.createMailTemplate.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'), this.createIMailTemplate.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'), this.createIMailTemplate.execute());
            }
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'), this.createMailTemplateIndex.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'), this.createMailTemplateIndex.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- MailTemplateProvider ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeMailTemplateProvider = MakeMailTemplateProvider;
