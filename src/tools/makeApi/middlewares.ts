import { CreateEnsureAuthenticated } from '@templates/middlewares/ensureAuthenticated/index';
import { CreateJwtStrategy } from '@templates/middlewares/ensureAuthenticated/strategies/jwtStrategy';
import { CreateErrorHandler } from '@templates/middlewares/errorHandler';
import { CreateparseParam } from '@templates/middlewares/parseParam';
import { CreateRateLimiter } from '@templates/middlewares/rateLimiter';
import { CreateSetConnection } from '@templates/middlewares/setConnection';
import { FileManager } from '@tools/fileManager';

export class CreateMiddlewares {
  private readonly createEnsureAuthenticated: CreateEnsureAuthenticated;
  private readonly createSetConnection: CreateSetConnection;
  private readonly createErrorHandler: CreateErrorHandler;
  private readonly createRateLimiter: CreateRateLimiter;
  private readonly createJwtStrategy: CreateJwtStrategy;
  private readonly createParseParam: CreateparseParam;
  private readonly fileManager: FileManager;

  public constructor() {
    this.createEnsureAuthenticated = new CreateEnsureAuthenticated();
    this.createSetConnection = new CreateSetConnection();
    this.createErrorHandler = new CreateErrorHandler();
    this.createRateLimiter = new CreateRateLimiter();
    this.createJwtStrategy = new CreateJwtStrategy();
    this.createParseParam = new CreateparseParam();
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    const basePath = this.fileManager.resolvePath(['src', 'middlewares']);

    return this.fileManager.checkAndCreateMultiFile([
      [[basePath, 'rateLimiter.ts'], this.createRateLimiter],
      [[basePath, 'setConnection.ts'], this.createSetConnection],
      [[basePath, 'errorHandler.ts'], this.createErrorHandler],
      [[basePath, 'parseParam.ts'], this.createParseParam],
      [
        [basePath, 'ensureAuthenticated', 'index.ts'],
        this.createEnsureAuthenticated,
      ],
      [
        [basePath, 'ensureAuthenticated', 'strategies', 'jwtStrategy.ts'],
        this.createJwtStrategy,
      ],
    ]);
  }
}
