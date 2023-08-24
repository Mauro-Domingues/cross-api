import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeStructure {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly names: IModuleNamesDTO | undefined;

  constructor(names: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.names = names;
  }

  public async execute(): Promise<void> {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'modules']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir(['src', 'routes']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'entities',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'repositories',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'repositories',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `create${this.names.upperModuleName}`,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `delete${this.names.upperModuleName}`,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.names.pluralLowerModuleName,
      'services',
      `list${this.names.upperModuleName}`,
    ]);
    await this.fileManager.checkAndCreateDir([
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
