"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createICacheDTO = createICacheDTO;
function createICacheDTO() {
  return `export default interface ICacheDTO<T> {
  data: T[];
  total: number;
}
`;
}