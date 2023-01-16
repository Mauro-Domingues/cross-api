"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = makeModule;
var _messages = _interopRequireDefault(require("../../../../dist/tools/messages"));
var _infra = _interopRequireDefault(require("./infra"));
var _functionalities = _interopRequireDefault(require("./functionalities"));
var _structure = _interopRequireDefault(require("./structure"));
var _unitTests = _interopRequireDefault(require("./unitTests"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function makeModule(moduleData) {
  await (0, _structure.default)(moduleData);
  await (0, _infra.default)(moduleData);
  await (0, _functionalities.default)(moduleData);
  await (0, _unitTests.default)(moduleData);
  return console.log('\x1b[38;2;255;255;0m', `- ${moduleData.lowerModuleName}Module ${_messages.default.created}`, '\x1b[0m');
}