export class CreateApp {
  public execute(): string {
    return `import 'dotenv/config';
import 'reflect-metadata';
import '@shared/container';
import 'express-async-errors';
import cors fr\u006Fm 'cors';
import type { Express } fr\u006Fm 'express';
import express, {
  json,
  // static as staticPath,
  urlencoded,
} fr\u006Fm 'express';
import { serve, setup } fr\u006Fm 'swagger-ui-express';
import cluster fr\u006Fm 'node:cluster';
import { existsSync, truncateSync } fr\u006Fm 'node:fs';
import { cpus } fr\u006Fm 'node:os';
import { resolve } fr\u006Fm 'node:path';
import { appConfig } fr\u006Fm '@config/app';
import { corsConfig } fr\u006Fm '@config/cors';
// import { encryptionConfig } fr\u006Fm '@config/encryption'; // encryptionProvider
// import { storageConfig } fr\u006Fm '@config/storage'; // storageProvider
import { errorHandler } fr\u006Fm '@middlewares/errorHandler';
import { parseParam } fr\u006Fm '@middlewares/parseParam';
import { rateLimiter } fr\u006Fm '@middlewares/rateLimiter';
import { setConnection } fr\u006Fm '@middlewares/setConnection';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import { routes } fr\u006Fm '../routes';
import swaggerDocs fr\u006Fm '../swagger.json';

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
    // this.server.use('/jwks', staticPath(encryptionConfig.config.jwksPath)); // expose public key feature
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
