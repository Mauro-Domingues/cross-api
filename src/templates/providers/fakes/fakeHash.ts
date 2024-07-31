export class CreateFakeHash {
  public execute(): string {
    return `import { IHashProvider } ${'from'} '../models/IHashProvider';

export class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}
`;
  }
}
