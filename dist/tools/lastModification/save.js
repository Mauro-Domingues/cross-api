"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createRegister;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function createRegister(comand, providerName, names, fatherNames) {
  if (comand && comand[0] === 'make:provider') {
    if (providerName && fatherNames) {
      const providerInjection = _fs.default.readFileSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, 'ascii');
      _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', providerInjection, error => {
        if (error) throw error;
      });
    } else if (providerName) {
      const providerInjection = _fs.default.readFileSync('src/shared/container/providers/index.ts', 'ascii');
      _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', providerInjection, error => {
        if (error) throw error;
      });
    }
  } else if (comand && comand[0] === 'make:module') {
    if (names && fatherNames) {
      const moduleInjection = _fs.default.readFileSync('src/shared/container/index.ts', 'ascii');
      _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', moduleInjection, error => {
        if (error) throw error;
      });
      _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', error => {
        if (error) throw error;
      });
      if (_fs.default.existsSync(`src/routes/${fatherNames.lowerModuleName}Router.ts`)) {
        const routeInjection = _fs.default.readFileSync(`src/routes/${fatherNames.lowerModuleName}Router.ts`, 'ascii');
        _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
          if (error) throw error;
        });
      } else {
        const routeInjection = `import { Router } from 'express';

const ${fatherNames.lowerModuleName}Router = Router();

export default ${fatherNames.lowerModuleName}Router;
`;
        _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
          if (error) throw error;
        });
      }
    } else if (names) {
      const moduleInjection = _fs.default.readFileSync('src/shared/container/index.ts', 'ascii');
      _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = _fs.default.readFileSync('src/routes/index.ts', 'ascii');
      _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', error => {
        if (error) throw error;
      });
      _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
        if (error) throw error;
      });
    }
  }
  _fs.default.truncate('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', error => {
    if (error) throw error;
  });
  _fs.default.appendFile('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', String(comand), error => {
    if (error) throw error;
  });
}