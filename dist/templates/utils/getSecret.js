"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGetSecret;
function createGetSecret() {
  return `import AppError from '@shared/errors/AppError';
import {
  expressJwtSecret,
  GetVerificationKey,
  SecretCallbackLong,
} from 'jwks-rsa';

export default function GetVerificationKey(): GetVerificationKey {
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

  return secret;
}
`;
}