"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateServer = void 0;
class CreateServer {
  execute() {
    return `import createConnection from '@shared/typeorm';
import swaggerUi from 'swagger-ui-express';
import app from './app';

import rateLimiter from '../middlewares/RateLimiter';
import swaggerDocs from '../swagger.json';

createConnection();

app.use(rateLimiter);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT, () => {
  console.log(\`🚀 Server started on port \${process.env.PORT}!\`);
});
`;
  }
}
exports.CreateServer = CreateServer;