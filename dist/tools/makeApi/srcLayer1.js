"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFirstLayer = makeFirstLayer;
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
async function makeFirstLayer() {
  if (!(0, _fs.existsSync)('.editorconfig')) {
    (0, _fs.appendFile)('.editorconfig', (0, _editorConfig.createEditorConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('.editorconfig', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('.editorconfig', (0, _editorConfig.createEditorConfig)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .editorconfig ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('.env')) {
    (0, _fs.appendFile)('.env', (0, _env.createEnv)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('.env', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('.env', (0, _env.createEnv)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .env ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('.env.template')) {
    (0, _fs.appendFile)('.env.template', (0, _env.createEnv)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('.env.template', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('.env.template', (0, _env.createEnv)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .env.template ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('.eslintignore')) {
    (0, _fs.appendFile)('.eslintignore', (0, _esLintIgnore.createEsLintIgnore)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('.eslintignore', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('.eslintignore', (0, _esLintIgnore.createEsLintIgnore)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .eslintignore ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('.eslintrc.json')) {
    (0, _fs.appendFile)('.eslintrc.json', (0, _esLintrcJson.createEsLintrcJson)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('.eslintrc.json', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('.eslintrc.json', (0, _esLintrcJson.createEsLintrcJson)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .eslintrc.json ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('.gitignore')) {
    (0, _fs.appendFile)('.gitignore', (0, _gitIgnore.createGitIgnore)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('.gitignore', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('.gitignore', (0, _gitIgnore.createGitIgnore)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .gitignore ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('babel.config.js')) {
    (0, _fs.appendFile)('babel.config.js', (0, _babelConfig.createBabelConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('babel.config.js', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('babel.config.js', (0, _babelConfig.createBabelConfig)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- babel.config.js ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('docker-compose.yml')) {
    (0, _fs.appendFile)('docker-compose.yml', (0, _dockerCompose.createDockerCompose)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('docker-compose.yml', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('docker-compose.yml', (0, _dockerCompose.createDockerCompose)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- docker-compose.yml ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('jest.config.ts')) {
    (0, _fs.appendFile)('jest.config.ts', (0, _jestConfig.createJestConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('jest.config.ts', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('jest.config.ts', (0, _jestConfig.createJestConfig)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- jest.config.ts ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('nodemon.json')) {
    (0, _fs.appendFile)('nodemon.json', (0, _nodemonJson.createNodemonJson)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('nodemon.json', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('nodemon.json', (0, _nodemonJson.createNodemonJson)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- nodemon.json ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('prettier.config.js')) {
    (0, _fs.appendFile)('prettier.config.js', (0, _prettierConfig.createPrettierConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('prettier.config.js', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('prettier.config.js', (0, _prettierConfig.createPrettierConfig)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- prettier.config.js ${_messages.default.created}`, '\x1b[0m');
  if (!(0, _fs.existsSync)('tsconfig.json')) {
    (0, _fs.appendFile)('tsconfig.json', (0, _tsConfig.createTsConfig)(), error => {
      if (error) throw error;
    });
  } else {
    (0, _fs.truncate)('tsconfig.json', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('tsconfig.json', (0, _tsConfig.createTsConfig)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- tsconfig.json ${_messages.default.created}`, '\x1b[0m');
}