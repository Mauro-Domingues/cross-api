export class CreateBcryptHash {
  public execute(): string {
    return `import { compare, hash } fr\u006Fm 'bcrypt';
import { hashConfig } fr\u006Fm '@config/hash';
import type { IHashProvider } fr\u006Fm '../models/IHashProvider';

export class BcryptProvider implements IHashProvider {
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
