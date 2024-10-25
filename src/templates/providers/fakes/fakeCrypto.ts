export class CreateFakeCrypto {
  public execute(): string {
    return `import { JWK } ${'from'} 'pem-jwk';
import { cryptoConfig } ${'from'} '@config/crypto';
import { readFileSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';
import { createHash } ${'from'} 'node:crypto';
import { ICryptoDTO } ${'from'} '../dtos/ICryptoDTO';
import { ICryptoProvider } ${'from'} '../models/ICryptoProvider';

export class FakeCryptoProvider implements ICryptoProvider {
  public encrypt(text: string): ICryptoDTO {
    return {
      iv: 'base64',
      content: Buffer.from(text).toString('base64'),
    };
  }

  public decrypt({ content }: ICryptoDTO): string {
    return Buffer.from(content, 'base64').toString('utf-8');
  }

  public generateJwt(
    payload: object,
    ip: string,
  ): {
    jwtToken: string;
    refreshToken: string;
  } {
    const jwtToken = Buffer.from(
      JSON.stringify({ ...payload, exp: Date.now() + 3600 * 1000, ip }),
    ).toString('base64');

    const refreshToken = createHash('sha256').update(ip).digest('hex');

    return {
      jwtToken,
      refreshToken,
    };
  }

  public generateKeys(): JWK<{ use: string }> {
    const publicKey = readFileSync(
      resolve(cryptoConfig.config.keysPath, 'public.pem'),
      { encoding: 'base64' },
    );

    return {
      kty: 'RSA',
      n: publicKey,
      e: 'AQAB',
      use: 'sig',
    };
  }
}
`;
  }
}
