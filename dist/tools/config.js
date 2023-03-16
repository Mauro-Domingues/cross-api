"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigJson = void 0;
var _fs = require("fs");
var _shelljs = require("shelljs");
var _config = require("../../dist/templates/assets/config");
var _readline = require("readline");
var _package = _interopRequireDefault(require("../../../../package.json"));
var _languageConfig = require("./languageConfig");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ConfigJson {
  constructor() {
    this.config = void 0;
    this.configLanguage = void 0;
    this.userJson = void 0;
    this.dependencies = void 0;
    this.devDependencies = void 0;
    this.configLanguage = new _languageConfig.ConfigLanguage();
    this.config = new _config.Config();
    this.userJson = _package.default;
    this.dependencies = ['aws-sdk', 'axios', 'bcrypt', 'celebrate', 'class-transformer', 'cors', 'dotenv', 'express', 'express-jwt', 'express-async-errors', 'handlebars', 'ioredis', 'jsonwebtoken', 'jwks-rsa', 'mime', 'multer', 'mysql', 'nodemailer', 'pem-jwk', 'rate-limiter-flexible', 'redis@^3.0.2', 'reflect-metadata', 'supertest', 'swagger-ui-express', 'ts-jest', 'tsyringe', 'typeorm@^0.3.11', 'uuid'];
    this.devDependencies = ['@babel/cli', '@babel/core', '@babel/node', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-decorators', '@babel/preset-env', '@babel/preset-typescript', '@types/bcrypt', '@types/cors', '@types/express', '@types/express-jwt', '@types/jest', '@types/jsonwebtoken', '@types/mime', '@types/multer', '@types/nodemailer', '@types/pem-jwk', '@types/redis@^2.8.27', '@types/shelljs', '@types/supertest', '@types/swagger-ui-express', '@types/uuid', '@typescript-eslint/eslint-plugin', '@typescript-eslint/parser', 'babel-plugin-module-resolver', 'babel-plugin-transform-typescript-metadata', 'eslint', 'eslint-config-airbnb-base', 'eslint-config-prettier', 'eslint-import-resolver-typescript', 'eslint-plugin-import', 'eslint-plugin-import-helpers', 'eslint-plugin-prettier', 'jest', 'prettier', 'ts-node-dev', 'tsconfig-paths', 'typescript'];
  }
  patchPackage() {
    this.userJson.scripts = {
      ...this.userJson.scripts,
      dev: 'ts-node-dev -r tsconfig-paths/register --inspect --transpile-only src/shared/server.ts',
      test: 'set NODE_ENV=test&&jest --runInBand',
      build: 'babel src --extensions ".js,.ts" --out-dir dist --copy-files',
      start: 'node dist/shared/server.js'
    };
    (0, _fs.writeFileSync)('./package.json', JSON.stringify(this.userJson), {
      encoding: 'utf8',
      flag: 'w'
    });
  }
  installYarn() {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.yarn}`, '\x1b[0m');
    console.log('');
    (0, _shelljs.exec)('npm install yarn --location=global');
    console.log('\x1b[38;2;255;255;0m', `- yarn ${this.configLanguage.messages.installed}`, '\x1b[0m');
  }
  installDependencies() {
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.dependencies}`, '\x1b[0m');
    console.log('');
    const dependenciesToInstall = this.dependencies.reduce((acc, dependency) => {
      return `${acc} ${dependency}`;
    });
    (0, _shelljs.exec)(`yarn add ${dependenciesToInstall}`);
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
    (0, _shelljs.exec)(`yarn add ${devDependenciesToInstall} -D`);
    this.devDependencies.forEach(devDependency => {
      console.log('\x1b[38;2;255;255;0m', `- ${devDependency} ${this.configLanguage.messages.installed}`, '\x1b[0m');
    });
    console.log('');
  }
  setConfig() {
    this.patchPackage();
    this.installYarn();
    this.installDependencies();
    this.installDevDependencies();
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.marketplaceTool[0]}`, '\x1b[38;2;255;0;255m', 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.marketplaceTool[1]}`, '\x1b[0m');
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.try[0]}`, '\x1b[38;2;255;255;0m', `${this.configLanguage.messages.try[1]}`, '\x1b[38;2;0;155;255m', `${this.configLanguage.messages.try[2]}`, '\x1b[0m');
    console.log('');
    if ((0, _fs.existsSync)('package-lock.json')) {
      (0, _fs.unlink)('package-lock.json', error => {
        if (error) throw error;
      });
    }
    this.config.execute();
  }
  showLanguageOptions() {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `${this.configLanguage.messages.language}`, '\x1b[0m');
    console.log('\x1b[1m');
    console.table(Object.keys(this.configLanguage.Language));
    console.log('');
    const rl = (0, _readline.createInterface)({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(this.configLanguage.messages.answer, optionChosen => {
      const choice = Object.keys(this.configLanguage.Language)[Number(optionChosen)];
      if (this.configLanguage.isLanguageOptionsKeyType(choice) && Object.keys(this.configLanguage.Language)[Number(optionChosen)]) {
        this.configLanguage.languageConfig = {
          option: choice,
          index: Number(optionChosen)
        };
        rl.close();
        this.configLanguage.showChosenOption();
        this.setConfig();
        this.configLanguage.setLanguageOption();
      } else {
        rl.close();
        this.configLanguage.validateOption(optionChosen);
        this.execute();
      }
    });
  }
  async execute() {
    return this.showLanguageOptions();
  }
}
exports.ConfigJson = ConfigJson;