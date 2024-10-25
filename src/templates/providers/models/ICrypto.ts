export class CreateICrypto {
  public execute(): string {
    return `import { SignOptions } ${'from'} 'jsonwebtoken';
import { JWK } ${'from'} 'pem-jwk';
import { ICryptoDTO } ${'from'} '../dtos/ICryptoDTO';

export interface ICryptoProvider {
  encrypt(text: string): ICryptoDTO;
  decrypt(hash: ICryptoDTO): string;
  generateKeys(): JWK<{
    use: string;
  }>;
  generateJwt(
    payload: object,
    ip: string,
    options?: Omit<SignOptions, 'algorithm'>,
  ): {
    jwtToken: string;
    refreshToken: string;
  };
}
`;
  }
}
