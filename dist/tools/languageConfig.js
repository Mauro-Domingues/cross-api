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
    this.rl = void 0;
    this.Language = void 0;
    this.englishMessages = void 0;
    this.portugueseMessages = void 0;
    this.languageConfig = void 0;
    this.parsedMessages = void 0;
    this.englishMessages = new _enUs.EnglishMessages();
    this.portugueseMessages = new _ptBr.PortugueseMessages();
    this.messages = _messages.default;
    this.parsedMessages = _messages.default;
    this.rl = (0, _readline.createInterface)({
      input: process.stdin,
      output: process.stdout
    });
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
  }
  validateOption(optionChosen) {
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;255;0;0m', `"${optionChosen}${this.messages.invalidLanguage}`, '\x1b[0m');
    this.rl.close();
    this.execute();
  }
  setLanguageOption({
    option,
    index
  } = this.languageConfig) {
    this.parsedMessages = JSON.parse(this[this.Language[option]].execute());
    (0, _fs.truncate)('./node_modules/cross-api/dist/tools/messages.js', error => {
      if (error) console.log(error);
    });
    (0, _fs.appendFile)('./node_modules/cross-api/dist/tools/messages.js', this[this.Language[option]].execute(), error => {
      if (error) console.log(error);
    });
    console.log('');
    console.log('\x1b[1m', '\x1b[38;2;0;255;155m', `${this.parsedMessages.choice}${Object.keys(this.Language)[index]}`, '\x1b[0m');
    console.log('');
  }
  isLanguageOptionsKeyType(option) {
    return true;
  }
  execute() {
    this.showLanguageOptions();
    this.rl.question(this.messages.answer, optionChosen => {
      const option = optionChosen;
      if (!this.isLanguageOptionsKeyType(option)) {
        this.validateOption(optionChosen);
      } else {
        this.languageConfig = {
          option,
          index: Number(optionChosen)
        };
        this.setLanguageOption(this.languageConfig);
      }
      this.rl.close();
    });
  }
}
exports.ConfigLanguage = ConfigLanguage;