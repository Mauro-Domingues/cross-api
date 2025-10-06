import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateModuleDTO } from '@templates/modules/dtos/moduleDTO';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateDtos extends BaseModule {
  private readonly createModuleDTO: CreateModuleDTO;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'pluralLowerModuleName'
    >,
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(names, fatherNames);
    this.createModuleDTO = new CreateModuleDTO(this.names);
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      [
        this.basePath,
        'dtos',
        this.concat.execute('I', this.names.upperModuleName, 'DTO.ts'),
      ],
      this.createModuleDTO,
    );
  }
}
