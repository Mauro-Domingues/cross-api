import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeStructure {
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor(
    private readonly names:
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName' | 'upperModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    if (!this.names) {
      throw this.console.one({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'modules']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir(['src', 'routes']);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'entities',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'repositories',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'repositories',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `create${this.names.upperModuleName}`,
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `delete${this.names.upperModuleName}`,
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `list${this.names.upperModuleName}`,
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `show${this.names.upperModuleName}`,
    ]);
    return this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `update${this.names.upperModuleName}`,
    ]);
  }
}
