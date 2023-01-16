"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeSecondLayer;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeSecondLayer() {
  if (!_fs.default.existsSync('src/swagger.json')) {
    _fs.default.appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  } else {
    _fs.default.truncate('src/swagger.json', error => {
      if (error) console.log(error);
    });
    _fs.default.appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- swagger.json ${_messages.default.created}`, '\x1b[0m');
}