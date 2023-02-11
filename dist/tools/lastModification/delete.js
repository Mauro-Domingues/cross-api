"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = deleteRegister;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _fs = _interopRequireDefault(require("fs"));
var _pluralize = require("pluralize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
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
  const register = _fs.default.readFileSync('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', 'ascii');
  const comand = register.split(',')[0];
  const names = new GetNames().getModuleNames(register.split(',')[1]);
  const fatherNames = new GetNames().getModuleNames(register.split(',')[2]);
  if (comand && comand === 'make:provider') {
    if (names && fatherNames) {
      const oldProviders = _fs.default.readFileSync('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', 'ascii');
      _fs.default.truncate(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, error => {
        if (error) throw error;
      });
      _fs.default.appendFile(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, oldProviders, error => {
        if (error) throw error;
      });
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
    } else if (names) {
      const oldProviders = _fs.default.readFileSync('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', 'ascii');
      _fs.default.truncate('src/shared/container/providers/index.ts', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('src/shared/container/providers/index.ts', oldProviders, error => {
        if (error) throw error;
      });
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  } else if (comand && comand === 'make:module') {
    if (names && fatherNames) {
      _fsExtra.default.removeSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}`);
      _fsExtra.default.removeSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}`);
      _fsExtra.default.removeSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}`);
      _fsExtra.default.removeSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}`);
      _fsExtra.default.removeSync(`src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}`);
      _fs.default.unlink(`src/modules/${fatherNames.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`, error => {
        if (error) throw error;
      });
      _fs.default.unlink(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) throw error;
      });
      _fs.default.unlink(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`, error => {
        if (error) throw error;
      });
      _fs.default.unlink(`src/modules/${fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${names.upperModuleName}Repository.ts`, error => {
        if (error) throw error;
      });
      const moduleInjection = _fs.default.readFileSync('src/shared/container/index.ts', 'ascii');
      _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = _fs.default.readFileSync('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', 'ascii');
      _fs.default.truncate(`src/routes/${fatherNames.lowerModuleName}Routes.ts`, error => {
        if (error) throw error;
      });
      _fs.default.appendFile(`src/routes/${fatherNames.lowerModuleName}Routes.ts`, routeInjection, error => {
        if (error) throw error;
      });
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
    } else if (names) {
      _fsExtra.default.removeSync(`src/modules/${names.pluralLowerModuleName}`);
      _fs.default.unlink(`src/routes/${names.lowerModuleName}Router.ts`, error => {
        if (error) throw error;
      });
      const moduleInjection = _fs.default.readFileSync('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', 'ascii');
      _fs.default.truncate('src/shared/container/index.ts', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('src/shared/container/index.ts', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = _fs.default.readFileSync('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', 'ascii');
      _fs.default.truncate('src/routes/index.ts', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('src/routes/index.ts', routeInjection, error => {
        if (error) throw error;
      });
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
    }
  } else if (comand && comand === 'make:api') {
    _fsExtra.default.removeSync('src');
    _fs.default.unlink('.editorconfig', error => {
      if (error) throw error;
    });
    _fs.default.unlink('.env', error => {
      if (error) throw error;
    });
    _fs.default.unlink('.env.template', error => {
      if (error) throw error;
    });
    _fs.default.unlink('.eslintignore', error => {
      if (error) throw error;
    });
    _fs.default.unlink('.eslintrc.json', error => {
      if (error) throw error;
    });
    _fs.default.unlink('.gitignore', error => {
      if (error) throw error;
    });
    _fs.default.unlink('babel.config.js', error => {
      if (error) throw error;
    });
    _fs.default.unlink('docker-compose.yml', error => {
      if (error) throw error;
    });
    _fs.default.unlink('jest.config.ts', error => {
      if (error) throw error;
    });
    _fs.default.unlink('nodemon.json', error => {
      if (error) throw error;
    });
    _fs.default.unlink('prettier.config.js', error => {
      if (error) throw error;
    });
    _fs.default.unlink('tsconfig.json', error => {
      if (error) throw error;
    });
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${_messages.default.reversed}: ${comand}`, '\x1b[0m');
  } else {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `${_messages.default.noReversed}`, '\x1b[0m');
  }
}