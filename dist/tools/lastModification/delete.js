"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteRegister = void 0;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fsExtra = require("fs-extra");
var _fs = require("fs");
var _names = require("../../../dist/tools/names");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class DeleteRegister {
  constructor() {
    this.messages = void 0;
    this.providers = void 0;
    this.getNames = void 0;
    this.messages = _messages.default;
    this.getNames = new _names.GetNames();
    this.providers = {
      cache: 'CacheProvider',
      crypto: 'CryptoProvider',
      hash: 'HashProvider',
      lead: 'leadProvider',
      mail: 'MailProvider',
      mailTemplate: 'MailTemplateProvider',
      notification: 'NotificationProvider',
      storage: 'StorageProvider'
    };
  }
  makeProvider(comand, names, fatherNames) {
    if (names && fatherNames) {
      const oldProviders = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', 'ascii');
      (0, _fsExtra.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, oldProviders, error => {
        if (error) throw error;
      });
      (0, _fsExtra.removeSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/${this.providers[names.lowerModuleName]}`);
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
    } else if (names) {
      const oldProviders = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', 'ascii');
      (0, _fsExtra.truncate)('src/shared/container/providers/index.ts', error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)('src/shared/container/providers/index.ts', oldProviders, error => {
        if (error) throw error;
      });
      (0, _fsExtra.removeSync)(`src/shared/container/providers/${this.providers[names.lowerModuleName]}`);
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  }
  makeModule(comand, names, fatherNames) {
    if (names && fatherNames) {
      (0, _fsExtra.removeSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`);
      (0, _fsExtra.removeSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`);
      (0, _fsExtra.removeSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`);
      (0, _fsExtra.removeSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`);
      (0, _fsExtra.removeSync)(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`);
      (0, _fsExtra.unlink)(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, error => {
        if (error) throw error;
      });
      (0, _fsExtra.unlink)(`src/modules/${fatherNames.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`, error => {
        if (error) throw error;
      });
      (0, _fsExtra.unlink)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) throw error;
      });
      (0, _fsExtra.unlink)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) throw error;
      });
      (0, _fsExtra.unlink)(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) throw error;
      });
      const moduleInjection = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', 'ascii');
      (0, _fsExtra.truncate)('src/shared/container/index.ts', error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)('src/shared/container/index.ts', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', 'ascii');
      (0, _fsExtra.truncate)(`src/routes/${fatherNames.lowerModuleName}Router.ts`, error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)(`src/routes/${fatherNames.lowerModuleName}Router.ts`, routeInjection, error => {
        if (error) throw error;
      });
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
    } else if (names) {
      (0, _fsExtra.removeSync)(`src/modules/${names.pluralLowerModuleName}`);
      (0, _fsExtra.unlink)(`src/routes/${names.lowerModuleName}Router.ts`, error => {
        if (error) throw error;
      });
      const moduleInjection = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', 'ascii');
      (0, _fsExtra.truncate)('src/shared/container/index.ts', error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)('src/shared/container/index.ts', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', 'ascii');
      (0, _fsExtra.truncate)('src/routes/index.ts', error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)('src/routes/index.ts', routeInjection, error => {
        if (error) throw error;
      });
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  }
  makeAPi(comand) {
    (0, _fsExtra.removeSync)('src');
    (0, _fsExtra.unlink)('.editorconfig', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('.env', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('.env.template', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('.eslintignore', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('.eslintrc.json', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('.gitignore', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('babel.config.js', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('docker-compose.yml', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('jest.config.ts', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('nodemon.json', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('prettier.config.js', error => {
      if (error) throw error;
    });
    (0, _fsExtra.unlink)('tsconfig.json', error => {
      if (error) throw error;
    });
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand}`, '\x1b[0m');
  }
  async execute() {
    const register = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', 'ascii');
    const comand = register.split(',')[0];
    const names = this.getNames.execute(register.split(',')[1]);
    const fatherNames = this.getNames.execute(register.split(',')[2]);
    switch (comand) {
      case 'make:provider':
        this.makeProvider(comand, names, fatherNames);
        break;
      case 'make:module':
        this.makeModule(comand, names, fatherNames);
        break;
      case 'make:api':
        this.makeAPi(comand);
        break;
      default:
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;255;0;0m', `${this.messages.noReversed}`, '\x1b[0m');
        console.log('');
        break;
    }
  }
}
exports.DeleteRegister = DeleteRegister;