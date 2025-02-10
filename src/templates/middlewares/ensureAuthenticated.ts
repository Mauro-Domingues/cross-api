export class CreateEnsureAuthenticated {
  public execute(): string {
    return `// import { readFileSync } ${'from'} 'node:fs';
// import { resolve } ${'from'} 'node:path';
import { expressjwt, GetVerificationKey } ${'from'} 'express-jwt';
import { expressJwtSecret } ${'from'} 'jwks-rsa';
// import { cryptoConfig } ${'from'} '@config/crypto';
import { appConfig } ${'from'} '@config/app';

export const ensureAuthenticated: ReturnType<typeof expressjwt> = expressjwt({
  secret: ((): Buffer | GetVerificationKey => {
    // if (appConfig.config.apiMode === 'test') {
    //   return readFileSync(resolve(cryptoConfig.config.keysPath, 'public.pem'));
    // }
    return expressJwtSecret({
      jwksUri: \`\${appConfig.config.apiUrl}/jwks\`,
      cache: true,
      rateLimit: true,
    }) as unknown as GetVerificationKey;
  })(),
  algorithms: ['RS256'],
});
`;
  }
}
