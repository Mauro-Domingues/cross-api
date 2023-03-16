"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = void 0;
var _fs = require("fs");
class Config {
  constructor() {
    this.configBody = void 0;
    this.configBody = `"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigJson = void 0;
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ConfigJson {
  constructor() {
    this.messages = void 0;
    this.messages = _messages.default;
  }
  execute() {
    console.log('');
    console.log('\\x1b[1m', '\\x1b[38;2;0;255;155m', \`➤  \${this.messages.configured}\`, '\\x1b[0m');
    console.log('');
  }
}
exports.ConfigJson = ConfigJson;`;
  }
  execute() {
    (0, _fs.truncate)('./node_modules/cross-api/dist/tools/config.js', error => {
      if (error) throw error;
    });
    (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/config.js', this.configBody, error => {
      if (error) throw error;
    });
  }
}
exports.Config = Config;