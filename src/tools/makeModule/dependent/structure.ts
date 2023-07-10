import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentStructure {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly names: Pick<IModuleNamesDTO, 'upperModuleName'> | undefined;
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.names = names;
    this.fatherNames = fatherNames;
  }

  public async execute(): Promise<void> {
    if (!this.names || !this.fatherNames) {
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
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir(['src', 'routes']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'entities',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'repositories',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'repositories',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'services',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'services',
      `create${this.names.upperModuleName}`,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'services',
      `delete${this.names.upperModuleName}`,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'services',
      `list${this.names.upperModuleName}`,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'services',
      `show${this.names.upperModuleName}`,
    ]);
    return this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'services',
      `update${this.names.upperModuleName}`,
    ]);
  }
}
