import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateEntity } from '@templates/modules/entities/entity';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentEntities {
  private readonly createEntity: CreateEntity;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'dbModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {
    this.createEntity = new CreateEntity(this.names);
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'entities',
        this.concat.execute(this.names.upperModuleName, '.ts'),
      ],
      this.createEntity,
    );
  }
}
