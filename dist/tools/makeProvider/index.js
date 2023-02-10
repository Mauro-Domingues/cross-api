"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createProvider;
var _messages = _interopRequireDefault(require("../../../dist/tools/messages"));
var _dependent = _interopRequireDefault(require("./dependent"));
var _independent = _interopRequireDefault(require("./independent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function createProvider(providerName, fatherNames) {
  if (providerName && fatherNames) {
    (0, _dependent.default)(providerName, fatherNames);
  } else if (providerName) {
    (0, _independent.default)(providerName);
  } else {
    console.log('\x1b[1m', '\x1b[38;2;255;0;0m', _messages.default.providerNotFound, '\x1b[0m');
  }
}