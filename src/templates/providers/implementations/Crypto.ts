export default function createCrypto(): string {
  return `import crypto from 'crypto';
import cryptoConfig from '@config/crypto';
import ICryptoDTO from '../dtos/ICryptoDTO';
import ICryptoProvider from '../models/ICryptoProvider';

class CryptoProvider implements ICryptoProvider {
  public encrypt(text: string): ICryptoDTO {
    const iv = crypto.randomBytes(16);

    const cipher = crypto.createCipheriv(
      cryptoConfig.algorithm,
      cryptoConfig.secretKey,
      iv,
    );

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
      iv: iv.toString(cryptoConfig.encoding),
      content: encrypted.toString(cryptoConfig.encoding),
    };
  }

  public decrypt(data: ICryptoDTO): string {
    const decipher = crypto.createDecipheriv(
      cryptoConfig.algorithm,
      cryptoConfig.secretKey,
      Buffer.from(data.iv, cryptoConfig.encoding),
    );

    const decrpyted = Buffer.concat([
      decipher.update(Buffer.from(data.content, cryptoConfig.encoding)),
      decipher.final(),
    ]);

    return decrpyted.toString();
  }
}

export default CryptoProvider;
`;
}
