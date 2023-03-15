"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MakeModule = void 0;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _infra = require("./infra");
var _functionalities = require("./functionalities");
var _structure = require("./structure");
var _unitTests = require("./unitTests");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class MakeModule {
  constructor(names) {
    this.messages = void 0;
    this.names = void 0;
    this.makeUnitTests = void 0;
    this.makeStructure = void 0;
    this.makeInfra = void 0;
    this.makeFunctionalities = void 0;
    this.messages = _messages.default;
    this.names = names;
    this.makeUnitTests = new _unitTests.MakeUnitTests(this.names);
    this.makeStructure = new _structure.MakeStructure(this.names);
    this.makeInfra = new _infra.MakeInfra(this.names);
    this.makeFunctionalities = new _functionalities.MakeFunctionalities(this.names);
  }
  async execute() {
    if (!this.names) {
      console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.moduleNotFound, '\x1b[0m');
      throw new Error();
    }
    await this.makeStructure.execute();
    await this.makeInfra.execute();
    await this.makeFunctionalities.execute();
    await this.makeUnitTests.execute();
    return console.log('\x1b[38;2;255;255;0m', `- ${this.names.lowerModuleName}Module ${this.messages.created}`, '\x1b[0m');
  }
}
exports.MakeModule = MakeModule;