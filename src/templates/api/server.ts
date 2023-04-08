export class CreateServer {
  public execute(): string {
    return `import { createConnection } from '@shared/typeorm';
import { serve, setup } from 'swagger-ui-express';
import { rateLimiter } from '@middlewares/RateLimiter';
import { app } from './app';

import swaggerDocs from '../swagger.json';

createConnection();

app.use(rateLimiter);

app.use('/api-docs', serve, setup(swaggerDocs));

app.listen(process.env.PORT, () => {
  console.log(\`🚀 Server started on port \${process.env.PORT}!\`);
});
`;
  }
}
