"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCorsConfig = void 0;
class CreateCorsConfig {
  execute() {
    return `import { DomainsManager } from '@utils/domainsManager';
import { CorsOptions } from 'cors';

export const corsConfig: CorsOptions = {
  origin(origin, callback) {
    if (origin && new DomainsManager().read().indexOf(origin) !== -1) {
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
};
`;
  }
}
exports.CreateCorsConfig = CreateCorsConfig;