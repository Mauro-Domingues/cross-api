"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeModule = makeModule;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _infra = require("./infra");
var _functionalities = require("./functionalities");
var _structure = require("./structure");
var _unitTests = require("./unitTests");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeModule(names) {
  await (0, _structure.makeStructure)(names);
  await (0, _infra.makeInfra)(names);
  await (0, _functionalities.makeFunctionalities)(names);
  await (0, _unitTests.makeUnitTests)(names);
  return console.log('\x1b[38;2;255;255;0m', `- ${names.lowerModuleName}Module ${_messages.default.created}`, '\x1b[0m');
}