"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeInfra = void 0;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = require("fs");
var _path = require("path");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeInfra {
  constructor() {
    this.messages = void 0;
    this.messages = _messages.default;
  }
  async execute() {
    if (!(0, _fs.existsSync)((0, _path.resolve)('src'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'config'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'config'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', '@types'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', '@types'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'dtos'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'dtos'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'assets'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'assets'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'middlewares'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'middlewares'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'modules'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'modules'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'routes'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'routes'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'utils'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'utils'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'utils', 'mappers'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'utils', 'mappers'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'errors'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'errors'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'typeorm'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'typeorm'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'container', 'providers'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'typeorm', 'migrations'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'typeorm', 'migrations'));
    }
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'shared', 'typeorm', 'seeds'))) {
      (0, _fs.mkdirSync)((0, _path.resolve)('src', 'shared', 'typeorm', 'seeds'));
    }
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', this.messages.apiCreated, '\x1b[0m');
  }
}
exports.MakeInfra = MakeInfra;