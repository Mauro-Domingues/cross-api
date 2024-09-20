import { CreateApp } from '@templates/api/app';
import { CreateServer } from '@templates/api/server';
import { FileManager } from '@tools/fileManager';
import { CreateContainer } from '@tools/makeApi/shared/container';
import { CreateErrors } from '@tools/makeApi/shared/errors';
import { CreateTypeorm } from '@tools/makeApi/shared/typeorm';

export class CreateShared {
  private readonly createContainer: CreateContainer;
  private readonly createTypeorm: CreateTypeorm;
  private readonly createServer: CreateServer;
  private readonly createErrors: CreateErrors;
  private readonly fileManager: FileManager;
  private readonly createApp: CreateApp;

  public constructor() {
    this.createContainer = new CreateContainer();
    this.fileManager = FileManager.getInstance();
    this.createTypeorm = new CreateTypeorm();
    this.createServer = new CreateServer();
    this.createErrors = new CreateErrors();
    this.createApp = new CreateApp();
  }

  public execute(): void {
    this.createContainer.execute();
    this.createErrors.execute();
    this.createTypeorm.execute();
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'shared', 'app.ts'], this.createApp],
      [['src', 'shared', 'server.ts'], this.createServer],
    ]);
  }
}
