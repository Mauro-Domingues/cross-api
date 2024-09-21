import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecController } from '@templates/modules/services/create/createControllerSpec';
import { DeleteSpecController } from '@templates/modules/services/delete/deleteControllerSpec';
import { ListSpecController } from '@templates/modules/services/list/listControllerSpec';
import { ShowSpecController } from '@templates/modules/services/show/showControllerSpec';
import { UpdateSpecController } from '@templates/modules/services/update/updateControllerSpec';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateSpecControllers {
  private readonly updateSpecController: UpdateSpecController;
  private readonly deleteSpecController: DeleteSpecController;
  private readonly createSpecController: CreateSpecController;
  private readonly showSpecController: ShowSpecController;
  private readonly listSpecController: ListSpecController;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'pluralUpperModuleName'>,
  ) {
    this.updateSpecController = new UpdateSpecController(this.names);
    this.createSpecController = new CreateSpecController(this.names);
    this.deleteSpecController = new DeleteSpecController(this.names);
    this.listSpecController = new ListSpecController(this.names);
    this.showSpecController = new ShowSpecController(this.names);
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
            'Controller.spec.ts',
          ),
        ],
        this.createSpecController,
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
            'Controller.spec.ts',
          ),
        ],
        this.deleteSpecController,
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
            'Controller.spec.ts',
          ),
        ],
        this.listSpecController,
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
            'Controller.spec.ts',
          ),
        ],
        this.showSpecController,
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
            'Controller.spec.ts',
          ),
        ],
        this.updateSpecController,
      ],
    ]);
  }
}
