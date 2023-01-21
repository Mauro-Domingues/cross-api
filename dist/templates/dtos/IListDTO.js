"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIListDTO;
function createIListDTO() {
  return `import IResponseDTO from './IResponseDTO';

export default interface IListDTO<T>
  extends IResponseDTO<{
    total: number;
    page: number;
    perPage: number;
    list: T[];
  }> {
  data: {
    total: number;
    page: number;
    perPage: number;
    list: T[];
  };
}
`;
}