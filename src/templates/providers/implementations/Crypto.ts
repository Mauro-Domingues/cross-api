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
import { authConfig } ${'from'} '@config/auth';
import { ICryptoDTO } ${'from'} '../dtos/ICryptoDTO';
import { ICryptoProvider } ${'from'} '../models/ICryptoProvider';

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

  private generateRefreshToken(ip: string): string {
    return createHash('sha256').update(ip).digest('hex');
  }

  public encrypt(text: string): ICryptoDTO {
    const iv = randomBytes(16);

    const cipher = createCipheriv(
      cryptoConfig.config.algorithm,
      cryptoConfig.config.secretKey,
      iv,
    );

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString(cryptoConfig.config.encoding),
      content: encrypted.toString(cryptoConfig.config.encoding),
    };
  }

  public decrypt(data: ICryptoDTO): string {
    const decipher = createDecipheriv(
      cryptoConfig.config.algorithm,
      cryptoConfig.config.secretKey,
      Buffer.from(data.iv, cryptoConfig.config.encoding),
    );

    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(data.content, cryptoConfig.config.encoding)),
      decipher.final(),
    ]);

    return decrpyted.toString();
  }

  public generateJwt(
    payload: object,
    ip: string,
    options?: Omit<SignOptions, 'algorithm'>,
  ): {
    jwt_token: string;
    refresh_token: string;
  } {
    const secret = readFileSync(
      resolve(cryptoConfig.config.keysPath, 'private.pem'),
    );

    const jwtToken = sign(payload, secret, {
      expiresIn: authConfig.config.jwt.expiresIn,
      ...options,
      algorithm: 'RS256',
    });

    const refreshToken = this.generateRefreshToken(ip);

    return {
      jwt_token: jwtToken,
      refresh_token: refreshToken,
    };
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
