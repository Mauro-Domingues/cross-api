"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createICrypto = createICrypto;
function createICrypto() {
  return `import { SignOptions } from 'jsonwebtoken';
import { Extras, JWK } from 'pem-jwk';
import ICryptoDTO from '../dtos/ICryptoDTO';

export default interface ICryptoProvider {
  encrypt(text: string): ICryptoDTO;
  decrypt(hash: ICryptoDTO): string;
  generateKeys(): JWK<Extras>;
  generateJwt(
    payload: object,
    options?: SignOptions,
  ): {
    jwtToken: string;
    refreshToken: string;
  };
}
`;
}