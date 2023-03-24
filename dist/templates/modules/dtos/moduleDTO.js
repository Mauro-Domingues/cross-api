"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateModuleDTO = void 0;
var _messages = require("../../../../dist/tools/messages");
class CreateModuleDTO {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.messages = new _messages.Messages().execute();
    this.names = names;
  }
  execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    return `export default interface I${this.names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
  }
}
exports.CreateModuleDTO = CreateModuleDTO;