"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIObjectDTO = createIObjectDTO;
function createIObjectDTO() {
  return `export default interface IObjectDTO {
  [key: string]: unknown;
}
`;
}