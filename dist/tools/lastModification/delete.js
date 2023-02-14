"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRegister = deleteRegister;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fsExtra = require("fs-extra");
var _fs = require("fs");
var _pluralize = require("pluralize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const providers = {
  cache: 'CacheProvider',
  crypto: 'CryptoProvider',
  hash: 'HashProvider',
  lead: 'leadProvider',
  mail: 'MailProvider',
  mailTemplate: 'MailTemplateProvider',
  notification: 'NotificationProvider',
  storage: 'StorageProvider'
};
class GetNames {
  getSingularAndPlural(word) {
    if ((0, _pluralize.isSingular)(word)) {
      return {
        singular: word,
        pluralName: (0, _pluralize.plural)(word)
      };
    }
    return {
      singular: (0, _pluralize.singular)(word),
      pluralName: word
    };
  }
  getModuleNames(name) {
    if (!name) {
      return undefined;
    }
    const {
      singular,
      pluralName
    } = this.getSingularAndPlural(name);
    const lowerModuleName = singular.replace(singular.charAt(0), singular.charAt(0).toLowerCase());
    const upperModuleName = singular.replace(singular.charAt(0), singular.charAt(0).toUpperCase());
    const pluralLowerModuleName = pluralName.replace(pluralName.charAt(0), pluralName.charAt(0).toLowerCase());
    const pluralUpperModuleName = pluralName.replace(pluralName.charAt(0), pluralName.charAt(0).toUpperCase());
    return {
      lowerModuleName,
      upperModuleName,
      pluralLowerModuleName,
      pluralUpperModuleName
    };
  }
}
async function deleteRegister() {
  const register = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', 'ascii');
  const comand = register.split(',')[0];
  const names = new GetNames().getModuleNames(register.split(',')[1]);
  const fatherNames = new GetNames().getModuleNames(register.split(',')[2]);
  if (comand && comand === 'make:provider') {
    if (names && fatherNames) {
      const oldProviders = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', 'ascii');
      (0, _fsExtra.truncate)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, oldProviders, error => {
        if (error) throw error;
      });
      (0, _fsExtra.removeSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/${providers[names.lowerModuleName]}`);
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
    } else if (names) {
      const oldProviders = (0, _fs.readFileSync)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', 'ascii');
      (0, _fsExtra.truncate)('src/shared/container/providers/index.ts', error => {
        if (error) throw error;
      });
      (0, _fsExtra.appendFile)('src/shared/container/providers/index.ts', oldProviders, error => {
        if (error) throw error;
      });
      (0, _fsExtra.removeSync)(`src/shared/container/providers/${providers[names.lowerModuleName]}`);
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  } else if (comand && comand === 'make:module') {
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
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
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
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  } else if (comand && comand === 'make:api') {
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
    console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand}`, '\x1b[0m');
  } else {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;0;0m', `${_messages.default.noReversed}`, '\x1b[0m');
    console.log('');
  }
}