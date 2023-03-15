"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeDependentModule = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _funcionalities = require("./funcionalities");
var _infra = require("./infra");
var _structure = require("./structure");
var _unitTests = require("./unitTests");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeDependentModule {
  constructor(names, fatherNames) {
    this.messages = void 0;
    this.names = void 0;
    this.fatherNames = void 0;
    this.makeDependentUnitTests = void 0;
    this.makeDependentStructure = void 0;
    this.makeDependentInfra = void 0;
    this.makeDependentFunctionalities = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.fatherNames = fatherNames;
    this.makeDependentUnitTests = new _unitTests.MakeDependentUnitTests(this.names, this.fatherNames);
    this.makeDependentStructure = new _structure.MakeDependentStructure(this.names, this.fatherNames);
    this.makeDependentInfra = new _infra.MakeDependentInfra(this.names, this.fatherNames);
    this.makeDependentFunctionalities = new _funcionalities.MakeDependentFunctionalities(this.names, this.fatherNames);
  }
  async execute() {
    if (!this.names || !this.fatherNames) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    await this.makeDependentStructure.execute();
    await this.makeDependentInfra.execute();
    await this.makeDependentFunctionalities.execute();
    await this.makeDependentUnitTests.execute();
    return console.log('\x1b[38;2;255;255;0m', `- ${this.names.lowerModuleName}Module ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeDependentModule = MakeDependentModule;