import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentStructure {
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;
  private names: Pick<IModuleNamesDTO, 'upperModuleName'> | undefined;
  private fatherNames:
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

    if (!this.fileManager.checkIfExists(['src'])) {
      await this.fileManager.createDir(['src']);
    }
    if (!this.fileManager.checkIfExists(['src', 'modules'])) {
      await this.fileManager.createDir(['src', 'modules']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared'])) {
      await this.fileManager.createDir(['src', 'shared']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
      await this.fileManager.createDir(['src', 'shared', 'container']);
    }
    if (!this.fileManager.checkIfExists(['src', 'routes'])) {
      await this.fileManager.createDir(['src', 'routes']);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'dtos',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'dtos',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'entities',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'entities',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
        'fakes',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
        'fakes',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
      ]);
    }
  }
}
