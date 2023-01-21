"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEsLintIgnore;
function createEsLintIgnore() {
  return `/*.js
node_modules
dist
src/@types
src/utils/mappers
`;
}