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
exports.MakeFirstLayer = void 0;
const babelConfig_1 = require("@templates/root/babelConfig");
const dockerCompose_1 = require("@templates/root/dockerCompose");
const editorConfig_1 = require("@templates/root/editorConfig");
const env_1 = require("@templates/root/env");
const esLintIgnore_1 = require("@templates/root/esLintIgnore");
const esLintrcJson_1 = require("@templates/root/esLintrcJson");
const gitIgnore_1 = require("@templates/root/gitIgnore");
const jestConfig_1 = require("@templates/root/jestConfig");
const nodemonJson_1 = require("@templates/root/nodemonJson");
const prettierConfig_1 = require("@templates/root/prettierConfig");
const tsConfig_1 = require("@templates/root/tsConfig");
const messages_1 = require("@tools/messages");
const fs_1 = require("fs");
const path_1 = require("path");
class MakeFirstLayer {
    constructor() {
        this.messages = new messages_1.Messages().execute();
        this.createTsConfig = new tsConfig_1.CreateTsConfig();
        this.createPrettierConfig = new prettierConfig_1.CreatePrettierConfig();
        this.createNodemonJson = new nodemonJson_1.CreateNodemonJson();
        this.createJestConfig = new jestConfig_1.CreateJestConfig();
        this.createGitIgnore = new gitIgnore_1.CreateGitIgnore();
        this.createEsLintrcJson = new esLintrcJson_1.CreateEsLintrcJson();
        this.createEsLintIgnore = new esLintIgnore_1.CreateEsLintIgnore();
        this.createEnv = new env_1.CreateEnv();
        this.createEditorConfig = new editorConfig_1.CreateEditorConfig();
        this.createDockerCompose = new dockerCompose_1.CreateDockerCompose();
        this.createBabelConfig = new babelConfig_1.CreateBabelConfig();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('.editorconfig'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.editorconfig'), this.createEditorConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('.editorconfig'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.editorconfig'), this.createEditorConfig.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- .editorconfig ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('.env'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.env'), this.createEnv.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('.env'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.env'), this.createEnv.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- .env ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('.env.template'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.env.template'), this.createEnv.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('.env.template'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.env.template'), this.createEnv.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- .env.template ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('.eslintignore'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.eslintignore'), this.createEsLintIgnore.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('.eslintignore'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.eslintignore'), this.createEsLintIgnore.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- .eslintignore ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('.eslintrc.json'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.eslintrc.json'), this.createEsLintrcJson.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('.eslintrc.json'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.eslintrc.json'), this.createEsLintrcJson.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- .eslintrc.json ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('.gitignore'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.gitignore'), this.createGitIgnore.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('.gitignore'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('.gitignore'), this.createGitIgnore.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- .gitignore ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('babel.config.js'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('babel.config.js'), this.createBabelConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('babel.config.js'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('babel.config.js'), this.createBabelConfig.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- babel.config.js ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('docker-compose.yml'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('docker-compose.yml'), this.createDockerCompose.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('docker-compose.yml'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('docker-compose.yml'), this.createDockerCompose.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- docker-compose.yml ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('jest.config.ts'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('jest.config.ts'), this.createJestConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('jest.config.ts'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('jest.config.ts'), this.createJestConfig.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- jest.config.ts ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('nodemon.json'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('nodemon.json'), this.createNodemonJson.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('nodemon.json'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('nodemon.json'), this.createNodemonJson.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- nodemon.json ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('prettier.config.js'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('prettier.config.js'), this.createPrettierConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('prettier.config.js'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('prettier.config.js'), this.createPrettierConfig.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- prettier.config.js ${this.messages.created}`, '\x1b[0m');
            if (!(0, fs_1.existsSync)((0, path_1.resolve)('tsconfig.json'))) {
                (0, fs_1.appendFileSync)((0, path_1.resolve)('tsconfig.json'), this.createTsConfig.execute());
            }
            else {
                (0, fs_1.truncateSync)((0, path_1.resolve)('tsconfig.json'));
                (0, fs_1.appendFileSync)((0, path_1.resolve)('tsconfig.json'), this.createTsConfig.execute());
            }
            console.log('\x1b[38;2;255;255;0m', `- tsconfig.json ${this.messages.created}`, '\x1b[0m');
        });
    }
}
exports.MakeFirstLayer = MakeFirstLayer;
