export class CreateCorsConfig {
  public execute(): string {
    return `import { AppError } ${'from'} '@shared/errors/AppError';
import { CorsOptions } ${'from'} 'cors';

const allowedDomains: Array<string> = ['https://example.com'];

export const corsConfig = Object.freeze<CorsOptions>({
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin(origin, callback) {
    if (process.env.NODE_ENV !== 'production') {
      if (origin && allowedDomains.includes(origin)) {
        return callback(null, true);
      }
      return callback(
        new AppError('FORBIDDEN', \`"\${origin}" not allowed by CORS\`, 403),
      );
    }
    return callback(null, true);
  },
});
`;
  }
}
