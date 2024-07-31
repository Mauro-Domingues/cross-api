export class CreateFakeCrypto {
  public execute(): string {
    return `import { JWK } ${'from'} 'pem-jwk';
import { ICryptoDTO } ${'from'} '../dtos/ICryptoDTO';
import { ICryptoProvider } ${'from'} '../models/ICryptoProvider';

export class FakeCryptoProvider implements ICryptoProvider {
  public encrypt(text: string): ICryptoDTO {
    return {
      iv: 'iv',
      content: text,
    };
  }

  public decrypt({ content }: ICryptoDTO): string {
    return content;
  }

  public generateRefreshToken(ip: string): string {
    return ip;
  }

  public generateJwt(): {
    jwt_token: string;
    refresh_token: string;
  } {
    return {
      jwt_token: 'jwt_token',
      refresh_token: 'refresh_token',
    };
  }

  public generateKeys(): JWK<{ use: string }> {
    return {
      kty: 'RSA',
      n: 'hash',
      e: 'AQAB',
      use: 'sig',
    };
  }
}
`;
  }
}
