import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeStructure {
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'upperModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
  }

  public execute(): void {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
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
        'create'.concat(this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        'delete'.concat(this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        'list'.concat(this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        'show'.concat(this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        'update'.concat(this.names.upperModuleName),
      ],
    ]);
  }
}
