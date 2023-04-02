"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCrypto = void 0;
class CreateCrypto {
  execute() {
    return `import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { sign, SignOptions } from 'jsonwebtoken';
import { JWK, pem2jwk } from 'pem-jwk';
import cryptoConfig from '@config/crypto';
import ICryptoDTO from '../dtos/ICryptoDTO';
import ICryptoProvider from '../models/ICryptoProvider';

class CryptoProvider implements ICryptoProvider {
  public async encrypt(text: string): Promise<ICryptoDTO> {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(
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
    const decipher = crypto.createDecipheriv(
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
    const secret = fs.readFileSync(
      path.resolve(cryptoConfig.basePath, 'keys', 'private.pem'),
    );

    const jwtToken = sign(payload, secret, {
      expiresIn: process.env.JWT_LIFETIME || '1h',
      ...options,
      algorithm: 'RS256',
    });

    const refreshToken = crypto
      .createHash('sha256')
      .update(jwtToken)
      .digest('hex');

    return {
      jwt_token: jwtToken,
      refresh_token: refreshToken,
    };
  }

  public async generateKeys(): Promise<JWK<{ use: string }>> {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
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

    if (!fs.existsSync(path.resolve(cryptoConfig.basePath, 'keys'))) {
      fs.mkdirSync(path.resolve(cryptoConfig.basePath, 'keys'));
    }

    if (!fs.existsSync(path.resolve(cryptoConfig.basePath, '.well-known'))) {
      fs.mkdirSync(path.resolve(cryptoConfig.basePath, '.well-known'));
    }

    if (
      fs.existsSync(path.resolve(cryptoConfig.basePath, 'keys', 'private.pem'))
    ) {
      fs.truncateSync(
        path.resolve(cryptoConfig.basePath, 'keys', 'private.pem'),
      );
    }

    fs.appendFileSync(
      path.resolve(cryptoConfig.basePath, 'keys', 'private.pem'),
      privateExported,
    );

    if (
      fs.existsSync(path.resolve(cryptoConfig.basePath, 'keys', 'public.pem'))
    ) {
      fs.truncateSync(
        path.resolve(cryptoConfig.basePath, 'keys', 'public.pem'),
      );
    }

    fs.appendFileSync(
      path.resolve(cryptoConfig.basePath, 'keys', 'public.pem'),
      publicExported,
    );

    if (
      fs.existsSync(
        path.resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'),
      )
    ) {
      fs.truncateSync(
        path.resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'),
      );
    }

    fs.appendFileSync(
      path.resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'),
      JSON.stringify(jwksJson),
    );

    return parsedJwk;
  }
}

export default CryptoProvider;
`;
  }
}
exports.CreateCrypto = CreateCrypto;