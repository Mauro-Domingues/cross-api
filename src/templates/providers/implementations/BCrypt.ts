export default function createHash(): string {
  return `import { hash, compare } from 'bcrypt';
import hashConfig from '@config/hash';

import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, hashConfig.secret);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}

export default BCryptHashProvider;
`;
}
