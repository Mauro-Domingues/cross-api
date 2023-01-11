export default function createCryptoConfig(): string {
  return `enum encodingTypes {
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
}

export default {
  bytes: 16,
  algorithm: 'aes-256-ctr',
  encoding: 'hex',
  secretKey: process.env.CRYPTO_SECRET_KEY || '',
} as ICryptoConfig;
`;
}
