export class CreateCryptoEncryption {
  public execute(): string {
    return `import type { SignOptions } fr\u006Fm 'jsonwebtoken';
import { sign } fr\u006Fm 'jsonwebtoken';
import type { JWK } fr\u006Fm 'pem-jwk';
import { pem2jwk } fr\u006Fm 'pem-jwk';
import {
  createCipheriv,
  createDecipheriv,
  createHash,
  generateKeyPairSync,
  randomBytes,
} fr\u006Fm 'node:crypto';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  truncateSync,
} fr\u006Fm 'node:fs';
import { resolve } fr\u006Fm 'node:path';
import { encryptionConfig } fr\u006Fm '@config/encryption';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import type { IEncryptedDTO } fr\u006Fm '../dtos/IEncryptedDTO';
import type { IJwtTokenDTO } fr\u006Fm '../dtos/IJwtTokenDTO';
import type { IRefreshTokenDTO } fr\u006Fm '../dtos/IRefreshTokenDTO';
import type { IEncryptionProvider } fr\u006Fm '../models/IEncryptionProvider';

export class CryptoProvider implements IEncryptionProvider {
  private write(path: string, filename: string, data: string): void {
    if (!existsSync(resolve(path))) {
      mkdirSync(resolve(path), { recursive: true });
    }

    if (existsSync(resolve(path, filename))) {
      truncateSync(resolve(path, filename));
    }

    return appendFileSync(resolve(path, filename), data);
  }

  public encrypt(text: string): IEncryptedDTO {
    const iv = randomBytes(16);

    const cipher = createCipheriv(
      encryptionConfig.config.crypto.algorithm,
      encryptionConfig.config.crypto.secretKey,
      iv,
    );

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString(encryptionConfig.config.crypto.encoding),
      content: encrypted.toString(encryptionConfig.config.crypto.encoding),
    };
  }

  public decrypt(data: IEncryptedDTO): string {
    const decipher = createDecipheriv(
      encryptionConfig.config.crypto.algorithm,
      encryptionConfig.config.crypto.secretKey,
      Buffer.from(data.iv, encryptionConfig.config.crypto.encoding),
    );

    const decrpyted = Buffer.concat([
      decipher.update(
        Buffer.from(data.content, encryptionConfig.config.crypto.encoding),
      ),
      decipher.final(),
    ]);

    return decrpyted.toString();
  }

  public generateRefreshToken(id: string): IRefreshTokenDTO {
    const token = createHash('sha256').update(id).digest('hex');

    return { type: 'sha256', token };
  }

  public generateJwtToken<T extends object>(
    payload: T,
    options?: Omit<SignOptions, 'algorithm' | 'expiresIn'>,
  ): IJwtTokenDTO {
    const secret = readFileSync(
      resolve(encryptionConfig.config.keysPath, 'private.pem'),
    );

    const expiresIn = convertToMilliseconds(
      encryptionConfig.config.crypto.jwtLifetime,
    );

    const token = sign(payload, secret, {
      ...options,
      expiresIn: expiresIn / 1000,
      algorithm: 'RS256',
    });

    return { token, type: 'Bearer', expiresIn };
  }

  public generateKeys(): JWK<{ use: string }> {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
      modulusLength: 3072,
    });

    const publicExported = publicKey
      .export({
        format: 'pem',
        type: 'pkcs1',
      })
      .toString();

    const privateExported = privateKey
      .export({
        format: 'pem',
        type: 'pkcs1',
      })
      .toString();

    const parsedJwk = pem2jwk(publicExported, { use: 'sig' });

    const jwksJson = {
      keys: [parsedJwk],
    };

    this.write(
      encryptionConfig.config.keysPath,
      'private.pem',
      privateExported,
    );
    this.write(encryptionConfig.config.keysPath, 'public.pem', publicExported);
    this.write(
      resolve(encryptionConfig.config.assetsPath, '.well-known'),
      'jwks.json',
      JSON.stringify(jwksJson, null, 2),
    );

    return parsedJwk;
  }
}
`;
  }
}
