import { FileManager } from '@tools/fileManager';

export class CreateInfra {
  private readonly fileManager: FileManager;

  public constructor() {
    this.fileManager = FileManager.getInstance();
  }

  public execute(): void {
    const modulePath = this.fileManager.resolvePath([
      'src',
      'shared',
      'container',
      'modules',
    ]);
    const typeormPath = this.fileManager.resolvePath([
      'src',
      'shared',
      'typeorm',
    ]);

    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'config'],
      ['src', '@types'],
      ['src', 'dtos'],
      ['src', 'assets'],
      ['src', 'middlewares'],
      ['src', 'modules'],
      ['src', 'routes'],
      ['src', 'utils', 'mappers'],
      [modulePath, 'entities'],
      [modulePath, 'repositories', 'fakes'],
      [modulePath, 'validators'],
      ['src', 'shared', 'errors'],
      ['src', 'shared', 'container', 'providers'],
      [typeormPath, 'dataSources', 'fakes'],
      [typeormPath, 'migrations'],
      [typeormPath, 'seeds'],
    ]);
  }
}
