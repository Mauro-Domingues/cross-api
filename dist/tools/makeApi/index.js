"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createApi;
var _independent = _interopRequireDefault(require("../../../dist/tools/makeProvider/independent"));
var _infra = _interopRequireDefault(require("./infra"));
var _srcLayer = _interopRequireDefault(require("./srcLayer1"));
var _srcLayer2 = _interopRequireDefault(require("./srcLayer2"));
var _srcLayer3 = _interopRequireDefault(require("./srcLayer3"));
var _srcLayer4 = _interopRequireDefault(require("./srcLayer4"));
var _temporary = _interopRequireDefault(require("./temporary"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
async function createApi() {
  await (0, _infra.default)();
  await (0, _srcLayer.default)();
  await (0, _srcLayer2.default)();
  await (0, _srcLayer3.default)();
  await (0, _srcLayer4.default)();
  await (0, _temporary.default)();
  return (0, _independent.default)('cache');
}