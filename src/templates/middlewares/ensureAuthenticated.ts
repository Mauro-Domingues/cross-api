export class CreateEnsureAuthenticated {
  public execute(): string {
    return `// import { readFileSync } ${'from'} 'node:fs';
// import { resolve } ${'from'} 'node:path';
import { expressjwt, GetVerificationKey } ${'from'} 'express-jwt';
import { expressJwtSecret } ${'from'} 'jwks-rsa';
import { Secret } ${'from'} 'jsonwebtoken';
// import { cryptoConfig } ${'from'} '@config/crypto';

export const ensureAuthenticated: ReturnType<typeof expressjwt> = expressjwt({
  secret: ((): Secret | GetVerificationKey => {
    // if (process.env.NODE_ENV === 'test') {
    //   return readFileSync(resolve(cryptoConfig.config.keysPath, 'public.pem'));
    // }
    return expressJwtSecret({
      jwksUri: \`\${process.env.API_URL}/jwks\`,
      cache: true,
      rateLimit: true,
    }) as unknown as GetVerificationKey;
  })(),
  algorithms: ['RS256'],
});
`;
  }
}
