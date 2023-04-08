"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateHash = void 0;
class CreateHash {
  execute() {
    return `import { hash, compare } from 'bcrypt';
import { hashConfig } from '@config/hash';

import { IHashProviderDTO } from '../models/IHashProvider';

export class BCryptHashProvider implements IHashProviderDTO {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, hashConfig.secret);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
`;
  }
}
exports.CreateHash = CreateHash;