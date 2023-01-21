"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentMailTemplateProvider;
var _fs = _interopRequireDefault(require("fs"));
var _container = _interopRequireDefault(require("../../../../dist/templates/index/container"));
var _IParseMailTemplateDTO = _interopRequireDefault(require("../../../../dist/templates/providers/dtos/IParseMailTemplateDTO"));
var _fakeMailTemplate = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeMailTemplate"));
var _MailTemplate = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/MailTemplate"));
var _mailTemplateIndex = _interopRequireDefault(require("../../../../dist/templates/providers/mailTemplateIndex"));
var _IMailTemplate = _interopRequireDefault(require("../../../../dist/templates/providers/models/IMailTemplate"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentMailTemplateProvider(fatherData) {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/modules')) {
    _fs.default.mkdirSync('src/modules');
  }
  if (!_fs.default.existsSync('src/shared')) {
    _fs.default.mkdirSync('src/shared');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/index.ts')) {
    _fs.default.appendFile('src/shared/container/index.ts', (0, _container.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, '', error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`);
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`)) {
    _fs.default.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`);
  }
  _fs.default.appendFile(`src/shared/container/index.ts`, `import '@modules/${fatherData.pluralLowerModuleName}/providers';`, error => {
    if (error) throw error;
  });
  _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`, `\nimport './MailTemplateProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`, (0, _IParseMailTemplateDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`, (0, _IParseMailTemplateDTO.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`, (0, _fakeMailTemplate.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`, (0, _fakeMailTemplate.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`, (0, _MailTemplate.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`, (0, _MailTemplate.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`, (0, _IMailTemplate.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`, (0, _IMailTemplate.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`)) {
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`, (0, _mailTemplateIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`, error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile(`src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`, (0, _mailTemplateIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- MailTemplateProvider ${_messages.default.created}`, '\x1b[0m');
}