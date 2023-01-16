"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configLanguage;
var _fs = _interopRequireDefault(require("fs"));
var _readline = _interopRequireDefault(require("readline"));
var _enUs = _interopRequireDefault(require("../../dist/templates/assets/en-us"));
var _ptBr = _interopRequireDefault(require("../../dist/templates/assets/pt-br"));
var _messages = _interopRequireDefault(require("./messages"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class LanguageOption {
  constructor(Language) {
    this.Language = void 0;
    this.Language = Language;
  }
}
function configLanguage() {
  const languages = [new LanguageOption('en-us'), new LanguageOption('pt-br')];
  console.log('');
  console.log('\x1b[1m', '\x1b[38;2;255;255;0m', `${_messages.default.language}`, '\x1b[0m');
  console.log('\x1b[1m');
  console.table([languages[0], languages[1]]);
  console.log('');
  const rl = _readline.default.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question(_messages.default.answer, languageOption => {
    if (languageOption !== '0' && languageOption !== '1') {
      console.log('');
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', `"${languageOption}${_messages.default.invalidLanguage}`, '\x1b[0m');
      rl.close();
      configLanguage();
    } else {
      _fs.default.truncate('./node_modules/cross-api/dist/tools/messages.ts', error => {
        if (error) console.log(error);
      });
      if (languageOption === '0') {
        _fs.default.appendFile('./node_modules/cross-api/dist/tools/messages.ts', _enUs.default, error => {
          if (error) console.log(error);
        });
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;255;155m', `➤  You chose the language: ${languages[languageOption].Language}`, '\x1b[0m');
        console.log('');
      } else {
        _fs.default.appendFile('./node_modules/cross-api/dist/tools/messages.ts', _ptBr.default, error => {
          if (error) console.log(error);
        });
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;255;155m', `➤  Você escolheu a linguagem: ${languages[languageOption].Language}`, '\x1b[0m');
        console.log('');
      }
      rl.close();
    }
  });
}