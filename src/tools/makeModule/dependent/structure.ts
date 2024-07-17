import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeDependentStructure {
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;

  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'upperModuleName'> | undefined,
    private readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
  }

  public execute(): void {
    if (!this.names || !this.fatherNames) {
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
      ['src', 'modules', this.fatherNames.pluralLowerModuleName, 'dtos'],
      ['src', 'modules', this.fatherNames.pluralLowerModuleName, 'entities'],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
        'fakes',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        String.prototype.concat('create', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        String.prototype.concat('delete', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        String.prototype.concat('list', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        String.prototype.concat('show', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'services',
        String.prototype.concat('update', this.names.upperModuleName),
      ],
    ]);
  }
}
