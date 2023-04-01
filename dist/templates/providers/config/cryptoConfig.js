"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCryptoConfig = void 0;
class CreateCryptoConfig {
  execute() {
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
  keysPath: string;
}

export default {
  bytes: 16,
  algorithm: 'aes-256-ctr',
  encoding: 'hex',
  secretKey: process.env.CRYPTO_SECRET_KEY || '',
  basePath: path.resolve(__dirname, '..', 'assets'),
  keysPath: path.resolve(__dirname, '..', 'assets', '.well-known', 'jwks.json'),
} as ICryptoConfig;
`;
  }
}
exports.CreateCryptoConfig = CreateCryptoConfig;