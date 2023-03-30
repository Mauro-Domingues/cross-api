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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigJson = void 0;
const fs_1 = require("fs");
const config_1 = require("../templates/assets/config");
const readline_1 = require("readline");
const path_1 = require("path");
const shell_1 = require("./shell");
const languageConfig_1 = require("./languageConfig");
const package_json_1 = __importDefault(require("../../../../package.json"));
class ConfigJson {
    constructor() {
        this.configLanguage = new languageConfig_1.ConfigLanguage();
        this.shell = new shell_1.Shell();
        this.config = new config_1.Config();
        this.userJson = package_json_1.default;
        this.dependencies = [
            'aws-sdk',
            'axios',
            'bcrypt',
            'celebrate',
            'class-transformer',
            'cors',
            'dotenv',
            'express',
            'express-jwt',
            'express-async-errors',
            'handlebars',
            'ioredis',
            'jsonwebtoken',
            'jwks-rsa',
            'mime',
            'multer',
            'mysql',
            'nodemailer',
            'pem-jwk',
            'rate-limiter-flexible',
            'redis@^3.0.2',
            'reflect-metadata',
            'supertest',
            'swagger-ui-express',
            'ts-jest',
            'tsyringe',
            'typeorm@^0.3.11',
            'uuid',
        ];
        this.devDependencies = [
            '@babel/cli',
            '@babel/core',
            '@babel/node',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-decorators',
            '@babel/preset-env',
            '@babel/preset-typescript',
            '@types/bcrypt',
            '@types/cors',
            '@types/express',
            '@types/express-jwt',
            '@types/jest',
            '@types/jsonwebtoken',
            '@types/mime',
            '@types/multer',
            '@types/nodemailer',
            '@types/pem-jwk',
            '@types/redis@^2.8.27',
            '@types/supertest',
            '@types/swagger-ui-express',
            '@types/uuid',
            '@typescript-eslint/eslint-plugin',
            '@typescript-eslint/parser',
            'babel-plugin-module-resolver',
            'babel-plugin-transform-typescript-metadata',
            'eslint',
            'eslint-config-airbnb-base',
            'eslint-config-prettier',
            'eslint-import-resolver-typescript',
            'eslint-plugin-import',
            'eslint-plugin-import-helpers',
            'eslint-plugin-prettier',
            'jest',
            'prettier',
            'ts-node-dev',
            'tsconfig-paths',
            'typescript',
        ];
    }
    patchPackage() {
        this.userJson.scripts = Object.assign(Object.assign({}, this.userJson.scripts), { dev: 'ts-node-dev -r tsconfig-paths/register --inspect --transpile-only src/shared/server.ts', test: 'set NODE_ENV=test&&jest --runInBand', build: 'babel src --extensions ".js,.ts" --out-dir dist --copy-files', start: 'node dist/shared/server.js' });
        (0, fs_1.writeFileSync)((0, path_1.resolve)('package.json'), JSON.stringify(this.userJson), {
            encoding: 'utf8',
            flag: 'w',
        });
    }
    installYarn() {
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.yarn}`, '\x1b[0m');
        console.log('');
        this.shell.execute('npm install yarn --location=global');
        console.log('\x1b[38;2;255;255;0m', `- yarn ${this.configLanguage.messages.installed}`, '\x1b[0m');
        console.log('');
    }
    installDependencies() {
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.dependencies}`, '\x1b[0m');
        console.log('');
        const dependenciesToInstall = this.dependencies.reduce((acc, dependency) => {
            return `${acc} ${dependency}`;
        });
        this.shell.execute(`yarn add ${dependenciesToInstall}`);
        this.dependencies.forEach(dependency => {
            console.log('\x1b[38;2;255;255;0m', `- ${dependency} ${this.configLanguage.messages.installed}`, '\x1b[0m');
        });
        console.log('');
    }
    installDevDependencies() {
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.devDependencies}`, '\x1b[0m');
        console.log('');
        const devDependenciesToInstall = this.devDependencies.reduce((acc, devDependency) => {
            return `${acc} ${devDependency}`;
        });
        this.shell.execute(`yarn add ${devDependenciesToInstall} -D`);
        this.devDependencies.forEach(devDependency => {
            console.log('\x1b[38;2;255;255;0m', `- ${devDependency} ${this.configLanguage.messages.installed}`, '\x1b[0m');
        });
        console.log('');
    }
    renderEnding() {
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.marketplaceTool[0]}`, '\x1b[38;2;255;0;255m', 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.marketplaceTool[1]}`, '\x1b[0m');
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.try[0]}`, '\x1b[38;2;255;255;0m', `${this.configLanguage.messages.try[1]}`, '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.try[2]}`, '\x1b[0m');
        console.log('');
    }
    setConfig() {
        this.patchPackage();
        this.installYarn();
        this.installDependencies();
        this.installDevDependencies();
        this.renderEnding();
        if ((0, fs_1.existsSync)((0, path_1.resolve)('package-lock.json'))) {
            (0, fs_1.unlinkSync)((0, path_1.resolve)('package-lock.json'));
        }
        this.config.execute();
    }
    showLanguageOptions() {
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `${this.configLanguage.messages.language}`, '\x1b[0m');
        console.log('\x1b[1m');
        console.table(Object.keys(this.configLanguage.Language));
        console.log('');
        const rl = (0, readline_1.createInterface)({
            input: process.stdin,
            output: process.stdout,
        });
        rl.question(this.configLanguage.messages.answer, optionChosen => {
            const choice = Object.keys(this.configLanguage.Language)[Number(optionChosen)];
            if (this.configLanguage.isLanguageOptionsKeyType(choice) &&
                Object.keys(this.configLanguage.Language)[Number(optionChosen)]) {
                this.configLanguage.languageConfig = {
                    option: choice,
                    index: Number(optionChosen),
                };
                rl.close();
                this.configLanguage.showChosenOption();
                this.setConfig();
                this.configLanguage.setLanguageOption();
            }
            else {
                rl.close();
                this.configLanguage.validateOption(optionChosen);
                this.execute();
            }
        });
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.showLanguageOptions();
        });
    }
}
exports.ConfigJson = ConfigJson;
