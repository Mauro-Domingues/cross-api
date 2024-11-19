export class CreateICrypto {
  public execute(): string {
    return `import { SignOptions } ${'from'} 'jsonwebtoken';
import { JWK } ${'from'} 'pem-jwk';
import { IEncryptedDTO } ${'from'} '../dtos/IEncryptedDTO';
import { IRefreshTokenDTO } ${'from'} '../dtos/IRefreshTokenDTO';
import { IJwtTokenDTO } ${'from'} '../dtos/IJwtTokenDTO';

export interface ICryptoProvider {
  encrypt(text: string): IEncryptedDTO;
  decrypt(hash: IEncryptedDTO): string;
  generateKeys(): JWK<{
    use: string;
  }>;
  generateRefreshToken(id: string): IRefreshTokenDTO;
  generateJwt(data: {
    payload: object;
    id: string;
    options?: Omit<SignOptions, 'algorithm'>;
  }): {
    jwtToken: IJwtTokenDTO;
    refreshToken: IRefreshTokenDTO;
  };
}
`;
  }
}
