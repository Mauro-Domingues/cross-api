export class CreateCryptoConfig {
  public execute(): string {
    return `import { resolve } ${'from'} 'path';

interface ICryptoConfigDTO {
  driver: 'crypto';
  config: {
    bytes: number;
    algorithm: string;
    encoding: BufferEncoding;
    secretKey: string;
    basePath: string;
    keysPath: string;
  };
}

export const cryptoConfig: ICryptoConfigDTO = {
  driver: 'crypto',
  config: {
    bytes: 16,
    algorithm: 'aes-256-ctr',
    encoding: 'hex',
    secretKey: process.env.CRYPTO_SECRET_KEY ?? '',
    basePath: resolve(__dirname, '..', 'assets'),
    keysPath: resolve(__dirname, '..', 'assets', '.well-known', 'jwks.json'),
  },
};
`;
  }
}
