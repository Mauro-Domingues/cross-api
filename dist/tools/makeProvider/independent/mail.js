"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeMailProvider = makeMailProvider;
var _fs = require("fs");
var _mailConfig = require("../../../../dist/templates/providers/config/mailConfig");
var _IMailDTO = require("../../../../dist/templates/providers/dtos/IMailDTO");
var _IParseMailTemplateDTO = require("../../../../dist/templates/providers/dtos/IParseMailTemplateDTO");
var _fakeMail = require("../../../../dist/templates/providers/fakes/fakeMail");
var _fakeMailTemplate = require("../../../../dist/templates/providers/fakes/fakeMailTemplate");
var _EtherealMail = require("../../../../dist/templates/providers/implementations/EtherealMail");
var _MailTemplate = require("../../../../dist/templates/providers/implementations/MailTemplate");
var _SESMail = require("../../../../dist/templates/providers/implementations/SESMail");
var _mailIndex = require("../../../../dist/templates/providers/mailIndex");
var _mailTemplateIndex = require("../../../../dist/templates/providers/mailTemplateIndex");
var _IMail = require("../../../../dist/templates/providers/models/IMail");
var _IMailTemplate = require("../../../../dist/templates/providers/models/IMailTemplate");
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeMailProvider() {
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
  if (!(0, _fs.existsSync)('src/config/mail.ts')) {
    (0, _fs.appendFile)('src/config/mail.ts', (0, _mailConfig.createMailConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/config/mail.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/config/mail.ts', (0, _mailConfig.createMailConfig)(), error => {
      if (error) throw error;
    });
  }
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
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/dtos')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/dtos');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/fakes')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/fakes');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/implementations')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/implementations');
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/models')) {
    (0, _fs.mkdirSync)('src/shared/container/providers/MailProvider/models');
  }
  (0, _fs.appendFile)('src/shared/container/providers/index.ts', `\nimport './MailProvider';`, error => {
    if (error) throw error;
  });
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', (0, _IMailDTO.createIMailDTO)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', (0, _IMailDTO.createIMailDTO)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', (0, _fakeMail.createFakeMail)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', (0, _fakeMail.createFakeMail)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', (0, _EtherealMail.createEtherealMail)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', (0, _EtherealMail.createEtherealMail)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', (0, _SESMail.createSESMail)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', (0, _SESMail.createSESMail)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/models/IMailProvider.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/models/IMailProvider.ts', (0, _IMail.createIMail)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailProvider/models/IMailProvider.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/models/IMailProvider.ts', (0, _IMail.createIMail)(), error => {
      if (error) throw error;
    });
  }
  if (!(0, _fs.existsSync)('src/shared/container/providers/MailProvider/index.ts')) {
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/index.ts', (0, _mailIndex.createMailIndex)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('src/shared/container/providers/MailProvider/index.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('src/shared/container/providers/MailProvider/index.ts', (0, _mailIndex.createMailIndex)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- MailProvider ${_messages.default.created}`, '\x1b[0m');
}