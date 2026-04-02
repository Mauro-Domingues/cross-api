export class CreateAuthConfig {
  public execute(): string {
    return `import { Joi } fr\u006Fm 'celebrate';
import { passportJwtSecret } fr\u006Fm 'jwks-rsa';
import type { StrategyOptionsWithoutRequest as JwtStrategyOptions } fr\u006Fm 'passport-jwt';
import { ExtractJwt } fr\u006Fm 'passport-jwt';
import { readFileSync } fr\u006Fm 'node:fs';
import { resolve } fr\u006Fm 'node:path';
import { appConfig } fr\u006Fm './app';

interface IAuthConfigDTO {
  readonly config: {
    readonly jwt: JwtStrategyOptions;
  };
}

const authValidator = Joi.object<IAuthConfigDTO>({
  config: Joi.object<IAuthConfigDTO['config']>({
    jwt: Joi.object<IAuthConfigDTO['config']['jwt']>({
      jwtFromRequest: Joi.function().arity(1).required(),
      algorithms: Joi.array()
        .items(
          Joi.string().valid(
            'HS256',
            'HS384',
            'HS512',
            'RS256',
            'RS384',
            'RS512',
            'ES256',
            'ES384',
            'ES512',
            'PS256',
            'PS384',
            'PS512',
            'none',
          ),
        )
        .min(1)
        .required(),
      secretOrKey: Joi.binary().when(Joi.ref('$apiMode'), {
        is: 'test',
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
      secretOrKeyProvider: Joi.function().arity(3).when(Joi.ref('$apiMode'), {
        not: 'test',
        then: Joi.required(),
        otherwise: Joi.forbidden(),
      }),
    }).required(),
  }).required(),
});

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

authValidator.validateAsync(authConfig, {
  context: { apiMode: appConfig.config.apiMode },
});
`;
  }
}
