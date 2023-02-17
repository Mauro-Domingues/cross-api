"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIHash = createIHash;
function createIHash() {
  return `export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
`;
}