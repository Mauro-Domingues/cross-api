"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIListDTO = void 0;
class CreateIListDTO {
    execute() {
        return `import IResponseDTO from './IResponseDTO';

export default interface IListDTO<T> extends IResponseDTO<T[]> {
  pagination: {
    total: number;
    page: number;
    perPage: number;
    lastPage: number;
  };
  data: T[];
}
`;
    }
}
exports.CreateIListDTO = CreateIListDTO;
