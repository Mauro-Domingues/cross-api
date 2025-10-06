import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateInfra extends BaseModule {
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'pluralLowerModuleName'
    >,
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(names, fatherNames);
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'modules'],
      ['src', 'shared', 'container'],
      ['src', 'shared', 'typeorm', 'migrations'],
      ['src', 'routes'],
      [this.basePath, 'dtos'],
      [this.basePath, 'entities'],
      [this.basePath, 'repositories', 'fakes'],
      [
        this.basePath,
        'services',
        this.concat.execute('create', this.names.upperModuleName),
      ],
      [
        this.basePath,
        'services',
        this.concat.execute('delete', this.names.upperModuleName),
      ],
      [
        this.basePath,
        'services',
        this.concat.execute('list', this.names.upperModuleName),
      ],
      [
        this.basePath,
        'services',
        this.concat.execute('show', this.names.upperModuleName),
      ],
      [
        this.basePath,
        'services',
        this.concat.execute('update', this.names.upperModuleName),
      ],
      [this.basePath, 'validators', this.names.pluralLowerModuleName],
    ]);
  }
}
