"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createModuleDTO = createModuleDTO;
function createModuleDTO(names) {
  return `export default interface I${names.upperModuleName}DTO {
  name: string;
  description: string;
}
`;
}