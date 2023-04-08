"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCrypto = void 0;
class CreateCrypto {
  execute() {
    return `import {
  randomBytes,
  createCipheriv,
  createDecipheriv,
  createHash,
  generateKeyPairSync,
} from 'crypto';
import {
  readFileSync,
  appendFileSync,
  truncateSync,
  existsSync,
  mkdirSync,
} from 'fs';
import { resolve } from 'path';
import { sign, SignOptions } from 'jsonwebtoken';
import { JWK, pem2jwk } from 'pem-jwk';
import { cryptoConfig } from '@config/crypto';
import { ICryptoDTO } from '../dtos/ICryptoDTO';
import { ICryptoProviderDTO } from '../models/ICryptoProvider';

export class CryptoProvider implements ICryptoProviderDTO {
  public async encrypt(text: string): Promise<ICryptoDTO> {
    const iv = randomBytes(16);

    const cipher = createCipheriv(
      cryptoConfig.algorithm,
      cryptoConfig.secretKey,
      iv,
    );

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString(cryptoConfig.encoding),
      content: encrypted.toString(cryptoConfig.encoding),
    };
  }

  public async decrypt(data: ICryptoDTO): Promise<string> {
    const decipher = createDecipheriv(
      cryptoConfig.algorithm,
      cryptoConfig.secretKey,
      Buffer.from(data.iv, cryptoConfig.encoding),
    );

    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(data.content, cryptoConfig.encoding)),
      decipher.final(),
    ]);

    return decrpyted.toString();
  }

  public async generateJwt(
    payload: object,
    options?: SignOptions,
  ): Promise<{
    jwt_token: string;
    refresh_token: string;
  }> {
    const secret = readFileSync(
      resolve(cryptoConfig.basePath, 'keys', 'private.pem'),
    );

    const jwtToken = sign(payload, secret, {
      expiresIn: process.env.JWT_LIFETIME || '1h',
      ...options,
      algorithm: 'RS256',
    });

    const refreshToken = createHash('sha256').update(jwtToken).digest('hex');

    return {
      jwt_token: jwtToken,
      refresh_token: refreshToken,
    };
  }

  public async generateKeys(): Promise<JWK<{ use: string }>> {
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

    if (!existsSync(resolve(cryptoConfig.basePath, 'keys'))) {
      mkdirSync(resolve(cryptoConfig.basePath, 'keys'));
    }

    if (!existsSync(resolve(cryptoConfig.basePath, '.well-known'))) {
      mkdirSync(resolve(cryptoConfig.basePath, '.well-known'));
    }

    if (existsSync(resolve(cryptoConfig.basePath, 'keys', 'private.pem'))) {
      truncateSync(resolve(cryptoConfig.basePath, 'keys', 'private.pem'));
    }

    appendFileSync(
      resolve(cryptoConfig.basePath, 'keys', 'private.pem'),
      privateExported,
    );

    if (existsSync(resolve(cryptoConfig.basePath, 'keys', 'public.pem'))) {
      truncateSync(resolve(cryptoConfig.basePath, 'keys', 'public.pem'));
    }

    appendFileSync(
      resolve(cryptoConfig.basePath, 'keys', 'public.pem'),
      publicExported,
    );

    if (
      existsSync(resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'))
    ) {
      truncateSync(resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'));
    }

    appendFileSync(
      resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'),
      JSON.stringify(jwksJson),
    );

    return parsedJwk;
  }
}
`;
  }
}
exports.CreateCrypto = CreateCrypto;