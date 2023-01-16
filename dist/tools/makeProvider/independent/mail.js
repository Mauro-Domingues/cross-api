"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeMailProvider;
var _fs = _interopRequireDefault(require("fs"));
var _mailConfig = _interopRequireDefault(require("../../../../dist/templates/providers/config/mailConfig"));
var _IMailDTO = _interopRequireDefault(require("../../../../dist/templates/providers/dtos/IMailDTO"));
var _IParseMailTemplateDTO = _interopRequireDefault(require("../../../../dist/templates/providers/dtos/IParseMailTemplateDTO"));
var _fakeMail = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeMail"));
var _fakeMailTemplate = _interopRequireDefault(require("../../../../dist/templates/providers/fakes/fakeMailTemplate"));
var _EtherealMail = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/EtherealMail"));
var _MailTemplate = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/MailTemplate"));
var _SESMail = _interopRequireDefault(require("../../../../dist/templates/providers/implementations/SESMail"));
var _mailIndex = _interopRequireDefault(require("../../../../dist/templates/providers/mailIndex"));
var _mailTemplateIndex = _interopRequireDefault(require("../../../../dist/templates/providers/mailTemplateIndex"));
var _IMail = _interopRequireDefault(require("../../../../dist/templates/providers/models/IMail"));
var _IMailTemplate = _interopRequireDefault(require("../../../../dist/templates/providers/models/IMailTemplate"));
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeMailProvider() {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/shared')) {
    _fs.default.mkdirSync('src/shared');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/container/providers')) {
    _fs.default.mkdirSync('src/shared/container/providers');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailTemplateProvider');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/dtos')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailTemplateProvider/dtos');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/fakes')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailTemplateProvider/fakes');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/implementations')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailTemplateProvider/implementations');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/models')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailTemplateProvider/models');
  }
  _fs.default.appendFile('src/shared/container/providers/index.ts', `\nimport './MailTemplateProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/config/mail.ts')) {
    _fs.default.appendFile('src/config/mail.ts', (0, _mailConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/mail.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/mail.ts', (0, _mailConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', (0, _IParseMailTemplateDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts', (0, _IParseMailTemplateDTO.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', (0, _fakeMailTemplate.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts', (0, _fakeMailTemplate.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', (0, _MailTemplate.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts', (0, _MailTemplate.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', (0, _IMailTemplate.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts', (0, _IMailTemplate.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailTemplateProvider/index.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/index.ts', (0, _mailTemplateIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailTemplateProvider/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailTemplateProvider/index.ts', (0, _mailTemplateIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- MailTemplateProvider ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailProvider');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/dtos')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailProvider/dtos');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/fakes')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailProvider/fakes');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/implementations')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailProvider/implementations');
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/models')) {
    _fs.default.mkdirSync('src/shared/container/providers/MailProvider/models');
  }
  _fs.default.appendFile('src/shared/container/providers/index.ts', `\nimport './MailProvider';`, error => {
    if (error) throw error;
  });
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', (0, _IMailDTO.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts', (0, _IMailDTO.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', (0, _fakeMail.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts', (0, _fakeMail.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', (0, _EtherealMail.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts', (0, _EtherealMail.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', (0, _SESMail.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts', (0, _SESMail.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/models/IMailProvider.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailProvider/models/IMailProvider.ts', (0, _IMail.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailProvider/models/IMailProvider.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailProvider/models/IMailProvider.ts', (0, _IMail.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/shared/container/providers/MailProvider/index.ts')) {
    _fs.default.appendFile('src/shared/container/providers/MailProvider/index.ts', (0, _mailIndex.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/shared/container/providers/MailProvider/index.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/shared/container/providers/MailProvider/index.ts', (0, _mailIndex.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- MailProvider ${_messages.default.created}`, '\x1b[0m');
}