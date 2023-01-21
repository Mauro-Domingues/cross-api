"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createICrypto;
function createICrypto() {
  return `import ICryptoDTO from '../dtos/ICryptoDTO';

export default interface ICryptoProvider {
  encrypt(text: string): ICryptoDTO;
  decrypt(hash: ICryptoDTO): string;
}
`;
}