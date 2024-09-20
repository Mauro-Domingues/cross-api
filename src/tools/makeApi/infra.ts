import { FileManager } from '@tools/fileManager';

export class CreateInfra {
  private readonly fileManager: FileManager;

  public constructor() {
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'config'],
      ['src', '@types'],
      ['src', 'dtos'],
      ['src', 'assets'],
      ['src', 'middlewares'],
      ['src', 'modules'],
      ['src', 'routes'],
      ['src', 'utils', 'mappers'],
      ['src', 'shared', 'container', 'modules', 'entities'],
      ['src', 'shared', 'container', 'modules', 'repositories', 'fakes'],
      ['src', 'shared', 'errors'],
      ['src', 'shared', 'container', 'providers'],
      ['src', 'shared', 'typeorm', 'dataSources', 'fakes'],
      ['src', 'shared', 'typeorm', 'migrations'],
      ['src', 'shared', 'typeorm', 'seeds'],
    ]);
  }
}
