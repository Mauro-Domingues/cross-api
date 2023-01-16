"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createModuleDTO;
function createModuleDTO(upperModuleName) {
  return `export default interface I${upperModuleName}DTO {
  name: string;
  description: string;
}
`;
}