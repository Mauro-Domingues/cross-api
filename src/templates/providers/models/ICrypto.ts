export class CreateICrypto {
  public execute(): string {
    return `import type { SignOptions } fr\om 'jsonwebtoken';
import type { JWK } fr\om 'pem-jwk';
import type { IEncryptedDTO } fr\om '../dtos/IEncryptedDTO';
import type { IJwtTokenDTO } fr\om '../dtos/IJwtTokenDTO';
import type { IRefreshTokenDTO } fr\om '../dtos/IRefreshTokenDTO';

export interface ICryptoProvider {
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
