"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = config;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const configBody = `"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configJson;
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function configJson() {
  console.log('');
  console.log('\\x1b[1m', '\\x1b[38;2;0;255;155m', \`➤  \${_messages.default.configured}\`, '\\x1b[0m');
  console.log('');
}
`;
function config() {
  _fs.default.truncate('./node_modules/cross-api/src/tools/config.ts', error => {
    if (error) console.log(error);
  });
  _fs.default.appendFile('./node_modules/cross-api/src/tools/config.ts', configBody, error => {
    if (error) throw error;
  });
}