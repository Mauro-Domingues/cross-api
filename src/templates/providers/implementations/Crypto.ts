export function createCrypto(): string {
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
      fs.mkdir(path.resolve(cryptoConfig.basePath, 'keys'), error => {
        if (error) throw error;
      });
    }

    if (!fs.existsSync(path.resolve(cryptoConfig.basePath, '.well-known'))) {
      fs.mkdir(path.resolve(cryptoConfig.basePath, '.well-known'), error => {
        if (error) throw error;
      });
    }

    if (
      fs.existsSync(path.resolve(cryptoConfig.basePath, 'keys', 'private.pem'))
    ) {
      fs.truncate(
        path.resolve(cryptoConfig.basePath, 'keys', 'private.pem'),
        error => {
          if (error) throw error;
        },
      );
    }

    fs.appendFile(
      path.resolve(cryptoConfig.basePath, 'keys', 'private.pem'),
      privateExported,
      error => {
        if (error) throw error;
      },
    );

    if (
      fs.existsSync(path.resolve(cryptoConfig.basePath, 'keys', 'public.pem'))
    ) {
      fs.truncate(
        path.resolve(cryptoConfig.basePath, 'keys', 'public.pem'),
        error => {
          if (error) throw error;
        },
      );
    }

    fs.appendFile(
      path.resolve(cryptoConfig.basePath, 'keys', 'public.pem'),
      publicExported,
      error => {
        if (error) throw error;
      },
    );

    if (
      fs.existsSync(
        path.resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'),
      )
    ) {
      fs.truncate(
        path.resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'),
        error => {
          if (error) throw error;
        },
      );
    }

    fs.appendFile(
      path.resolve(cryptoConfig.basePath, '.well-known', 'jwks.json'),
      JSON.stringify(jwksJson),
      error => {
        if (error) throw error;
      },
    );

    return parsedJwk;
  }
}

export default CryptoProvider;
`;
}
