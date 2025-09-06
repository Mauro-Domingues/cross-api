export class CreateAuthConfig {
  public execute(): string {
    return `import { readFileSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';
import { passportJwtSecret } ${'from'} 'jwks-rsa';
import {
  ExtractJwt,
  StrategyOptionsWithoutRequest as JwtStrategyOptions,
} ${'from'} 'passport-jwt';
import { appConfig } ${'from'} './app';

interface IAuthConfigDTO {
  readonly config: {
    readonly jwt: JwtStrategyOptions;
  };
}

export const authConfig = Object.freeze<IAuthConfigDTO>({
  config: {
    jwt: {
      ...(() => {
        if (appConfig.config.apiMode === 'test') {
          return {
            secretOrKey: readFileSync(
              resolve(__dirname, '..', 'keys', 'public.pem'),
            ),
          };
        }
        return {
          secretOrKeyProvider: passportJwtSecret({
            jwksUri: \`\${appConfig.config.apiUrl}/jwks\`,
            cache: true,
            rateLimit: true,
          }),
        };
      })(),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      algorithms: ['RS256'],
    },
  },
});
`;
  }
}
