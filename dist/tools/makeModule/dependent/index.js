"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeDependentModule;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _funcionalities = _interopRequireDefault(require("./funcionalities"));
var _infra = _interopRequireDefault(require("./infra"));
var _structure = _interopRequireDefault(require("./structure"));
var _unitTests = _interopRequireDefault(require("./unitTests"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeDependentModule(moduleData, fatherData) {
  await (0, _structure.default)(moduleData, fatherData);
  await (0, _infra.default)(moduleData, fatherData);
  await (0, _funcionalities.default)(moduleData, fatherData);
  await (0, _unitTests.default)(moduleData, fatherData);
  return console.log('\x1b[38;2;255;255;0m', `- ${moduleData.lowerModuleName}Module ${_messages.default.created}`, '\x1b[0m');
}