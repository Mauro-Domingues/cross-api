"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeDependentModule = makeDependentModule;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _funcionalities = require("./funcionalities");
var _infra = require("./infra");
var _structure = require("./structure");
var _unitTests = require("./unitTests");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentModule(names, fatherNames) {
  await (0, _structure.makeDependentStructure)(names, fatherNames);
  await (0, _infra.makeDependentInfra)(names, fatherNames);
  await (0, _funcionalities.makeDependentFunctionalities)(names, fatherNames);
  await (0, _unitTests.makeDependentUnitTests)(names, fatherNames);
  return console.log('\x1b[38;2;255;255;0m', `- ${names.lowerModuleName}Module ${_messages.default.created}`, '\x1b[0m');
}