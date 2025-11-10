export class CreateCorsConfig {
  public execute(): string {
    return `import { Joi } fr\om 'celebrate';
import { AppError } fr\om '@shared/errors/AppError';
import type { CorsOptions as ICorsConfigDTO } fr\om 'cors';
import { appConfig } fr\om './app';

const corsValidator = Joi.object<ICorsConfigDTO>({
  methods: Joi.array()
    .items(Joi.string().valid('GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'))
    .min(1)
    .required(),
  origin: Joi.function().arity(2).required(),
});

export const corsConfig = Object.freeze<ICorsConfigDTO>({
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin(origin, callback) {
    if (appConfig.config.apiMode === 'production') {
      if (origin && appConfig.config.allowedDomains?.includes(origin)) {
        return callback(null, true);
      }
      return callback(
        new AppError('FORBIDDEN', \`"\${origin}" not allowed by CORS\`, 403),
      );
    }
    return callback(null, true);
  },
});

corsValidator.validateAsync(corsConfig);
`;
  }
}
