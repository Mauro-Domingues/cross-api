"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRegister = void 0;
var _fs = require("fs");
var _path = require("path");
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
      (0, _fs.truncateSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
      if ((0, _fs.existsSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
        const providerInjection = (0, _fs.readFileSync)((0, _path.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), 'ascii');
        (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), providerInjection);
      } else {
        (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), '');
      }
    } else if (this.providerName) {
      const providerInjection = (0, _fs.readFileSync)((0, _path.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
      (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), providerInjection);
    }
  }
  makeModule() {
    if (this.names && this.fatherNames) {
      const moduleInjection = (0, _fs.readFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'));
      (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), moduleInjection);
      (0, _fs.truncateSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
      if ((0, _fs.existsSync)((0, _path.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`))) {
        const routeInjection = (0, _fs.readFileSync)((0, _path.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`), 'ascii');
        (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), routeInjection);
      } else {
        const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export { ${this.fatherNames.lowerModuleName}Router };
`;
        (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), routeInjection);
      }
    } else if (this.names) {
      const moduleInjection = (0, _fs.readFileSync)((0, _path.resolve)('src', 'shared', 'container', 'index.ts'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'));
      (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), moduleInjection);
      const routeInjection = (0, _fs.readFileSync)((0, _path.resolve)('src', 'routes', 'index.ts'), 'ascii');
      (0, _fs.truncateSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
      (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), routeInjection);
    }
  }
  async execute() {
    if (this.comand && this.comand[0] === 'make:provider') {
      this.makeProvider();
    } else if (this.comand && this.comand[0] === 'make:module') {
      this.makeModule();
    }
    (0, _fs.truncateSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'comands', 'comands.log'));
    (0, _fs.appendFileSync)((0, _path.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'comands', 'comands.log'), String(this.comand));
  }
}
exports.CreateRegister = CreateRegister;