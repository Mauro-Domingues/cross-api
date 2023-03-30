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
exports.DeleteRegister = void 0;
const messages_1 = require("../messages");
const path_1 = require("path");
const fs_1 = require("fs");
const names_1 = require("../names");
class DeleteRegister {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.providers = {
            cache: 'CacheProvider',
            crypto: 'CryptoProvider',
            hash: 'HashProvider',
            lead: 'leadProvider',
            mail: 'MailProvider',
            mailTemplate: 'MailTemplateProvider',
            notification: 'NotificationProvider',
            upload: 'StorageProvider',
        };
    }
    makeProvider(comand, names, fatherNames) {
        if (names && fatherNames) {
            const oldProviders = (0, fs_1.readFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'providers', 'providerInjection.log'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'providers', 'index.ts'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'providers', 'index.ts'), oldProviders);
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'providers', this.providers[names.lowerModuleName]), { recursive: true, force: true });
            if ((0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', `${names.lowerModuleName}.ts`))) {
                (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'config', `${names.lowerModuleName}.ts`));
            }
            console.log('');
            console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
        }
        else if (names) {
            const oldProviders = (0, fs_1.readFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'providers', 'providerInjection.log'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'index.ts'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', 'index.ts'), oldProviders);
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'shared', 'container', 'providers', this.providers[names.lowerModuleName]), { recursive: true, force: true });
            if ((0, fs_1.existsSync)((0, path_1.resolve)('src', 'config', `${names.lowerModuleName}.ts`))) {
                (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'config', `${names.lowerModuleName}.ts`));
            }
            console.log('');
            console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
        }
    }
    makeModule(comand, names, fatherNames) {
        if (names && fatherNames) {
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `create${names.upperModuleName}`), { recursive: true, force: true });
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `delete${names.upperModuleName}`), { recursive: true, force: true });
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `list${names.upperModuleName}`), { recursive: true, force: true });
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `show${names.upperModuleName}`), { recursive: true, force: true });
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'services', `update${names.upperModuleName}`), { recursive: true, force: true });
            (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'dtos', `I${names.upperModuleName}DTO.ts`));
            (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'entities', `${names.upperModuleName}.ts`));
            (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'repositories', `${names.pluralUpperModuleName}Repository.ts`));
            (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'repositories', `I${names.pluralUpperModuleName}Repository.ts`));
            (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'modules', fatherNames.pluralLowerModuleName, 'repositories', 'fakes', `Fake${names.pluralUpperModuleName}Repository.ts`));
            const moduleInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), moduleInjection);
            const routeInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', `${fatherNames.lowerModuleName}Router.ts`), routeInjection);
            console.log('');
            console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName} ${fatherNames.lowerModuleName}`, '\x1b[0m');
        }
        else if (names) {
            (0, fs_1.rmSync)((0, path_1.resolve)('src', 'modules', names.pluralLowerModuleName), {
                recursive: true,
                force: true,
            });
            (0, fs_1.unlinkSync)((0, path_1.resolve)('src', 'routes', `${names.lowerModuleName}Router.ts`));
            const moduleInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'moduleInjection.log'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'shared', 'container', 'index.ts'), moduleInjection);
            const routeInjection = (0, fs_1.readFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'modules', 'routeInjection.log'), 'ascii');
            (0, fs_1.truncateSync)((0, path_1.resolve)('src', 'routes', 'index.ts'));
            (0, fs_1.appendFileSync)((0, path_1.resolve)('src', 'routes', 'index.ts'), routeInjection);
            console.log('');
            console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand} ${names.lowerModuleName}`, '\x1b[0m');
        }
    }
    makeAPi(comand) {
        (0, fs_1.rmSync)((0, path_1.resolve)('src'), { recursive: true, force: true });
        (0, fs_1.unlinkSync)((0, path_1.resolve)('.editorconfig'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('.env'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('.env.template'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('.eslintignore'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('.eslintrc.json'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('.gitignore'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('babel.config.js'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('docker-compose.yml'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('jest.config.ts'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('nodemon.json'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('prettier.config.js'));
        (0, fs_1.unlinkSync)((0, path_1.resolve)('tsconfig.json'));
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `- ${this.messages.reversed}: ${comand}`, '\x1b[0m');
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const register = (0, fs_1.readFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'lastModification', 'comands', 'comands.log'), 'ascii');
            const comand = register.split(',')[0];
            const names = new names_1.GetNames(register.split(',')[1]).execute();
            const fatherNames = new names_1.GetNames(register.split(',')[2]).execute();
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
        });
    }
}
exports.DeleteRegister = DeleteRegister;
