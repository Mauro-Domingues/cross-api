"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIObjectDTO;
function createIObjectDTO() {
  return `export default interface IObjectDTO {
  [key: string]: string | number;
}
`;
}