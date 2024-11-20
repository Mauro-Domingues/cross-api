export class CreateCrypto {
  public execute(): string {
    return `import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  createHash,
  generateKeyPairSync,
} ${'from'} 'node:crypto';
import {
  readFileSync,
  appendFileSync,
  truncateSync,
  existsSync,
  mkdirSync,
} ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';
import { sign, SignOptions } ${'from'} 'jsonwebtoken';
import { JWK, pem2jwk } ${'from'} 'pem-jwk';
import { cryptoConfig } ${'from'} '@config/crypto';
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import { IEncryptedDTO } ${'from'} '../dtos/IEncryptedDTO';
import { ICryptoProvider } ${'from'} '../models/ICryptoProvider';
import { IRefreshTokenDTO } ${'from'} '../dtos/IRefreshTokenDTO';
import { IJwtTokenDTO } ${'from'} '../dtos/IJwtTokenDTO';

export class CryptoProvider implements ICryptoProvider {
  private write(path: string, filename: string, data: string): void {
    if (!existsSync(resolve(path))) {
      mkdirSync(resolve(path), { recursive: true });
    }

    if (existsSync(resolve(path, filename))) {
      truncateSync(resolve(path, filename));
    }

    appendFileSync(resolve(path, filename), data);
  }

  public encrypt(text: string): IEncryptedDTO {
    const iv = randomBytes(16);

    const cipher = createCipheriv(
      cryptoConfig.config.crypto.algorithm,
      cryptoConfig.config.crypto.secretKey,
      iv,
    );

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString(cryptoConfig.config.crypto.encoding),
      content: encrypted.toString(cryptoConfig.config.crypto.encoding),
    };
  }

  public decrypt(data: IEncryptedDTO): string {
    const decipher = createDecipheriv(
      cryptoConfig.config.crypto.algorithm,
      cryptoConfig.config.crypto.secretKey,
      Buffer.from(data.iv, cryptoConfig.config.crypto.encoding),
    );

    const decrpyted = Buffer.concat([
      decipher.update(
        Buffer.from(data.content, cryptoConfig.config.crypto.encoding),
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
      resolve(cryptoConfig.config.keysPath, 'private.pem'),
    );

    const expiresIn = convertToMilliseconds(
      cryptoConfig.config.crypto.jwtLifetime,
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

    this.write(cryptoConfig.config.keysPath, 'private.pem', privateExported);
    this.write(cryptoConfig.config.keysPath, 'public.pem', publicExported);
    this.write(
      resolve(cryptoConfig.config.assetsPath, '.well-known'),
      'jwks.json',
      JSON.stringify(jwksJson, null, 2),
    );

    return parsedJwk;
  }
}
`;
  }
}
