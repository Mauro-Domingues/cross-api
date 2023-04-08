"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateHashIndex = void 0;
class CreateHashIndex {
  execute() {
    return `import { container } from 'tsyringe';

import { BCryptHashProvider } from './implementations/BCryptHashProvider';
import { IHashProviderDTO } from './models/IHashProvider';

const providers = {
  bcrypt: container.resolve(BCryptHashProvider),
};

container.registerInstance<IHashProviderDTO>('HashProvider', providers.bcrypt);
`;
  }
}
exports.CreateHashIndex = CreateHashIndex;