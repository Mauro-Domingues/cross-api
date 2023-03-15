"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeTemporary = void 0;
var _fs = require("fs");
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _authConfig = require("../../../dist/templates/providers/config/authConfig");
var _corsConfig = require("../../../dist/templates/providers/config/corsConfig");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeTemporary {
  constructor() {
    this.messages = void 0;
    this.createCorsConfig = void 0;
    this.createAuthConfig = void 0;
    this.messages = _messages.default;
    this.createCorsConfig = new _corsConfig.CreateCorsConfig();
    this.createAuthConfig = new _authConfig.CreateAuthConfig();
  }
  async execute() {
    if (!(0, _fs.existsSync)('src/config/auth.ts')) {
      (0, _fs.appendFile)('src/config/auth.ts', this.createAuthConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/auth.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/config/auth.ts', this.createAuthConfig.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- auth.ts ${this.messages.created}`, '\x1b[0m');
    if (!(0, _fs.existsSync)('src/config/cors.ts')) {
      (0, _fs.appendFile)('src/config/cors.ts', this.createCorsConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      (0, _fs.truncate)('src/config/cors.ts', error => {
        if (error) console.log(error);
      });
      (0, _fs.appendFile)('src/config/cors.ts', this.createCorsConfig.execute(), error => {
        if (error) throw error;
      });
    }
    console.log('\x1b[38;2;255;255;0m', `- cors.ts ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeTemporary = MakeTemporary;