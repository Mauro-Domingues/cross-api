"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIResponseDTO;
function createIResponseDTO() {
  return `declare interface IResponseDTO<T> {
  code: number;
  message_code: string;
  message: string;
  data: T;
}
`;
}