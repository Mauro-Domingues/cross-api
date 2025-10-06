import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateEntity } from '@templates/modules/entities/entity';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateEntities extends BaseModule {
  private readonly createEntity: CreateEntity;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'dbModuleName' | 'pluralLowerModuleName'
    >,
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(names, fatherNames);
    this.createEntity = new CreateEntity(this.names);
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      [
        this.basePath,
        'entities',
        this.concat.execute(this.names.upperModuleName, '.ts'),
      ],
      this.createEntity,
    );
  }
}
