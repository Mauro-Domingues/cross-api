"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFakeHash;
function createFakeHash() {
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