"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIObjectDTO = void 0;
class CreateIObjectDTO {
  execute() {
    return `export default interface IObjectDTO {
  [key: string]: unknown;
}
`;
  }
}
exports.CreateIObjectDTO = CreateIObjectDTO;