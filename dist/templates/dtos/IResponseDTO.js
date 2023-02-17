"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIResponseDTO = createIResponseDTO;
function createIResponseDTO() {
  return `export default interface IResponseDTO<T> {
  code: number;
  message_code: string;
  message: string;
  data: T;
}
`;
}