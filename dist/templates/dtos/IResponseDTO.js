"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIResponseDTO = void 0;
class CreateIResponseDTO {
    execute() {
        return `export interface IResponseDTO<T> {
  code: number;
  message_code: string;
  message: string;
  data: T;
}
`;
    }
}
exports.CreateIResponseDTO = CreateIResponseDTO;
