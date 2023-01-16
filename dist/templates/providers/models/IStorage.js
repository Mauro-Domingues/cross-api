"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createIStorage;
function createIStorage() {
  return `export default interface IStorageProvider {
  saveFile(file: string): Promise<string>;
  deleteFile(file: string): Promise<void>;
}
`;
}