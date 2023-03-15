"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateModule = void 0;
var _dependent = require("./dependent");
var _independent = require("./independent");
class CreateModule {
  constructor(names, fatherNames) {
    this.names = void 0;
    this.fatherNames = void 0;
    this.makeModule = void 0;
    this.makeDependentModule = void 0;
    this.names = names;
    this.fatherNames = fatherNames;
    this.makeModule = new _independent.MakeModule(this.names);
    this.makeDependentModule = new _dependent.MakeDependentModule(this.names, this.fatherNames);
  }
  async execute() {
    if (this.names && this.fatherNames) {
      this.makeDependentModule.execute();
    } else if (this.names) {
      this.makeModule.execute();
    }
  }
}
exports.CreateModule = CreateModule;