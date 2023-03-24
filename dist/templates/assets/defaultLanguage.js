"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateDefaultLanguage = void 0;
class CreateDefaultLanguage {
  execute(languageData) {
    return `"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Messages = void 0;
class Messages {
  constructor() {
    this.messages = void 0;
    this.messages = ${languageData};
  }
  execute() {
    return this.messages;
  }
}
exports.Messages = Messages;`;
  }
}
exports.CreateDefaultLanguage = CreateDefaultLanguage;