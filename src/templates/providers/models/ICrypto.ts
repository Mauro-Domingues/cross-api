export function createICrypto(): string {
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
