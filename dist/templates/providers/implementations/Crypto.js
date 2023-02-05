"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createCrypto;
function createCrypto() {
  return `import crypto from 'crypto';
import cryptoConfig from '@config/crypto';
import fs from 'fs';
import { sign, SignOptions } from 'jsonwebtoken';
import { Extras, JWK, pem2jwk } from 'pem-jwk';
import ICryptoDTO from '../dtos/ICryptoDTO';
import ICryptoProvider from '../models/ICryptoProvider';

class CryptoProvider implements ICryptoProvider {
  public encrypt(text: string): ICryptoDTO {
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

  public decrypt(data: ICryptoDTO): string {
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

  generateJwt(
    payload: object,
    options?: SignOptions,
  ): {
    jwtToken: string;
    refreshToken: string;
  } {
    const secret = fs.readFileSync('src/assets/keys/private.pem');
    const jwtToken = sign(payload, secret, {
      expiresIn: process.env.JWT_LIFETIME || '1h',
      ...options,
      algorithm: 'RS256',
    });

    const publicPem = fs.readFileSync('src/assets/keys/public.pem');

    const refreshToken = crypto
      .createHash('sha256')
      .update(publicPem)
      .digest('hex');

    return {
      jwtToken,
      refreshToken,
    };
  }

  public generateKeys(): JWK<Extras> {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
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

    const parsedJwk = pem2jwk(publicExported);

    const jwksJson = {
      keys: [
        {
          ...parsedJwk,
          use: 'sig',
        },
      ],
    };

    if (!fs.existsSync('src/assets/keys')) {
      fs.mkdir('src/assets/keys', error => {
        if (error) throw error;
      });
    }

    if (!fs.existsSync('src/assets/.well-known')) {
      fs.mkdir('src/assets/.well-known', error => {
        if (error) throw error;
      });
    }

    if (fs.existsSync('src/assets/keys/private.pem')) {
      fs.truncate('src/assets/keys/private.pem', error => {
        if (error) throw error;
      });
    }

    fs.appendFile('src/assets/keys/private.pem', privateExported, error => {
      if (error) throw error;
    });

    if (fs.existsSync('src/assets/keys/public.pem')) {
      fs.truncate('src/assets/keys/public.pem', error => {
        if (error) throw error;
      });
    }

    fs.appendFile('src/assets/keys/public.pem', publicExported, error => {
      if (error) throw error;
    });

    if (fs.existsSync('src/assets/.well-known/jwks.json')) {
      fs.truncate('src/assets/.well-known/jwks.json', error => {
        if (error) throw error;
      });
    }

    fs.appendFile(
      'src/assets/.well-known/jwks.json',
      JSON.stringify(jwksJson),
      error => {
        if (error) throw error;
      },
    );

    return {
      ...parsedJwk,
      use: 'sig',
    };
  }
}

export default CryptoProvider;
`;
}