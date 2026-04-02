export class CreateFakeEncryption {
  public execute(): string {
    return `import type { JWK } fr\u006Fm 'pem-jwk';
import { createHash } fr\u006Fm 'node:crypto';
import { readFileSync } fr\u006Fm 'node:fs';
import { resolve } fr\u006Fm 'node:path';
import { encryptionConfig } fr\u006Fm '@config/encryption';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import type { IEncryptedDTO } fr\u006Fm '../dtos/IEncryptedDTO';
import type { IJwtTokenDTO } fr\u006Fm '../dtos/IJwtTokenDTO';
import type { IRefreshTokenDTO } fr\u006Fm '../dtos/IRefreshTokenDTO';
import type { IEncryptionProvider } fr\u006Fm '../models/IEncryptionProvider';

export class FakeEncryptionProvider implements IEncryptionProvider {
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
      encryptionConfig.config.crypto.jwtLifetime,
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
      resolve(encryptionConfig.config.keysPath, 'public.pem'),
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
