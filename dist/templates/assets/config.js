"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class Config {
    constructor() {
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
        (0, fs_1.truncateSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'config.js'));
        (0, fs_1.appendFileSync)((0, path_1.resolve)('node_modules', 'cross-api', 'dist', 'tools', 'config.js'), this.configBody);
    }
}
exports.Config = Config;
