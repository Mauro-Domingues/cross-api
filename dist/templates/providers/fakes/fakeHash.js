"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateFakeHash = void 0;
class CreateFakeHash {
    execute() {
        return `import IHashProvider from '../models/IHashProvider';

class FakeHashProvider implements IHashProvider {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}

export default FakeHashProvider;
`;
    }
}
exports.CreateFakeHash = CreateFakeHash;
