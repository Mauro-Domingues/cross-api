"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentMailTemplateProvider = void 0;
var _fs = require("fs");
var _container = require("../../../../dist/templates/index/container");
var _IParseMailTemplateDTO = require("../../../../dist/templates/providers/dtos/IParseMailTemplateDTO");
var _fakeMailTemplate = require("../../../../dist/templates/providers/fakes/fakeMailTemplate");
var _MailTemplate = require("../../../../dist/templates/providers/implementations/MailTemplate");
var _mailTemplateIndex = require("../../../../dist/templates/providers/mailTemplateIndex");
var _IMailTemplate = require("../../../../dist/templates/providers/models/IMailTemplate");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentMailTemplateProvider {
  constructor(fatherNames) {
    this.fatherNames = void 0;
    this.messages = void 0;
    this.createIMailTemplate = void 0;
    this.createIMailTemplateDTO = void 0;
    this.createMailTemplate = void 0;
    this.createFakeMailTemplate = void 0;
    this.createMailTemplateIndex = void 0;
    this.createContainer = void 0;
    this.fatherNames = fatherNames;
    this.messages = _messages.default;
    this.createIMailTemplate = new _IMailTemplate.CreateIMailTemplate();
    this.createIMailTemplateDTO = new _IParseMailTemplateDTO.CreateIMailTemplateDTO();
    this.createMailTemplate = new _MailTemplate.CreateMailTemplate();
    this.createFakeMailTemplate = new _fakeMailTemplate.CreateFakeMailTemplate();
    this.createMailTemplateIndex = new _mailTemplateIndex.CreateMailTemplateIndex();
    this.createContainer = new _container.CreateContainer();
  }
  async execute() {
    if (!this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
      throw new Error();
    }
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/config')) {
      (0, _fs.mkdirSync)('src/config');
    }
    if (!(0, _fs.existsSync)('src/modules')) {
      (0, _fs.mkdirSync)('src/modules');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/shared/container/index.ts')) {
      (0, _fs.appendFileSync)('src/shared/container/index.ts', this.createContainer.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`, '');
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`);
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`)) {
      (0, _fs.mkdirSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`);
    }
    (0, _fs.appendFileSync)(`src/shared/container/index.ts`, `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
    (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`, `\nimport './MailTemplateProvider';`);
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`, this.createIMailTemplateDTO.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`, this.createIMailTemplateDTO.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`, this.createFakeMailTemplate.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`, this.createFakeMailTemplate.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`, this.createMailTemplate.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`, this.createMailTemplate.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`, this.createIMailTemplate.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`, this.createIMailTemplate.execute());
    }
    if (!(0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`)) {
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`, this.createMailTemplateIndex.execute());
    } else {
      (0, _fs.truncateSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`);
      (0, _fs.appendFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`, this.createMailTemplateIndex.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- MailTemplateProvider ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeDependentMailTemplateProvider = MakeDependentMailTemplateProvider;