"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createHashIndex;
function createHashIndex() {
  return `import { container } from 'tsyringe';

import BCryptHashProvider from './implementations/BCryptHashProvider';
import IHashProvider from './models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
`;
}