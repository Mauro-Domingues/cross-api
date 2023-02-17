"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMailTemplateProvider = makeMailTemplateProvider;
var _fs = require("fs");
var _IParseMailTemplateDTO = require("../../../../dist/templates/providers/dtos/IParseMailTemplateDTO");
var _fakeMailTemplate = require("../../../../dist/templates/providers/fakes/fakeMailTemplate");
var _MailTemplate = require("../../../../dist/templates/providers/implementations/MailTemplate");
var _mailTemplateIndex = require("../../../../dist/templates/providers/mailTemplateIndex");
var _IMailTemplate = require("../../../../dist/templates/providers/models/IMailTemplate");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeMailTemplateProvider() {
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
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/dtos')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/dtos');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/fakes')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/fakes');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/implementations')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/implementations');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/models')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailTemplateProvider/models');
  }
  (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './MailTemplateProvider';`, error => {
    if (error) throw error;
  });
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', (0, _IParseMailTemplateDTO.createIMailTemplateDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', (0, _IParseMailTemplateDTO.createIMailTemplateDTO)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', (0, _fakeMailTemplate.createFakeMailTemplate)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', (0, _fakeMailTemplate.createFakeMailTemplate)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', (0, _MailTemplate.createMailTemplate)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', (0, _MailTemplate.createMailTemplate)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', (0, _IMailTemplate.createIMailTemplate)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', (0, _IMailTemplate.createIMailTemplate)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailTemplateProvider/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/index.ts', (0, _mailTemplateIndex.createMailTemplateIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailTemplateProvider/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailTemplateProvider/index.ts', (0, _mailTemplateIndex.createMailTemplateIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- MailTemplateProvider ${_messages.default.created}`, '\x1b[0m');
}