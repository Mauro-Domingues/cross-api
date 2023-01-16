"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeInfra;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeInfra() {
  if (!_fs.default.existsSync('src')) {
    _fs.default.mkdirSync('src');
  }
  if (!_fs.default.existsSync('src/config')) {
    _fs.default.mkdirSync('src/config');
  }
  if (!_fs.default.existsSync('src/@types')) {
    _fs.default.mkdirSync('src/@types');
  }
  if (!_fs.default.existsSync('src/assets')) {
    _fs.default.mkdirSync('src/assets');
  }
  if (!_fs.default.existsSync('src/dtos')) {
    _fs.default.mkdirSync('src/dtos');
  }
  if (!_fs.default.existsSync('src/middlewares')) {
    _fs.default.mkdirSync('src/middlewares');
  }
  if (!_fs.default.existsSync('src/modules')) {
    _fs.default.mkdirSync('src/modules');
  }
  if (!_fs.default.existsSync('src/routes')) {
    _fs.default.mkdirSync('src/routes');
  }
  if (!_fs.default.existsSync('src/shared')) {
    _fs.default.mkdirSync('src/shared');
  }
  if (!_fs.default.existsSync('src/utils')) {
    _fs.default.mkdirSync('src/utils');
  }
  if (!_fs.default.existsSync('src/utils/mappers')) {
    _fs.default.mkdirSync('src/utils/mappers');
  }
  if (!_fs.default.existsSync('src/shared/container')) {
    _fs.default.mkdirSync('src/shared/container');
  }
  if (!_fs.default.existsSync('src/shared/errors')) {
    _fs.default.mkdirSync('src/shared/errors');
  }
  if (!_fs.default.existsSync('src/shared/typeorm')) {
    _fs.default.mkdirSync('src/shared/typeorm');
  }
  if (!_fs.default.existsSync('src/shared/container/providers')) {
    _fs.default.mkdirSync('src/shared/container/providers');
  }
  if (!_fs.default.existsSync('src/shared/typeorm/migrations')) {
    _fs.default.mkdirSync('src/shared/typeorm/migrations');
  }
  if (!_fs.default.existsSync('src/shared/typeorm/seeds')) {
    _fs.default.mkdirSync('src/shared/typeorm/seeds');
  }
  console.log('\x1b[1m', '\x1b[38;2;0;155;255m', _messages.default.apiCreated, '\x1b[0m');
}