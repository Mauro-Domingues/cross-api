export default function createFakeCrypto(): string {
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
}

export default FakeCryptoProvider;
`;
}
