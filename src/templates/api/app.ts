export class CreateApp {
  public execute(): string {
    return `import 'dotenv/config';
import 'reflect-metadata';
import '@shared/container';
import 'express-async-errors';
import cors fr\om 'cors';
import type { Express } fr\om 'express';
import express, {
  json,
  // static as staticPath,
  urlencoded,
} fr\om 'express';
import { serve, setup } fr\om 'swagger-ui-express';
import cluster fr\om 'node:cluster';
import { existsSync, truncateSync } fr\om 'node:fs';
import { cpus } fr\om 'node:os';
import { resolve } fr\om 'node:path';
import { appConfig } fr\om '@config/app';
import { corsConfig } fr\om '@config/cors';
// import { cryptoConfig } fr\om '@config/crypto'; // cryptoProvider
// import { storageConfig } fr\om '@config/storage'; // storageProvider
import { errorHandler } fr\om '@middlewares/errorHandler';
import { parseParam } fr\om '@middlewares/parseParam';
import { rateLimiter } fr\om '@middlewares/rateLimiter';
import { setConnection } fr\om '@middlewares/setConnection';
import { convertToMilliseconds } fr\om '@utils/convertToMilliseconds';
import { routes } fr\om '../routes';
import swaggerDocs fr\om '../swagger.json';

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
