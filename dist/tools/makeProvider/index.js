"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateProvider = void 0;
var _messages = require("../../../dist/tools/messages");
var _dependent = require("./dependent");
var _independent = require("./independent");
class CreateProvider {
  constructor(providerName, fatherNames) {
    this.messages = void 0;
    this.providerName = void 0;
    this.fatherNames = void 0;
    this.makeProvider = void 0;
    this.makeDependentProvider = void 0;
    this.providerName = providerName;
    this.fatherNames = fatherNames;
    this.messages = new _messages.Messages().execute();
    this.makeProvider = new _independent.MakeProvider(this.providerName);
    this.makeDependentProvider = new _dependent.MakeDependentProvider(this.providerName, this.fatherNames);
  }
  async execute() {
    if (this.providerName && this.fatherNames) {
      await this.makeDependentProvider.execute();
    } else if (this.providerName) {
      await this.makeProvider.execute();
    } else {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.providerNotFound, '\x1b[0m');
    }
  }
}
exports.CreateProvider = CreateProvider;