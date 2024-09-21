import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecDependentController } from '@templates/modules/services/createDependent/createControllerSpec';
import { DeleteSpecDependentController } from '@templates/modules/services/deleteDependent/deleteControllerSpec';
import { ListSpecDependentController } from '@templates/modules/services/listDependent/listControllerSpec';
import { ShowSpecDependentController } from '@templates/modules/services/showDependent/showControllerSpec';
import { UpdateSpecDependentController } from '@templates/modules/services/updateDependent/updateControllerSpec';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentSpecControllers {
  private readonly updateSpecDependentController: UpdateSpecDependentController;
  private readonly deleteSpecDependentController: DeleteSpecDependentController;
  private readonly createSpecDependentController: CreateSpecDependentController;
  private readonly showSpecDependentController: ShowSpecDependentController;
  private readonly listSpecDependentController: ListSpecDependentController;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'pluralUpperModuleName'>,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {
    this.updateSpecDependentController = new UpdateSpecDependentController(
      this.names,
    );
    this.createSpecDependentController = new CreateSpecDependentController(
      this.names,
    );
    this.deleteSpecDependentController = new DeleteSpecDependentController(
      this.names,
    );
    this.listSpecDependentController = new ListSpecDependentController(
      this.names,
    );
    this.showSpecDependentController = new ShowSpecDependentController(
      this.names,
    );
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          this.concat.execute('create', this.names.upperModuleName),
          this.concat.execute(
            'Create',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.createSpecDependentController,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          this.concat.execute('delete', this.names.upperModuleName),
          this.concat.execute(
            'Delete',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.deleteSpecDependentController,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute(
            'List',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.listSpecDependentController,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute(
            'Show',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.showSpecDependentController,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'services',
          this.concat.execute('update', this.names.upperModuleName),
          this.concat.execute(
            'Update',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.updateSpecDependentController,
      ],
    ]);
  }
}
