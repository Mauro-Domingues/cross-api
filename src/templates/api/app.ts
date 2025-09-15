export class CreateApp {
  public execute(): string {
    return `import 'dotenv/config';
import 'reflect-metadata';
import 'express-async-errors';
import cluster ${'from'} 'node:cluster';
import { truncateSync, existsSync } ${'from'} 'node:fs';
import { resolve } ${'from'} 'node:path';
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
import { convertToMilliseconds } ${'from'} '@utils/convertToMilliseconds';
import cors ${'from'} 'cors';
import { appConfig } ${'from'} '@config/app';
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
    this.clearErrorLogs();
  }

  private middlewares(): void {
    this.server.use(setConnection);
    this.server.use(rateLimiter);
    this.server.use(cors(corsConfig));
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

  private clearErrorLogs(): void {
    const errorsPath = resolve(__dirname, '..', 'assets', 'errors.log');

    setTimeout(() => {
      if (existsSync(errorsPath)) {
        truncateSync(errorsPath);
      }
      this.clearErrorLogs();
    }, convertToMilliseconds('15d'));
  }

  private routes(): void {
    this.server.use(routes);
  }

  private setupWorkers(): void {
    Array.from({
      length: Math.min(appConfig.config.apiWorkers, cpus().length),
    }).forEach(() => {
      cluster.fork();
    });

    cluster.on('exit', () => {
      cluster.fork();
    });
  }

  public init(): void {
    if (appConfig.config.apiMode === 'production' && cluster.isPrimary) {
      this.setupWorkers();
    } else {
      this.server.listen(appConfig.config.apiPort, () => {
        console.log('🚀 Server started on port %s!', appConfig.config.apiPort);
      });
    }
  }
})();
`;
  }
}
