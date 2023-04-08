export class CreateEnsureAuthenticated {
  public execute(): string {
    return `import { expressjwt } from 'express-jwt';
import { expressJwtSecret, GetVerificationKey } from 'jwks-rsa';

export const ensureAuthenticated: ReturnType<typeof expressjwt> = expressjwt({
  secret: expressJwtSecret({
    jwksUri: \`\${process.env.API_URL}/keys\`,
    cache: true,
    rateLimit: true,
  }) as GetVerificationKey,
  algorithms: ['RS256'],
});
`;
  }
}
