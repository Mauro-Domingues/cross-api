"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCryptoIndex = void 0;
class CreateCryptoIndex {
  execute() {
    return `import { container } from 'tsyringe';

import CryptoProvider from './implementations/CryptoProvider';
import ICryptoProvider from './models/ICryptoProvider';

container.registerSingleton<ICryptoProvider>('CryptoProvider', CryptoProvider);
`;
  }
}
exports.CreateCryptoIndex = CreateCryptoIndex;