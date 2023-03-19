"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteRegister = void 0;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _path = require("path");
var _fs = require("fs");
var _names = require("../../../dist/tools/names");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class DeleteRegister {
  constructor() {
    this.messages = void 0;
    this.providers = void 0;
    this.messages = _messages.default;
    this.providers = {
      cache: 'CacheProvider',
      crypto: 'CryptoProvider',
      hash: 'HashProvider',
      lead: 'leadProvider',
      mail: 'MailProvider',
      mailTemplate: 'MailTemplateProvider',
      notification: 'NotificationProvider',
      upload: 'StorageProvider'
    };
  }
  makeProvider(comand, names, fatherNames) {
    if (names && fatherNames) {
      const oldProviders = (0, _fs.readFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'providers', 'providerInjection.log'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'providers', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), oldProviders);
      (0, _fs.rmSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'providers', this.providers[names.lowerModuleName]), {
        recursive: true,
        force: true
      });
      if ((0, _fs.existsSync)((0, _path.resolve)('src', 'config', `${names.lowerModuleName}.ts`))) {
        (0, _fs.unlinkSync)((0, _path.resolve)('src', 'config', `${names.lowerModuleName}.ts`));
      }
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
    } else if (names) {
      const oldProviders = (0, _fs.readFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'providers', 'providerInjection.log'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), oldProviders);
      (0, _fs.rmSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', this.providers[names.lowerModuleName]), {
        recursive: true,
        force: true
      });
      if ((0, _fs.existsSync)((0, _path.resolve)('src', 'config', `${names.lowerModuleName}.ts`))) {
        (0, _fs.unlinkSync)((0, _path.resolve)('src', 'config', `${names.lowerModuleName}.ts`));
      }
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  }
  makeModule(comand, names, fatherNames) {
    if (names && fatherNames) {
      (0, _fs.rmSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `create${names.upperModuleName}`), {
        recursive: true,
        force: true
      });
      (0, _fs.rmSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `delete${names.upperModuleName}`), {
        recursive: true,
        force: true
      });
      (0, _fs.rmSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `list${names.upperModuleName}`), {
        recursive: true,
        force: true
      });
      (0, _fs.rmSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `show${names.upperModuleName}`), {
        recursive: true,
        force: true
      });
      (0, _fs.rmSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `update${names.upperModuleName}`), {
        recursive: true,
        force: true
      });
      (0, _fs.unlinkSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'dtos', `I${names.upperModuleName}DTO.ts`));
      (0, _fs.unlinkSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'entities', `${names.upperModuleName}.ts`));
      (0, _fs.unlinkSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'repositories', `${names.pluralUpperModuleName}Repository.ts`));
      (0, _fs.unlinkSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'repositories', `I${names.pluralUpperModuleName}Repository.ts`));
      (0, _fs.unlinkSync)((0, _path.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${names.pluralUpperModuleName}Repository.ts`));
      const moduleInjection = (0, _fs.readFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), moduleInjection);
      const routeInjection = (0, _fs.readFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`), routeInjection);
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
    } else if (names) {
      (0, _fs.rmSync)((0, _path.resolve)('src', 'modules', names.pluralLowerModuleName), {
        recursive: true,
        force: true
      });
      (0, _fs.unlinkSync)((0, _path.resolve)('src', 'routes', `${names.lowerModuleName}Router.ts`));
      const moduleInjection = (0, _fs.readFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), moduleInjection);
      const routeInjection = (0, _fs.readFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'routes', 'index.ts'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'routes', 'index.ts'), routeInjection);
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  }
  makeAPi(comand) {
    (0, _fs.rmSync)((0, _path.resolve)('src'), {
      recursive: true,
      force: true
    });
    (0, _fs.unlinkSync)((0, _path.resolve)('.editorconfig'));
    (0, _fs.unlinkSync)((0, _path.resolve)('.env'));
    (0, _fs.unlinkSync)((0, _path.resolve)('.env.template'));
    (0, _fs.unlinkSync)((0, _path.resolve)('.eslintignore'));
    (0, _fs.unlinkSync)((0, _path.resolve)('.eslintrc.json'));
    (0, _fs.unlinkSync)((0, _path.resolve)('.gitignore'));
    (0, _fs.unlinkSync)((0, _path.resolve)('babel.config.js'));
    (0, _fs.unlinkSync)((0, _path.resolve)('docker-compose.yml'));
    (0, _fs.unlinkSync)((0, _path.resolve)('jest.config.ts'));
    (0, _fs.unlinkSync)((0, _path.resolve)('nodemon.json'));
    (0, _fs.unlinkSync)((0, _path.resolve)('prettier.config.js'));
    (0, _fs.unlinkSync)((0, _path.resolve)('tsconfig.json'));
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand}`, '\x1b[0m');
  }
  async execute() {
    const register = (0, _fs.readFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'comands', 'comands.log'), 'ascii');
    const comand = register.split(',')[0];
    const names = new _names.GetNames(register.split(',')[1]).execute();
    const fatherNames = new _names.GetNames(register.split(',')[2]).execute();
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