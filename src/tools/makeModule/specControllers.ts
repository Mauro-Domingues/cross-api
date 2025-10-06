import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecController } from '@templates/modules/services/create/createControllerSpec';
import { DeleteSpecController } from '@templates/modules/services/delete/deleteControllerSpec';
import { ListSpecController } from '@templates/modules/services/list/listControllerSpec';
import { ShowSpecController } from '@templates/modules/services/show/showControllerSpec';
import { UpdateSpecController } from '@templates/modules/services/update/updateControllerSpec';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateSpecControllers extends BaseModule {
  private readonly updateSpecController: UpdateSpecController;
  private readonly deleteSpecController: DeleteSpecController;
  private readonly createSpecController: CreateSpecController;
  private readonly showSpecController: ShowSpecController;
  private readonly listSpecController: ListSpecController;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'pluralUpperModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'lowerModuleName' | 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
    this.updateSpecController = new UpdateSpecController(
      this.names,
      fatherNames,
    );
    this.createSpecController = new CreateSpecController(this.names);
    this.deleteSpecController = new DeleteSpecController(
      this.names,
      fatherNames,
    );
    this.listSpecController = new ListSpecController(this.names, fatherNames);
    this.showSpecController = new ShowSpecController(this.names, fatherNames);
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
            'Controller.spec.ts',
          ),
        ],
        this.createSpecController,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('delete', this.names.upperModuleName),
          this.concat.execute(
            'Delete',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.deleteSpecController,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute(
            'List',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.listSpecController,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute(
            'Show',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.showSpecController,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('update', this.names.upperModuleName),
          this.concat.execute(
            'Update',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.updateSpecController,
      ],
    ]);
  }
}
