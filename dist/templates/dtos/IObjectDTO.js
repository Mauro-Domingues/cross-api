"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIObjectDTO;
function createIObjectDTO() {
  return `declare interface IObjectDTO {
  [key: string]: any;
}
`;
}