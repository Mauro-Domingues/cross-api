"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeFirstLayer;
var _babelConfig = _interopRequireDefault(require("../../../dist/templates/root/babelConfig"));
var _dockerCompose = _interopRequireDefault(require("../../../dist/templates/root/dockerCompose"));
var _editorConfig = _interopRequireDefault(require("../../../dist/templates/root/editorConfig"));
var _env = _interopRequireDefault(require("../../../dist/templates/root/env"));
var _esLintIgnore = _interopRequireDefault(require("../../../dist/templates/root/esLintIgnore"));
var _esLintrcJson = _interopRequireDefault(require("../../../dist/templates/root/esLintrcJson"));
var _gitIgnore = _interopRequireDefault(require("../../../dist/templates/root/gitIgnore"));
var _jestConfig = _interopRequireDefault(require("../../../dist/templates/root/jestConfig"));
var _nodemonJson = _interopRequireDefault(require("../../../dist/templates/root/nodemonJson"));
var _prettierConfig = _interopRequireDefault(require("../../../dist/templates/root/prettierConfig"));
var _tsConfig = _interopRequireDefault(require("../../../dist/templates/root/tsConfig"));
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeFirstLayer() {
  if (!_fs.default.existsSync('.editorconfig')) {
    _fs.default.appendFile('.editorconfig', (0, _editorConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('.editorconfig', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('.editorconfig', (0, _editorConfig.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .editorconfig ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('.env')) {
    _fs.default.appendFile('.env', (0, _env.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('.env', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('.env', (0, _env.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .env ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('.env.template')) {
    _fs.default.appendFile('.env.template', (0, _env.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('.env.template', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('.env.template', (0, _env.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .env.template ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('.eslintignore')) {
    _fs.default.appendFile('.eslintignore', (0, _esLintIgnore.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('.eslintignore', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('.eslintignore', (0, _esLintIgnore.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .eslintignore ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('.eslintrc.json')) {
    _fs.default.appendFile('.eslintrc.json', (0, _esLintrcJson.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('.eslintrc.json', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('.eslintrc.json', (0, _esLintrcJson.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .eslintrc.json ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('.gitignore')) {
    _fs.default.appendFile('.gitignore', (0, _gitIgnore.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('.gitignore', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('.gitignore', (0, _gitIgnore.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .gitignore ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('babel.config.js')) {
    _fs.default.appendFile('babel.config.js', (0, _babelConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('babel.config.js', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('babel.config.js', (0, _babelConfig.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- babel.config.js ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('docker-compose.yml')) {
    _fs.default.appendFile('docker-compose.yml', (0, _dockerCompose.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('docker-compose.yml', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('docker-compose.yml', (0, _dockerCompose.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- docker-compose.yml ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('jest.config.ts')) {
    _fs.default.appendFile('jest.config.ts', (0, _jestConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('jest.config.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('jest.config.ts', (0, _jestConfig.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- jest.config.ts ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('nodemon.json')) {
    _fs.default.appendFile('nodemon.json', (0, _nodemonJson.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('nodemon.json', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('nodemon.json', (0, _nodemonJson.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- nodemon.json ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('prettier.config.js')) {
    _fs.default.appendFile('prettier.config.js', (0, _prettierConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('prettier.config.js', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('prettier.config.js', (0, _prettierConfig.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- prettier.config.js ${_messages.default.created}`, '\x1b[0m');
  if (!_fs.default.existsSync('tsconfig.json')) {
    _fs.default.appendFile('tsconfig.json', (0, _tsConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('tsconfig.json', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('tsconfig.json', (0, _tsConfig.default)(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- tsconfig.json ${_messages.default.created}`, '\x1b[0m');
}