export class CreateApp {
  public execute(): string {
    return `import 'dotenv/config';
import 'reflect-metadata';
import '@shared/container';
import 'express-async-errors';
import type { Express } fr\u006Fm 'express';
import express, {
  json,
  // static as staticPath,
  urlencoded,
} fr\u006Fm 'express';
import { serve, setup } fr\u006Fm 'swagger-ui-express';
import cluster fr\u006Fm 'node:cluster';
import { existsSync, truncateSync } fr\u006Fm 'node:fs';
import { Server } fr\u006Fm 'node:http';
import { cpus } fr\u006Fm 'node:os';
import { resolve } fr\u006Fm 'node:path';
import { appConfig } fr\u006Fm '@config/app';
// import { encryptionConfig } fr\u006Fm '@config/encryption'; // encryptionProvider
// import { storageConfig } fr\u006Fm '@config/storage'; // storageProvider
import { corsHandler } fr\u006Fm '@middlewares/corsHandler';
import { errorHandler } fr\u006Fm '@middlewares/errorHandler';
import { parseParam } fr\u006Fm '@middlewares/parseParam';
import { rateLimiter } fr\u006Fm '@middlewares/rateLimiter';
import { setConnection } fr\u006Fm '@middlewares/setConnection';
import { convertToMilliseconds } fr\u006Fm '@utils/convertToMilliseconds';
import { routes } fr\u006Fm '../routes';
import swaggerDocs fr\u006Fm '../swagger.json';

export const app = new (class App {
  private readonly express: Express;

  public readonly server: Server;

  public constructor() {
    this.express = express();
    this.server = new Server(this.express);
    this.middlewares();
    this.staticRoutes();
    this.routes();
    this.errorHandlers();
    this.clearErrorLogs();
  }

  private middlewares(): void {
    this.express.use(setConnection);
    this.express.use(rateLimiter);
    this.express.use(corsHandler);
    this.express.use(json());
    this.express.use(urlencoded({ extended: true }));
    this.express.use(parseParam);
  }

  private staticRoutes(): void {
    this.express.use('/doc', serve, setup(swaggerDocs));
    // this.express.use('/uploads', staticPath(storageConfig.config.uploadsFolder)); // storageProvider
    // this.express.use('/jwks', staticPath(encryptionConfig.config.jwksPath)); // expose public key feature
  }

  private errorHandlers(): void {
    this.express.use(errorHandler);
  }

  private clearErrorLogs(): void {
    const errorsPath = resolve(__dirname, '..', 'assets', 'errors.log');

    const cleanerTimeout = setTimeout(() => {
      if (existsSync(errorsPath)) {
        truncateSync(errorsPath);
      }
      this.clearErrorLogs();
    }, convertToMilliseconds('15d'));

    this.server.on('close', () => clearInterval(cleanerTimeout));
  }

  private routes(): void {
    this.express.use(routes);
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
