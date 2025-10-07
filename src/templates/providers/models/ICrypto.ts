export class CreateICrypto {
  public execute(): string {
    return `import { SignOptions } fr\om 'jsonwebtoken';
import { JWK } fr\om 'pem-jwk';
import { IEncryptedDTO } fr\om '../dtos/IEncryptedDTO';
import { IRefreshTokenDTO } fr\om '../dtos/IRefreshTokenDTO';
import { IJwtTokenDTO } fr\om '../dtos/IJwtTokenDTO';

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
