import fs from 'fs';

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

export default function config(): void {
  fs.truncate('./node_modules/cross-api/dist/tools/config.js', error => {
    if (error) console.log(error);
  });
  fs.appendFile(
    './node_modules/cross-api/dist/tools/config.js',
    configBody,
    error => {
      if (error) throw error;
    },
  );
}
