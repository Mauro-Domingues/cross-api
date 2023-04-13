"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateIStorage = void 0;
class CreateIStorage {
    execute() {
        return `export interface IStorageProviderDTO {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
`;
    }
}
exports.CreateIStorage = CreateIStorage;
