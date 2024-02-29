export class CreateEnsureAuthenticated {
  public execute(): string {
    return `// import { readFileSync } ${'from'} 'node:fs';
// import { resolve } ${'from'} 'node:path';
import { expressjwt } ${'from'} 'express-jwt';
import { expressJwtSecret, GetVerificationKey } ${'from'} 'jwks-rsa';
// import { cryptoConfig } ${'from'} '@config/crypto';

export const ensureAuthenticated: ReturnType<typeof expressjwt> = expressjwt({
  secret: ((): Buffer | GetVerificationKey => {
    // if (process.env.NODE_ENV === 'test') {
    //   return readFileSync(resolve(cryptoConfig.config.keysPath, 'public.pem'));
    // }
    return expressJwtSecret({
      jwksUri: \`\${process.env.API_URL}/jwks\`,
      cache: true,
      rateLimit: true,
    }) as GetVerificationKey;
  })(),
  algorithms: ['RS256'],
});
`;
  }
}
