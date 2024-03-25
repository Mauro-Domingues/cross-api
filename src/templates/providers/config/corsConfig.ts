export class CreateCorsConfig {
  public execute(): string {
    return `import { readDomain } ${'from'} '@utils/domainsManager';
import { CorsOptions } ${'from'} 'cors';

export const corsConfig = Object.freeze<CorsOptions>({
  origin(origin, callback) {
    if (origin && readDomain().indexOf(origin) !== -1) {
      callback(null, true);
    } else if (
      process.env.NODE_ENV === 'test' ||
      process.env.NODE_ENV === 'development'
    ) {
      callback(null, true);
    } else {
      callback(new Error(\`\${origin} not allowed by CORS\`));
    }
  },
});
`;
  }
}
