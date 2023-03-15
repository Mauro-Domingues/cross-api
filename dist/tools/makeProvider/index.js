"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProvider = void 0;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _dependent = require("./dependent");
var _independent = require("./independent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class CreateProvider {
  constructor(providerName, fatherNames) {
    this.providerName = void 0;
    this.fatherNames = void 0;
    this.makeProvider = void 0;
    this.makeDependentProvider = void 0;
    this.providerName = providerName;
    this.fatherNames = fatherNames;
    this.makeProvider = new _independent.MakeProvider(this.providerName);
    this.makeDependentProvider = new _dependent.MakeDependentProvider(this.providerName, this.fatherNames);
  }
  async execute() {
    if (this.providerName && this.fatherNames) {
      await this.makeDependentProvider.execute();
    } else if (this.providerName) {
      await this.makeProvider.execute();
    } else {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.providerNotFound, '\x1b[0m');
    }
  }
}
exports.CreateProvider = CreateProvider;