export class CreateFakeHash {
  public execute(): string {
    return `import { createHmac } fr\u006Fm 'node:crypto';
import { hashConfig } fr\u006Fm '@config/hash';
import type { IHashProvider } fr\u006Fm '../models/IHashProvider';

export class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    const hash = createHmac('sha256', hashConfig.config.salt.toString())
      .update(payload)
      .digest('hex');

    return hash;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    const hash = createHmac('sha256', hashConfig.config.salt.toString())
      .update(payload)
      .digest('hex');

    return hash === hashed;
  }
}
`;
  }
}
