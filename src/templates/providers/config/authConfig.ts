export class CreateAuthConfig {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import { readFileSync } fr\om 'node:fs';
import { resolve } fr\om 'node:path';
import { passportJwtSecret } fr\om 'jwks-rsa';
import {
  ExtractJwt,
  StrategyOptionsWithoutRequest as JwtStrategyOptions,
} fr\om 'passport-jwt';
import { appConfig } fr\om './app';

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
