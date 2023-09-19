export class CreateApp {
  public execute(): string {
    return `import 'express-async-errors';
import { setConnection } ${'from'} '@middlewares/setConnection';
// import { uploadConfig } ${'from'} '@config/upload'; // uploadProvider
// import { cryptoConfig } ${'from'} '@config/crypto'; // cryptoProvider
import cors ${'from'} 'cors';
import express, { Express } ${'from'} 'express';
import { corsConfig } ${'from'} '@config/cors';
import { parseParam } ${'from'} '@middlewares/parseParam';
import { errorHandler } ${'from'} '@middlewares/errorHandler';
import { rateLimiter } ${'from'} '@middlewares/rateLimiter';
import { serve, setup } ${'from'} 'swagger-ui-express';
import swaggerDocs ${'from'} '../swagger.json';
import { routes } ${'from'} '../routes';
import '@shared/container';

class App {
  public readonly server: Express;

  constructor() {
    this.server = express();
    this.middlewares();
    this.staticRoutes();
    this.routes();
    this.errorHandlers();
  }

  private middlewares(): void {
    this.server.use(setConnection);
    this.server.use(cors(corsConfig));
    this.server.use(rateLimiter);
    this.server.use(express.json());
    this.server.use(parseParam);
  }

  private staticRoutes() {
    this.server.use('/api-docs', serve, setup(swaggerDocs));
    // this.server.use('/uploads', express.static(uploadConfig.uploadsFolder)); // uploadProvider
    // this.server.use('/keys', express.static(cryptoConfig.keysPath)); // expose public key feature
  }

  private errorHandlers(): void {
    this.server.use(errorHandler);
  }

  private routes(): void {
    this.server.use(routes);
  }

  public init(): void {
    this.server.listen(process.env.PORT, () => {
      console.log(\`🚀 Server started on port \${process.env.PORT}!\`);
    });
  }
}

export const app = new App();
`;
  }
}
