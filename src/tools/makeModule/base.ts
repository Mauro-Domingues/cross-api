import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { FileManager } from '@tools/fileManager';

export abstract class BaseModule {
  protected readonly fileManager: FileManager;
  protected readonly basePath: string;

  public constructor(
    names: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    this.fileManager = FileManager.getInstance();
    this.basePath = this.fileManager.resolvePath([
      'src',
      'modules',
      fatherNames?.pluralLowerModuleName ?? names.pluralLowerModuleName,
    ]);
  }
}
