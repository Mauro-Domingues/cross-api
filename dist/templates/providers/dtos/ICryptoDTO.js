"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createICryptoDTO = createICryptoDTO;
function createICryptoDTO() {
  return `export default interface ICryptoDTO {
  iv: string;
  content: string;
}
`;
}