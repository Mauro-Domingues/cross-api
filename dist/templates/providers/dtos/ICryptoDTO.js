"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateICryptoDTO = void 0;
class CreateICryptoDTO {
  execute() {
    return `export default interface ICryptoDTO {
  iv: string;
  content: string;
}
`;
  }
}
exports.CreateICryptoDTO = CreateICryptoDTO;