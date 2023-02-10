"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configJson;
var _fs = _interopRequireDefault(require("fs"));
var _readline = _interopRequireDefault(require("readline"));
var _shelljs = _interopRequireDefault(require("shelljs"));
var _package = _interopRequireDefault(require("../../../../package.json"));
var _config = _interopRequireDefault(require("../../dist/templates/assets/config"));
var _enUs = _interopRequireDefault(require("../../dist/templates/assets/en-us"));
var _ptBr = _interopRequireDefault(require("../../dist/templates/assets/pt-br"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class LanguageOption {
  constructor(Language) {
    this.Language = void 0;
    this.Language = Language;
  }
}
function configJson() {
  const languages = [new LanguageOption('en-us'), new LanguageOption('pt-br')];
  _package.default.scripts = {
    ..._package.default.scripts,
    dev: 'ts-node-dev -r tsconfig-paths/register src/shared/server.ts',
    test: 'set NODE_ENV=test&&jest --runInBand',
    build: 'babel src --extensions ".js,.ts" --out-dir dist --copy-files',
    start: 'node dist/shared/server.js'
  };
  _fs.default.writeFileSync('./package.json', JSON.stringify(_package.default), {
    encoding: 'utf8',
    flag: 'w'
  });
  const dependencies = ['aws-sdk', 'axios', 'bcrypt', 'celebrate', 'cors', 'dotenv', 'express', 'express-jwt', 'express-async-errors', 'handlebars', 'ioredis', 'jsonwebtoken', 'jwks-rsa', 'mime', 'multer', 'mysql', 'nodemailer', 'pem-jwk', 'rate-limiter-flexible', 'redis@^3.0.2', 'reflect-metadata', 'supertest', 'swagger-ui-express', 'ts-jest', 'tsyringe', 'typeorm@^0.3.11', 'uuid'];
  const devDependencies = ['@babel/cli', '@babel/core', '@babel/node', '@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-decorators', '@babel/preset-env', '@babel/preset-typescript', '@types/bcrypt', '@types/cors', '@types/express', '@types/express-jwt', '@types/jest', '@types/jsonwebtoken', '@types/mime', '@types/multer', '@types/nodemailer', '@types/pem-jwk', '@types/redis@^2.8.27', '@types/shelljs', '@types/supertest', '@types/swagger-ui-express', '@types/uuid', '@typescript-eslint/eslint-plugin', '@typescript-eslint/parser', 'babel-plugin-module-resolver', 'babel-plugin-transform-typescript-metadata', 'eslint', 'eslint-config-airbnb-base', 'eslint-config-prettier', 'eslint-import-resolver-typescript', 'eslint-plugin-import', 'eslint-plugin-import-helpers', 'eslint-plugin-prettier', 'jest', 'prettier', 'ts-node-dev', 'tsconfig-paths', 'typescript'];
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;255;0m', '➤  Which language do you prefer?', '\x1b[0m');
  console.log('');
  console.table([languages[0], languages[1]]);
  console.log('\x1b[1m');
  const rl = _readline.default.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Your answer: ', languageOption => {
    if (languageOption !== '0' && languageOption !== '1') {
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', `"${languageOption}" is not a valid option`, '\x1b[0m');
      rl.close();
      configJson();
    } else {
      if (languageOption === '0') {
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;255;155m', `➤  You chose the language: ${languages[languageOption].Language}`, '\x1b[0m');
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '==============={ Installing Yarn }===============', '\x1b[0m');
        console.log('');
        _shelljs.default.exec('npm install yarn --location=global');
        console.log('\x1b[38;2;255;255;0m', `- yarn installed`, '\x1b[0m');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '==========={ Installing Dependencies }===========', '\x1b[0m');
        console.log('');
        const dependenciesToInstall = dependencies.reduce((acc, dependency) => {
          acc += ` ${dependency}`;
          return acc;
        });
        _shelljs.default.exec(`yarn add ${dependenciesToInstall}`);
        dependencies.forEach(dependency => {
          console.log('\x1b[38;2;255;255;0m', `- ${dependency} installed`, '\x1b[0m');
        });
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '====={ Installing Development Dependencies }=====', '\x1b[0m');
        console.log('');
        const devDependenciesToInstall = devDependencies.reduce((acc, devDependency) => {
          acc += ` ${devDependency}`;
          return acc;
        });
        _shelljs.default.exec(`yarn add ${devDependenciesToInstall} -D`);
        devDependencies.forEach(devDependency => {
          console.log('\x1b[38;2;255;255;0m', `- ${devDependency} installed`, '\x1b[0m');
        });
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', 'Download', '\x1b[38;2;255;0;255m', 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig', '\x1b[38;2;0;155;255m', 'to help you', '\x1b[0m');
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '➤  Execute', '\x1b[38;2;255;255;0m', 'yarn cross comands', '\x1b[38;2;0;155;255m', 'to see available commands', '\x1b[0m');
        console.log('');
        _fs.default.truncate('./node_modules/cross-api/dist/tools/messages.js', error => {
          if (error) console.log(error);
        });
        _fs.default.appendFile('./node_modules/cross-api/dist/tools/messages.js', _enUs.default, error => {
          if (error) console.log(error);
        });
      } else {
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;255;155m', `➤  Você escolheu a linguagem: ${languages[languageOption].Language}`, '\x1b[0m');
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '==================={ Instalando Yarn }==================', '\x1b[0m');
        console.log('');
        _shelljs.default.exec('npm install yarn --location=global');
        console.log('\x1b[38;2;255;255;0m', `- yarn instalado`, '\x1b[0m');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '=============={ Instalando Dependências }===============', '\x1b[0m');
        console.log('');
        const dependenciesToInstall = dependencies.reduce((acc, dependency) => {
          acc += ` ${dependency}`;
          return acc;
        });
        _shelljs.default.exec(`yarn add ${dependenciesToInstall}`);
        dependencies.forEach(dependency => {
          console.log('\x1b[38;2;255;255;0m', `- ${dependency} instalado`, '\x1b[0m');
        });
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '====={ Instalando Dependências de Desenvolvimento }=====', '\x1b[0m');
        console.log('');
        const devDependenciesToInstall = devDependencies.reduce((acc, devDependency) => {
          acc += ` ${devDependency}`;
          return acc;
        });
        _shelljs.default.exec(`yarn add ${devDependenciesToInstall} -D`);
        devDependencies.forEach(devDependency => {
          console.log('\x1b[38;2;255;255;0m', `- ${devDependency} instalado`, '\x1b[0m');
        });
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', 'Instale', '\x1b[38;2;255;0;255m', 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig', '\x1b[38;2;0;155;255m', 'para te ajudar', '\x1b[0m');
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '➤  Execute', '\x1b[38;2;255;255;0m', 'yarn cross comands', '\x1b[38;2;0;155;255m', 'para ver os comandos disponíveis', '\x1b[0m');
        console.log('');
        _fs.default.truncate('./node_modules/cross-api/dist/tools/messages.js', error => {
          if (error) console.log(error);
        });
        _fs.default.appendFile('./node_modules/cross-api/dist/tools/messages.js', _ptBr.default, error => {
          if (error) console.log(error);
        });
      }
      rl.close();
    }
  });
  (0, _config.default)();
}