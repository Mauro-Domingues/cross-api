"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateIHash = void 0;
class CreateIHash {
  execute() {
    return `export default interface IHashProvider {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
`;
  }
}
exports.CreateIHash = CreateIHash;