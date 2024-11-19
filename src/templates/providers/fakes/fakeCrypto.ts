export class CreateFakeCrypto {
  public execute(): string {
    return `import { JWK } ${'from'} 'pem-jwk';
import { cryptoConfig } ${'from'} '@config/crypto';
import { readFileSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';
import { createHash } ${'from'} 'node:crypto';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IEncryptedDTO } ${'from'} '../dtos/IEncryptedDTO';
import { ICryptoProvider } ${'from'} '../models/ICryptoProvider';
import { IRefreshTokenDTO } ${'from'} '../dtos/IRefreshTokenDTO';
import { IJwtTokenDTO } ${'from'} '../dtos/IJwtTokenDTO';

export class FakeCryptoProvider implements ICryptoProvider {
  public encrypt(text: string): IEncryptedDTO {
    return {
      iv: 'base64',
      content: Buffer.from(text).toString('base64'),
    };
  }

  public decrypt({ content }: IEncryptedDTO): string {
    return Buffer.from(content, 'base64').toString('utf-8');
  }

  public generateRefreshToken(id: string): IRefreshTokenDTO {
    const token = createHash('sha256').update(id).digest('hex');

    return { type: 'sha256', token };
  }

  public generateJwt({ id, payload }: { payload: object; id: string }): {
    jwtToken: IJwtTokenDTO;
    refreshToken: IRefreshTokenDTO;
  } {
    const expiresIn = convertToMilliseconds(
      cryptoConfig.config.crypto.jwtLifetime,
    );

    const token = Buffer.from(
      JSON.stringify({
        exp: Math.floor((Date.now() + expiresIn) / 1000),
        ...payload,
        id,
      }),
    ).toString('base64');

    const refreshToken = this.generateRefreshToken(id);

    return {
      jwtToken: { token, type: 'Bearer', expiresIn },
      refreshToken,
    };
  }

  public generateKeys(): JWK<{ use: string }> {
    const publicKey = readFileSync(
      resolve(cryptoConfig.config.keysPath, 'public.pem'),
      { encoding: 'base64' },
    );

    return {
      kty: 'RSA',
      n: publicKey,
      e: 'AQAB',
      use: 'sig',
    };
  }
}
`;
  }
}
