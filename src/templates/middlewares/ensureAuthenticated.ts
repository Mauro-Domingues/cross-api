export class CreateEnsureAuthenticated {
  public execute(): string {
    return `import { expressjwt } from 'express-jwt';
import AppError from '@shared/errors/AppError';
import {
  expressJwtSecret,
  GetVerificationKey,
  SecretCallbackLong,
} from 'jwks-rsa';

const secret = expressJwtSecret({
  jwksUri: \`\${process.env.API_URL}/.well-known/jwks.json\`,
  cache: true,
  rateLimit: true,
});

function isVerificationKeyType(
  secret: SecretCallbackLong | GetVerificationKey,
): secret is GetVerificationKey {
  return true;
}

if (!isVerificationKeyType(secret)) {
  throw new AppError('You can not access this route');
}

export default expressjwt({
  secret,
  algorithms: ['RS256'],
});
`;
  }
}
