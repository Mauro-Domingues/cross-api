"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigLanguage = void 0;
var _fs = require("fs");
var _readline = require("readline");
var _enUs = require("../../dist/templates/assets/en-us");
var _ptBr = require("../../dist/templates/assets/pt-br");
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class ConfigLanguage {
  constructor() {
    this.messages = void 0;
    this.Language = void 0;
    this.languageConfig = void 0;
    this.englishMessages = void 0;
    this.portugueseMessages = void 0;
    this.englishMessages = new _enUs.EnglishMessages();
    this.portugueseMessages = new _ptBr.PortugueseMessages();
    this.messages = _messages.default;
    this.Language = {
      'en-us': 'englishMessages',
      'pt-br': 'portugueseMessages'
    };
    this.languageConfig = {
      option: 'en-us',
      index: 0
    };
  }
  showLanguageOptions() {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `${this.messages.language}`, '\x1b[0m');
    console.log('\x1b[1m');
    console.table(Object.keys(this.Language));
    console.log('');
    const rl = (0, _readline.createInterface)({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(this.messages.answer, optionChosen => {
      const choice = Object.keys(this.Language)[Number(optionChosen)];
      if (this.isLanguageOptionsKeyType(choice) && Object.keys(this.Language)[Number(optionChosen)]) {
        this.languageConfig = {
          option: choice,
          index: Number(optionChosen)
        };
        rl.close();
        this.showChosenOption();
        this.setLanguageOption();
      } else {
        rl.close();
        this.validateOption(optionChosen);
        this.execute();
      }
    });
  }
  validateOption(optionChosen) {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;0;0m', `"${optionChosen}"${this.messages.invalidLanguage}`, '\x1b[0m');
  }
  showChosenOption({
    option,
    index
  } = this.languageConfig) {
    const languageChosen = this[this.Language[option]].execute();
    this.messages = languageChosen;
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;0;255;155m', `${this.messages.choice}${Object.keys(this.Language)[index]}`, '\x1b[0m');
    console.log('');
  }
  setLanguageOption() {
    (0, _fs.truncateSync)('./node_modules/cross-api/dist/tools/messages.js');
    (0, _fs.appendFileSync)('./node_modules/cross-api/dist/tools/messages.js', `"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = ${JSON.stringify(this.messages)};
exports.default = _default;`);
  }
  isLanguageOptionsKeyType(option) {
    return true;
  }
  async execute() {
    return this.showLanguageOptions();
  }
}
exports.ConfigLanguage = ConfigLanguage;