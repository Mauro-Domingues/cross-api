"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRegister = createRegister;
var _fs = require("fs");
async function createRegister(comand, providerName, names, fatherNames) {
  if (comand && comand[0] === 'make:provider') {
    if (providerName && fatherNames) {
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', error => {
        if (error) throw error;
      });
      if ((0, _fs.existsSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`)) {
        const providerInjection = (0, _fs.readFileSync)(`src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`, 'ascii');
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', providerInjection, error => {
          if (error) throw error;
        });
      } else {
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', '', error => {
          if (error) throw error;
        });
      }
    } else if (providerName) {
      const providerInjection = (0, _fs.readFileSync)('src/shared/container/providers/index.ts', 'ascii');
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', providerInjection, error => {
        if (error) throw error;
      });
    }
  } else if (comand && comand[0] === 'make:module') {
    if (names && fatherNames) {
      const moduleInjection = (0, _fs.readFileSync)('src/shared/container/index.ts', 'ascii');
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', moduleInjection, error => {
        if (error) throw error;
      });
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', error => {
        if (error) throw error;
      });
      if ((0, _fs.existsSync)(`src/routes/${fatherNames.lowerModuleName}Router.ts`)) {
        const routeInjection = (0, _fs.readFileSync)(`src/routes/${fatherNames.lowerModuleName}Router.ts`, 'ascii');
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
          if (error) throw error;
        });
      } else {
        const routeInjection = `import { Router } from 'express';

const ${fatherNames.lowerModuleName}Router = Router();

export default ${fatherNames.lowerModuleName}Router;
`;
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
          if (error) throw error;
        });
      }
    } else if (names) {
      const moduleInjection = (0, _fs.readFileSync)('src/shared/container/index.ts', 'ascii');
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/modules/moduleInjection.log', moduleInjection, error => {
        if (error) throw error;
      });
      const routeInjection = (0, _fs.readFileSync)('src/routes/index.ts', 'ascii');
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
        if (error) throw error;
      });
    }
  }
  (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', error => {
    if (error) throw error;
  });
  (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', String(comand), error => {
    if (error) throw error;
  });
}