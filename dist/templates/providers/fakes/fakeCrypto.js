"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createFakeCrypto;
function createFakeCrypto() {
  return `import ICryptoDTO from '../dtos/ICryptoDTO';
import ICryptoProvider from '../models/ICryptoProvider';

class FakeCryptoProvider implements ICryptoProvider {
  encrypt(text: string): ICryptoDTO {
    return {
      iv: 'fakeHash',
      content: text,
    };
  }

  decrypt(hash: ICryptoDTO): string {
    return hash.content;
  }

  generateKeys(): {
    hashToken: string;
    publicKey: string;
    privateKey: string;
  } {
    return {
      hashToken: 'token',
      publicKey: 'pubic_key',
      privateKey: 'private_key',
    };
  }
}

export default FakeCryptoProvider;
`;
}