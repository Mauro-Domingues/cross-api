"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createModule;
var _dependent = _interopRequireDefault(require("./dependent"));
var _independent = _interopRequireDefault(require("./independent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function createModule(names, fatherNames) {
  if (names && fatherNames) {
    (0, _dependent.default)(names, fatherNames);
  } else if (names) {
    (0, _independent.default)(names);
  }
}