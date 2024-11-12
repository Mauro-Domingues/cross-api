export class CreateCorsConfig {
  public execute(): string {
    return `import { CorsOptions } from 'cors';

const allowedDomains: Array<string> = ['https://example.com'];

export const corsConfig = Object.freeze<CorsOptions>({
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  origin(origin, callback) {
    if (process.env.NODE_ENV === 'production') {
      if (origin && allowedDomains.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(\`\${origin} not allowed by CORS\`));
      }
    }
    callback(null, true);
  },
});
`;
  }
}
