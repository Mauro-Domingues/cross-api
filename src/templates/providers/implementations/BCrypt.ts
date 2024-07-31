export class CreateHash {
  public execute(): string {
    return `import { hash, compare } ${'from'} 'bcrypt';
import { hashConfig } ${'from'} '@config/hash';
import { IHashProvider } ${'from'} '../models/IHashProvider';

export class BCryptHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, hashConfig.config.secret);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
`;
  }
}
