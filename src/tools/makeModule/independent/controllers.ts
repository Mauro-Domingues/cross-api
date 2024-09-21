import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateController } from '@templates/modules/services/create/createController';
import { DeleteController } from '@templates/modules/services/delete/deleteController';
import { ListController } from '@templates/modules/services/list/listController';
import { ShowController } from '@templates/modules/services/show/showController';
import { UpdateController } from '@templates/modules/services/update/updateController';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateControllers {
  private readonly updateController: UpdateController;
  private readonly createController: CreateController;
  private readonly deleteController: DeleteController;
  private readonly showController: ShowController;
  private readonly listController: ListController;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
    >,
  ) {
    this.updateController = new UpdateController(this.names);
    this.createController = new CreateController(this.names);
    this.deleteController = new DeleteController(this.names);
    this.showController = new ShowController(this.names);
    this.listController = new ListController(this.names);
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          this.concat.execute('create', this.names.upperModuleName),
          this.concat.execute(
            'Create',
            this.names.upperModuleName,
            'Controller.ts',
          ),
        ],
        this.createController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          this.concat.execute('delete', this.names.upperModuleName),
          this.concat.execute(
            'Delete',
            this.names.upperModuleName,
            'Controller.ts',
          ),
        ],
        this.deleteController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute(
            'List',
            this.names.upperModuleName,
            'Controller.ts',
          ),
        ],
        this.listController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute(
            'Show',
            this.names.upperModuleName,
            'Controller.ts',
          ),
        ],
        this.showController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          this.concat.execute('update', this.names.upperModuleName),
          this.concat.execute(
            'Update',
            this.names.upperModuleName,
            'Controller.ts',
          ),
        ],
        this.updateController,
      ],
    ]);
  }
}
