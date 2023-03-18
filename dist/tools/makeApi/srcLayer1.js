"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeFirstLayer = void 0;
var _babelConfig = require("../../../dist/templates/root/babelConfig");
var _dockerCompose = require("../../../dist/templates/root/dockerCompose");
var _editorConfig = require("../../../dist/templates/root/editorConfig");
var _env = require("../../../dist/templates/root/env");
var _esLintIgnore = require("../../../dist/templates/root/esLintIgnore");
var _esLintrcJson = require("../../../dist/templates/root/esLintrcJson");
var _gitIgnore = require("../../../dist/templates/root/gitIgnore");
var _jestConfig = require("../../../dist/templates/root/jestConfig");
var _nodemonJson = require("../../../dist/templates/root/nodemonJson");
var _prettierConfig = require("../../../dist/templates/root/prettierConfig");
var _tsConfig = require("../../../dist/templates/root/tsConfig");
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = require("fs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeFirstLayer {
  constructor() {
    this.messages = void 0;
    this.createTsConfig = void 0;
    this.createPrettierConfig = void 0;
    this.createNodemonJson = void 0;
    this.createJestConfig = void 0;
    this.createGitIgnore = void 0;
    this.createEsLintrcJson = void 0;
    this.createEsLintIgnore = void 0;
    this.createEnv = void 0;
    this.createEditorConfig = void 0;
    this.createDockerCompose = void 0;
    this.createBabelConfig = void 0;
    this.messages = _messages.default;
    this.createTsConfig = new _tsConfig.CreateTsConfig();
    this.createPrettierConfig = new _prettierConfig.CreatePrettierConfig();
    this.createNodemonJson = new _nodemonJson.CreateNodemonJson();
    this.createJestConfig = new _jestConfig.CreateJestConfig();
    this.createGitIgnore = new _gitIgnore.CreateGitIgnore();
    this.createEsLintrcJson = new _esLintrcJson.CreateEsLintrcJson();
    this.createEsLintIgnore = new _esLintIgnore.CreateEsLintIgnore();
    this.createEnv = new _env.CreateEnv();
    this.createEditorConfig = new _editorConfig.CreateEditorConfig();
    this.createDockerCompose = new _dockerCompose.CreateDockerCompose();
    this.createBabelConfig = new _babelConfig.CreateBabelConfig();
  }
  async execute() {
    if (!(0, _fs.existsSync)('.editorconfig')) {
      (0, _fs.appendFileSync)('.editorconfig', this.createEditorConfig.execute());
    } else {
      (0, _fs.truncateSync)('.editorconfig');
      (0, _fs.appendFileSync)('.editorconfig', this.createEditorConfig.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- .editorconfig ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('.env')) {
      (0, _fs.appendFileSync)('.env', this.createEnv.execute());
    } else {
      (0, _fs.truncateSync)('.env');
      (0, _fs.appendFileSync)('.env', this.createEnv.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- .env ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('.env.template')) {
      (0, _fs.appendFileSync)('.env.template', this.createEnv.execute());
    } else {
      (0, _fs.truncateSync)('.env.template');
      (0, _fs.appendFileSync)('.env.template', this.createEnv.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- .env.template ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('.eslintignore')) {
      (0, _fs.appendFileSync)('.eslintignore', this.createEsLintIgnore.execute());
    } else {
      (0, _fs.truncateSync)('.eslintignore');
      (0, _fs.appendFileSync)('.eslintignore', this.createEsLintIgnore.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- .eslintignore ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('.eslintrc.json')) {
      (0, _fs.appendFileSync)('.eslintrc.json', this.createEsLintrcJson.execute());
    } else {
      (0, _fs.truncateSync)('.eslintrc.json');
      (0, _fs.appendFileSync)('.eslintrc.json', this.createEsLintrcJson.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- .eslintrc.json ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('.gitignore')) {
      (0, _fs.appendFileSync)('.gitignore', this.createGitIgnore.execute());
    } else {
      (0, _fs.truncateSync)('.gitignore');
      (0, _fs.appendFileSync)('.gitignore', this.createGitIgnore.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- .gitignore ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('babel.config.js')) {
      (0, _fs.appendFileSync)('babel.config.js', this.createBabelConfig.execute());
    } else {
      (0, _fs.truncateSync)('babel.config.js');
      (0, _fs.appendFileSync)('babel.config.js', this.createBabelConfig.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- babel.config.js ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('docker-compose.yml')) {
      (0, _fs.appendFileSync)('docker-compose.yml', this.createDockerCompose.execute());
    } else {
      (0, _fs.truncateSync)('docker-compose.yml');
      (0, _fs.appendFileSync)('docker-compose.yml', this.createDockerCompose.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- docker-compose.yml ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('jest.config.ts')) {
      (0, _fs.appendFileSync)('jest.config.ts', this.createJestConfig.execute());
    } else {
      (0, _fs.truncateSync)('jest.config.ts');
      (0, _fs.appendFileSync)('jest.config.ts', this.createJestConfig.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- jest.config.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('nodemon.json')) {
      (0, _fs.appendFileSync)('nodemon.json', this.createNodemonJson.execute());
    } else {
      (0, _fs.truncateSync)('nodemon.json');
      (0, _fs.appendFileSync)('nodemon.json', this.createNodemonJson.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- nodemon.json ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('prettier.config.js')) {
      (0, _fs.appendFileSync)('prettier.config.js', this.createPrettierConfig.execute());
    } else {
      (0, _fs.truncateSync)('prettier.config.js');
      (0, _fs.appendFileSync)('prettier.config.js', this.createPrettierConfig.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- prettier.config.js ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('tsconfig.json')) {
      (0, _fs.appendFileSync)('tsconfig.json', this.createTsConfig.execute());
    } else {
      (0, _fs.truncateSync)('tsconfig.json');
      (0, _fs.appendFileSync)('tsconfig.json', this.createTsConfig.execute());
    }
    console.log('\x1b[38;2;255;255;0m', `- tsconfig.json ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeFirstLayer = MakeFirstLayer;