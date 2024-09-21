import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateEntity } from '@templates/modules/entities/entity';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateEntities {
  private readonly createEntity: CreateEntity;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'dbModuleName' | 'pluralLowerModuleName'
    >,
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
        this.names.pluralLowerModuleName,
        'entities',
        this.concat.execute(this.names.upperModuleName, '.ts'),
      ],
      this.createEntity,
    );
  }
}
