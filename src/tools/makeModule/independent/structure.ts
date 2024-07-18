import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeStructure {
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly concat: Concat;

  public constructor(
    private readonly names:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'upperModuleName'>
      | undefined,
  ) {
    this.messages = Messages.getInstance().execute();
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
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
        this.concat.execute('create', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        this.concat.execute('delete', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        this.concat.execute('list', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        this.concat.execute('show', this.names.upperModuleName),
      ],
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'services',
        this.concat.execute('update', this.names.upperModuleName),
      ],
    ]);
  }
}
