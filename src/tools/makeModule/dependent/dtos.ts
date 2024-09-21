import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateModuleDTO } from '@templates/modules/dtos/moduleDTO';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentDtos {
  private readonly createModuleDTO: CreateModuleDTO;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<IModuleNameDTO, 'upperModuleName'>,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {
    this.createModuleDTO = new CreateModuleDTO(this.names);
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'dtos',
        this.concat.execute('I', this.names.upperModuleName, 'DTO.ts'),
      ],
      this.createModuleDTO,
    );
  }
}
