"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeTemporary;
var _fs = _interopRequireDefault(require("fs"));
var _authConfig = _interopRequireDefault(require("../../../dist/templates/providers/config/authConfig"));
var _corsConfig = _interopRequireDefault(require("../../../dist/templates/providers/config/corsConfig"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeTemporary() {
  if (!_fs.default.existsSync('src/config/auth.ts')) {
    _fs.default.appendFile('src/config/auth.ts', (0, _authConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/auth.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/auth.ts', (0, _authConfig.default)(), error => {
      if (error) throw error;
    });
  }
  if (!_fs.default.existsSync('src/config/cors.ts')) {
    _fs.default.appendFile('src/config/cors.ts', (0, _corsConfig.default)(), error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/config/cors.ts', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/config/cors.ts', (0, _corsConfig.default)(), error => {
      if (error) throw error;
    });
  }
}