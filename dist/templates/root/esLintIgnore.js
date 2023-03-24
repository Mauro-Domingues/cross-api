"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateEsLintIgnore = void 0;
class CreateEsLintIgnore {
  execute() {
    return `/*.js
node_modules
dist
src/@types
src/utils/mappers
`;
  }
}
exports.CreateEsLintIgnore = CreateEsLintIgnore;