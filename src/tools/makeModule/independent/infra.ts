import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateInfra {
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'pluralLowerModuleName'
    >,
  ) {
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
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
