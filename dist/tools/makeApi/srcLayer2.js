"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeSecondLayer = void 0;
var _messages = require("../../../dist/tools/messages");
var _fs = require("fs");
var _path = require("path");
class MakeSecondLayer {
  constructor() {
    this.messages = void 0;
    this.messages = new _messages.Messages().execute();
  }
  async execute() {
    if (!(0, _fs.existsSync)((0, _path.resolve)('src', 'swagger.json'))) {
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'swagger.json'), '{}');
    } else {
      (0, _fs.truncateSync)((0, _path.resolve)('src', 'swagger.json'));
      (0, _fs.appendFileSync)((0, _path.resolve)('src', 'swagger.json'), '{}');
    }
    console.log('\x1b[38;2;255;255;0m', `- swagger.json ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeSecondLayer = MakeSecondLayer;