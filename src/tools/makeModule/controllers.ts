import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateController } from '@templates/modules/services/create/createController';
import { DeleteController } from '@templates/modules/services/delete/deleteController';
import { ListController } from '@templates/modules/services/list/listController';
import { ShowController } from '@templates/modules/services/show/showController';
import { UpdateController } from '@templates/modules/services/update/updateController';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateControllers extends BaseModule {
  private readonly updateController: UpdateController;
  private readonly createController: CreateController;
  private readonly deleteController: DeleteController;
  private readonly showController: ShowController;
  private readonly listController: ListController;
  private readonly concat: Concat;

  public constructor(
    protected readonly names: Pick<
      IModuleNameDTO,
      'lowerModuleName' | 'upperModuleName' | 'pluralLowerModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super();
    this.updateController = new UpdateController(this.names, this.fatherNames);
    this.createController = new CreateController(this.names, this.fatherNames);
    this.deleteController = new DeleteController(this.names, this.fatherNames);
    this.showController = new ShowController(this.names, this.fatherNames);
    this.listController = new ListController(this.names, this.fatherNames);
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          this.basePath,
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
          this.basePath,
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
          this.basePath,
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
          this.basePath,
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
          this.basePath,
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
