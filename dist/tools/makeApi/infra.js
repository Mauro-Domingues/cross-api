"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeInfra = void 0;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = require("fs");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeInfra {
  constructor() {
    this.messages = void 0;
    this.messages = _messages.default;
  }
  async execute() {
    if (!(0, _fs.existsSync)('src')) {
      (0, _fs.mkdirSync)('src');
    }
    if (!(0, _fs.existsSync)('src/config')) {
      (0, _fs.mkdirSync)('src/config');
    }
    if (!(0, _fs.existsSync)('src/@types')) {
      (0, _fs.mkdirSync)('src/@types');
    }
    if (!(0, _fs.existsSync)('src/dtos')) {
      (0, _fs.mkdirSync)('src/dtos');
    }
    if (!(0, _fs.existsSync)('src/assets')) {
      (0, _fs.mkdirSync)('src/assets');
    }
    if (!(0, _fs.existsSync)('src/middlewares')) {
      (0, _fs.mkdirSync)('src/middlewares');
    }
    if (!(0, _fs.existsSync)('src/modules')) {
      (0, _fs.mkdirSync)('src/modules');
    }
    if (!(0, _fs.existsSync)('src/routes')) {
      (0, _fs.mkdirSync)('src/routes');
    }
    if (!(0, _fs.existsSync)('src/shared')) {
      (0, _fs.mkdirSync)('src/shared');
    }
    if (!(0, _fs.existsSync)('src/utils')) {
      (0, _fs.mkdirSync)('src/utils');
    }
    if (!(0, _fs.existsSync)('src/utils/mappers')) {
      (0, _fs.mkdirSync)('src/utils/mappers');
    }
    if (!(0, _fs.existsSync)('src/shared/container')) {
      (0, _fs.mkdirSync)('src/shared/container');
    }
    if (!(0, _fs.existsSync)('src/shared/errors')) {
      (0, _fs.mkdirSync)('src/shared/errors');
    }
    if (!(0, _fs.existsSync)('src/shared/typeorm')) {
      (0, _fs.mkdirSync)('src/shared/typeorm');
    }
    if (!(0, _fs.existsSync)('src/shared/container/providers')) {
      (0, _fs.mkdirSync)('src/shared/container/providers');
    }
    if (!(0, _fs.existsSync)('src/shared/typeorm/migrations')) {
      (0, _fs.mkdirSync)('src/shared/typeorm/migrations');
    }
    if (!(0, _fs.existsSync)('src/shared/typeorm/seeds')) {
      (0, _fs.mkdirSync)('src/shared/typeorm/seeds');
    }
    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', this.messages.apiCreated, '\x1b[0m');
  }
}
exports.MakeInfra = MakeInfra;