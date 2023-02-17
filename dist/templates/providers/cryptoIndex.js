"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCryptoIndex = createCryptoIndex;
function createCryptoIndex() {
  return `import { container } from 'tsyringe';

import CryptoProvider from './implementations/CryptoProvider';
import ICryptoProvider from './models/ICryptoProvider';

container.registerSingleton<ICryptoProvider>('CryptoProvider', CryptoProvider);
`;
}