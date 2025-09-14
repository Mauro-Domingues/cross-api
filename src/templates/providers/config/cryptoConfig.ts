export class CreateCryptoConfig {
  public execute(): string {
    return `import { Joi } ${'from'} 'celebrate';
import { resolve } ${'from'} 'node:path';
import { getCiphers } ${'from'} 'node:crypto';
import { IIntervalDTO } ${'from'} '@dtos/IIntervalDTO';

interface ICryptoConfigDTO {
  readonly driver: 'crypto';
  readonly config: {
    readonly assetsPath: string;
    readonly keysPath: string;
    readonly jwksPath: string;
    readonly crypto: {
      readonly bytes: number;
      readonly algorithm: string;
      readonly encoding: BufferEncoding;
      readonly secretKey: string;
      readonly jwtLifetime: IIntervalDTO;
    };
  };
}

const cryptoValidator = Joi.object<ICryptoConfigDTO>({
  driver: Joi.string().valid('crypto').required(),
  config: Joi.object<ICryptoConfigDTO['config']>({
    assetsPath: Joi.string().required(),
    keysPath: Joi.string().required(),
    jwksPath: Joi.string().required(),
    crypto: Joi.object<ICryptoConfigDTO['config']['crypto']>({
      bytes: Joi.number().integer().min(1).required(),
      algorithm: Joi.string()
        .valid(...getCiphers())
        .required(),
      encoding: Joi.string()
        .valid(
          'ascii',
          'utf8',
          'utf-8',
          'utf16le',
          'utf-16le',
          'ucs2',
          'ucs-2',
          'base64',
          'base64url',
          'latin1',
          'binary',
          'hex',
        )
        .required(),
      secretKey: Joi.string()
        .length(
          Joi.ref('bytes', {
            adjust: value => value * 2,
          }),
        )
        .required()
        .allow('')
        .required(),
      jwtLifetime: Joi.string()
        .pattern(/^\\d+(d|h|min|s|ms)$/)
        .required(),
    }).required(),
  }).required(),
});

export const cryptoConfig = Object.freeze<ICryptoConfigDTO>({
  driver: 'crypto',
  config: {
    keysPath: resolve(__dirname, '..', 'keys'),
    assetsPath: resolve(__dirname, '..', 'assets'),
    jwksPath: resolve(__dirname, '..', 'assets', '.well-known', 'jwks.json'),
    crypto: {
      bytes: 16,
      algorithm: 'aes-256-ctr',
      encoding: 'hex',
      secretKey: process.env.CRYPTO_SECRET_KEY,
      jwtLifetime: process.env.JWT_LIFETIME ?? '1d',
    },
  },
});

cryptoValidator.validateAsync(cryptoConfig);
`;
  }
}
