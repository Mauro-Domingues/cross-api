import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { FileManager } from '@tools/fileManager';

export abstract class BaseModule {
  protected declare readonly fatherNames:
    | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
    | undefined;
  protected declare readonly names: Pick<
    IModuleNameDTO,
    'pluralLowerModuleName'
  >;
  protected readonly fileManager: FileManager;
  protected readonly basePath: string;

  public constructor() {
    this.fileManager = FileManager.getInstance();
    this.basePath = this.fileManager.resolvePath([
      'src',
      'modules',
      this.fatherNames?.pluralLowerModuleName ??
        this.names.pluralLowerModuleName,
    ]);
  }
}
