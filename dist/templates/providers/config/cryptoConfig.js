export class CreateCryptoConfig {
    execute() {
        return `import { resolve } from 'path';

interface ICryptoConfigDTO {
  bytes: number;
  algorithm: string;
  encoding: BufferEncoding;
  secretKey: string;
  basePath: string;
  keysPath: string;
}

export const cryptoConfig: ICryptoConfigDTO = {
  bytes: 16,
  algorithm: 'aes-256-ctr',
  encoding: 'hex',
  secretKey: process.env.CRYPTO_SECRET_KEY ?? '',
  basePath: resolve(__dirname, '..', 'assets'),
  keysPath: resolve(__dirname, '..', 'assets', '.well-known', 'jwks.json'),
};
`;
    }
}
