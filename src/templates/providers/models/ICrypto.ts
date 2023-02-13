export function createICrypto(): string {
  return `import { SignOptions } from 'jsonwebtoken';
import { JWK } from 'pem-jwk';
import ICryptoDTO from '../dtos/ICryptoDTO';

export default interface ICryptoProvider {
  encrypt(text: string): Promise<ICryptoDTO>;
  decrypt(hash: ICryptoDTO): Promise<string>;
  generateKeys(): Promise<
    JWK<{
      use: string;
    }>
  >;
  generateJwt(
    payload: object,
    options?: SignOptions,
  ): Promise<{
    jwt_token: string;
    refresh_token: string;
  }>;
}
`;
}
