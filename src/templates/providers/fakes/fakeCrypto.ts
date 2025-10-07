export class CreateFakeCrypto {
  public execute(): string {
    return `import { JWK } fr\om 'pem-jwk';
import { cryptoConfig } fr\om '@config/crypto';
import { readFileSync } fr\om 'node:fs';
import { resolve } fr\om 'node:path';
import { createHash } fr\om 'node:crypto';
import { convertToMilliseconds } fr\om '@utils/convertToMilliseconds';
import { IEncryptedDTO } fr\om '../dtos/IEncryptedDTO';
import { ICryptoProvider } fr\om '../models/ICryptoProvider';
import { IRefreshTokenDTO } fr\om '../dtos/IRefreshTokenDTO';
import { IJwtTokenDTO } fr\om '../dtos/IJwtTokenDTO';

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

  public generateJwtToken<T extends object>(payload: T): IJwtTokenDTO {
    const expiresIn = convertToMilliseconds(
      cryptoConfig.config.crypto.jwtLifetime,
    );

    const token = Buffer.from(
      JSON.stringify({
        exp: Math.floor((Date.now() + expiresIn) / 1000),
        ...payload,
      }),
    ).toString('base64');

    return { token, type: 'Bearer', expiresIn };
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
