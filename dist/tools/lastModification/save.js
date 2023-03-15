"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRegister = void 0;
var _fs = require("fs");
class CreateRegister {
  constructor(comand, providerName, names, fatherNames) {
    this.comand = void 0;
    this.providerName = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.comand = comand;
    this.providerName = providerName;
    this.names = names;
    this.fatherNames = fatherNames;
  }
  makeProvider() {
    if (this.providerName && this.fatherNames) {
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', error => {
        if (error) throw error;
      });
      if ((0, _fs.existsSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`)) {
        const providerInjection = (0, _fs.readFileSync)(`src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`, 'ascii');
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', providerInjection, error => {
          if (error) throw error;
        });
      } else {
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', '', error => {
          if (error) throw error;
        });
      }
    } else if (this.providerName) {
      const providerInjection = (0, _fs.readFileSync)('src/shared/container/providers/index.ts', 'ascii');
      (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', error => {
        if (error) throw error;
      });
      (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/providers/providerInjection.log', providerInjection, error => {
        if (error) throw error;
      });
    }
  }
  makeModule() {
    if (this.names && this.fatherNames) {
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
      if ((0, _fs.existsSync)(`src/routes/${this.fatherNames.lowerModuleName}Router.ts`)) {
        const routeInjection = (0, _fs.readFileSync)(`src/routes/${this.fatherNames.lowerModuleName}Router.ts`, 'ascii');
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
          if (error) throw error;
        });
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export default ${this.fatherNames.lowerModuleName}Router;
`;
        (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/modules/routeInjection.log', routeInjection, error => {
          if (error) throw error;
        });
      }
    } else if (this.names) {
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
  async execute() {
    if (this.comand) {
      switch (this.comand[0]) {
        case 'make:provider':
          this.makeProvider();
          break;
        case 'make:module':
          this.makeModule();
          break;
        default:
          (0, _fs.truncate)('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', error => {
            if (error) throw error;
          });
          (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/lastModification/comands/comands.log', String(this.comand), error => {
            if (error) throw error;
          });
      }
    }
  }
}
exports.CreateRegister = CreateRegister;