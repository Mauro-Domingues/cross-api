import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Messages } from '@tools/messages';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeStructure {
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly console: Console;

  public constructor(
    private readonly names:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'upperModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    if (!this.names) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'modules'],
      ['src', 'shared', 'container'],
      ['src', 'routes'],
      ['src', 'modules', this.names.pluralLowerModuleName, 'dtos'],
      ['src', 'modules', this.names.pluralLowerModuleName, 'entities'],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        'fakes',
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `create${this.names.upperModuleName}`,
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `delete${this.names.upperModuleName}`,
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `list${this.names.upperModuleName}`,
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `show${this.names.upperModuleName}`,
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        `update${this.names.upperModuleName}`,
      ],
    ]);
  }
}
