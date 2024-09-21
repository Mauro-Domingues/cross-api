import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateDependentController } from '@templates/modules/services/createDependent/createController';
import { DeleteDependentController } from '@templates/modules/services/deleteDependent/deleteController';
import { ListDependentController } from '@templates/modules/services/listDependent/listController';
import { ShowDependentController } from '@templates/modules/services/showDependent/showController';
import { UpdateDependentController } from '@templates/modules/services/updateDependent/updateController';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentControllers {
  private readonly updateDependentController: UpdateDependentController;
  private readonly createDependentController: CreateDependentController;
  private readonly deleteDependentController: DeleteDependentController;
  private readonly showDependentController: ShowDependentController;
  private readonly listDependentController: ListDependentController;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
    >,
    private readonly fatherNames: Pick<
      IModuleNameDTO,
      'pluralLowerModuleName' | 'upperModuleName'
    >,
  ) {
    this.updateDependentController = new UpdateDependentController(
      this.names,
      this.fatherNames,
    );
    this.createDependentController = new CreateDependentController(
      this.names,
      this.fatherNames,
    );
    this.deleteDependentController = new DeleteDependentController(
      this.names,
      this.fatherNames,
    );
    this.showDependentController = new ShowDependentController(
      this.names,
      this.fatherNames,
    );
    this.listDependentController = new ListDependentController(
      this.names,
      this.fatherNames,
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
            'Controller.ts',
          ),
        ],
        this.createDependentController,
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
            'Controller.ts',
          ),
        ],
        this.deleteDependentController,
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
            'Controller.ts',
          ),
        ],
        this.listDependentController,
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
            'Controller.ts',
          ),
        ],
        this.showDependentController,
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
            'Controller.ts',
          ),
        ],
        this.updateDependentController,
      ],
    ]);
  }
}
