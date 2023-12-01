export class CreateCrypto {
  public execute(): string {
    return `import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  createHash,
  generateKeyPairSync,
} ${'from'} 'crypto';
import {
  readFileSync,
  appendFileSync,
  truncateSync,
  existsSync,
  mkdirSync,
} ${'from'} 'fs';
import { resolve } ${'from'} 'path';
import { sign, SignOptions } ${'from'} 'jsonwebtoken';
import { JWK, pem2jwk } ${'from'} 'pem-jwk';
import { cryptoConfig } ${'from'} '@config/crypto';
import { authConfig } ${'from'} '@config/auth';
import { ICryptoDTO } ${'from'} '../dtos/ICryptoDTO';
import { ICryptoProviderDTO } ${'from'} '../models/ICryptoProvider';

export class CryptoProvider implements ICryptoProviderDTO {
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

    const refreshToken = createHash('sha256').update(ip).digest('hex');

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

    if (!existsSync(resolve(cryptoConfig.config.keysPath))) {
      mkdirSync(resolve(cryptoConfig.config.keysPath));
    }

    if (!existsSync(resolve(cryptoConfig.config.assetsPath, '.well-known'))) {
      mkdirSync(resolve(cryptoConfig.config.assetsPath, '.well-known'));
    }

    if (existsSync(resolve(cryptoConfig.config.keysPath, 'private.pem'))) {
      truncateSync(resolve(cryptoConfig.config.keysPath, 'private.pem'));
    }

    appendFileSync(
      resolve(cryptoConfig.config.keysPath, 'private.pem'),
      privateExported,
    );

    if (existsSync(resolve(cryptoConfig.config.keysPath, 'public.pem'))) {
      truncateSync(resolve(cryptoConfig.config.keysPath, 'public.pem'));
    }

    appendFileSync(
      resolve(cryptoConfig.config.keysPath, 'public.pem'),
      publicExported,
    );

    if (
      existsSync(
        resolve(cryptoConfig.config.assetsPath, '.well-known', 'jwks.json'),
      )
    ) {
      truncateSync(
        resolve(cryptoConfig.config.assetsPath, '.well-known', 'jwks.json'),
      );
    }

    appendFileSync(
      resolve(cryptoConfig.config.assetsPath, '.well-known', 'jwks.json'),
      JSON.stringify(jwksJson, null, 2),
    );

    return parsedJwk;
  }
}
`;
  }
}
