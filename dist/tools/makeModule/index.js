"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createModule;
var _dependent = _interopRequireDefault(require("./dependent"));
var _independent = _interopRequireDefault(require("./independent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function createModule(moduleData, fatherData) {
  if (moduleData && fatherData) {
    (0, _dependent.default)(moduleData, fatherData);
  } else if (moduleData) {
    (0, _independent.default)(moduleData);
  }
}