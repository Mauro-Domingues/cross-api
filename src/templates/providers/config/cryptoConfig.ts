export class CreateCryptoConfig {
  public execute(): string {
    return `import { resolve } ${'from'} 'node:path';

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
      readonly jwt_lifetime: string;
    };
  };
}

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
      jwt_lifetime: process.env.JWT_LIFETIME ?? '1d',
    },
  },
});
`;
  }
}
