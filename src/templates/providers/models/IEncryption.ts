export class CreateIEncryption {
  public execute(): string {
    return `import type { SignOptions } fr\u006Fm 'jsonwebtoken';
import type { JWK } fr\u006Fm 'pem-jwk';
import type { IEncryptedDTO } fr\u006Fm '../dtos/IEncryptedDTO';
import type { IJwtTokenDTO } fr\u006Fm '../dtos/IJwtTokenDTO';
import type { IRefreshTokenDTO } fr\u006Fm '../dtos/IRefreshTokenDTO';

export interface IEncryptionProvider {
  encrypt(text: string): IEncryptedDTO;
  decrypt(hash: IEncryptedDTO): string;
  generateKeys(): JWK<{
    use: string;
  }>;
  generateRefreshToken(id: string): IRefreshTokenDTO;
  generateJwtToken<T extends object>(
    payload: T,
    options?: Omit<SignOptions, 'algorithm' | 'expiresIn'>,
  ): IJwtTokenDTO;
}
`;
  }
}
