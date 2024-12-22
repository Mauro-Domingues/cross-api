export class CreateApp {
  public execute(): string {
    return `import 'express-async-errors';
import cluster ${'from'} 'node:cluster';
import { cpus } ${'from'} 'node:os';
import express, {
  Express,
  json,
  urlencoded,
  // static as staticPath,
} ${'from'} 'express';
import { serve, setup } ${'from'} 'swagger-ui-express';
import { setConnection } ${'from'} '@middlewares/setConnection';
import { errorHandler } ${'from'} '@middlewares/errorHandler';
import { parseParam } ${'from'} '@middlewares/parseParam';
import { rateLimiter } ${'from'} '@middlewares/rateLimiter';
import cors ${'from'} 'cors';
import { corsConfig } ${'from'} '@config/cors';
// import { cryptoConfig } ${'from'} '@config/crypto'; // cryptoProvider
// import { storageConfig } ${'from'} '@config/storage'; // storageProvider
import { routes } ${'from'} '../routes';
import swaggerDocs ${'from'} '../swagger.json';
import '@shared/container';

export const app = new (class App {
  public readonly server: Express;

  public constructor() {
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
    this.server.use(json());
    this.server.use(urlencoded({ extended: true }));
    this.server.use(parseParam);
  }

  private staticRoutes(): void {
    this.server.use('/doc', serve, setup(swaggerDocs));
    // this.server.use('/uploads', staticPath(storageConfig.config.uploadsFolder)); // storageProvider
    // this.server.use('/jwks', staticPath(cryptoConfig.config.jwksPath)); // expose public key feature
  }

  private errorHandlers(): void {
    this.server.use(errorHandler);
  }

  private routes(): void {
    this.server.use(routes);
  }

  private setupWorkers(): void {
    Array.from({ length: cpus().length }).forEach(() => {
      cluster.fork();
    });

    cluster.on('exit', () => {
      cluster.fork();
    });
  }

  public init(): void {
    if (process.env.NODE_ENV === 'production' && cluster.isPrimary) {
      this.setupWorkers();
    } else {
      this.server.listen(process.env.API_PORT, () => {
        console.log('🚀 Server started on port %s!', process.env.API_PORT);
      });
    }
  }
})();
`;
  }
}
