"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegister = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class CreateRegister {
    constructor(comand, providerName, names, fatherNames) {
        this.comand = comand;
        this.providerName = providerName;
        this.names = names;
        this.fatherNames = fatherNames;
    }
    makeProvider() {
        if (this.providerName && this.fatherNames) {
            (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
            if ((0, fs_1.existsSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'))) {
                const providerInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('src', 'modules', this.fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), 'ascii');
                (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), providerInjection);
            }
            else {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), '');
            }
        }
        else if (this.providerName) {
            const providerInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), providerInjection);
        }
    }
    makeModule() {
        if (this.names && this.fatherNames) {
            const moduleInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), moduleInjection);
            (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
            if ((0, fs_1.existsSync)((0, path_1.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`))) {
                const routeInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`), 'ascii');
                (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), routeInjection);
            }
            else {
                const routeInjection = `import { Router } from 'express';

const ${this.fatherNames.lowerModuleName}Router = Router();

export default ${this.fatherNames.lowerModuleName}Router;
`;
                (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), routeInjection);
            }
        }
        else if (this.names) {
            const moduleInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), moduleInjection);
            const routeInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), routeInjection);
        }
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.comand && this.comand[0] === 'make:provider') {
                this.makeProvider();
            }
            else if (this.comand && this.comand[0] === 'make:module') {
                this.makeModule();
            }
            (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'comands', 'comands.log'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'comands', 'comands.log'), String(this.comand));
        });
    }
}
exports.CreateRegister = CreateRegister;
