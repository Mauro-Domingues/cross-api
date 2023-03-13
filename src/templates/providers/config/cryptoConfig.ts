export class createCryptoConfig {
  public execute(): string {
    return `import path from 'path';

enum encodingTypes {
  'default' = 'hex',
  'unicode8' = 'utf-8',
  'unicode16' = 'utf-16',
  'unicode32' = 'utf-32',
  'ascii' = 'ascii',
  'base64' = 'base64',
}

interface ICryptoConfig {
  bytes: number;
  algorithm: string;
  encoding: encodingTypes.default;
  secretKey: string;
  basePath: string;
}

export default {
  bytes: 16,
  algorithm: 'aes-256-ctr',
  encoding: 'hex',
  secretKey: process.env.CRYPTO_SECRET_KEY || '',
  basePath: path.resolve(__dirname, '..', 'assets'),
} as ICryptoConfig;
`;
  }
}
