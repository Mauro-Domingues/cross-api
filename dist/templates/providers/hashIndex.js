"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateHashIndex = void 0;
class CreateHashIndex {
  execute() {
    return `import { container } from 'tsyringe';

import BCryptHashProvider from './implementations/BCryptHashProvider';
import IHashProvider from './models/IHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
`;
  }
}
exports.CreateHashIndex = CreateHashIndex;