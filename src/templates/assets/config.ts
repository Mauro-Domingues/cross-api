import { appendFile, truncate } from 'fs';

export class Config {
  private configBody: string;

  constructor() {
    this.configBody = `Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.configJson = configJson;
const _messages = _interopRequireDefault(require('../dist/tools/messages'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
function configJson() {
  console.log('');
  console.log(
    '\\x1b[1m',
    '\\x1b[38;2;0;255;155m',
    \`➤  \${_messages.default.configured}\`,
    '\\x1b[0m',
  );
  console.log('');
}
configJson();
`;
  }

  public execute(): void {
    truncate('./node_modules/cross-api/dist/tools/config.js', error => {
      if (error) console.log(error);
    });
    appendFile(
      './node_modules/cross-api/dist/tools/config.js',
      this.configBody,
      error => {
        if (error) throw error;
      },
    );
  }
}
