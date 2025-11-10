export class CreateHash {
  public execute(): string {
    return `import { hash, compare } fr\om 'bcrypt';
import { hashConfig } fr\om '@config/hash';
import type { IHashProvider } fr\om '../models/IHashProvider';

export class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, hashConfig.config.salt);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
`;
  }
}
