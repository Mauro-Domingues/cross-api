"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateICacheDTO = void 0;
class CreateICacheDTO {
    execute() {
        return `export default interface ICacheDTO<T> {
  data: T[];
  total: number;
}
`;
    }
}
exports.CreateICacheDTO = CreateICacheDTO;
