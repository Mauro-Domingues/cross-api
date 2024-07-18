import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecController } from '@templates/modules/services/create/createControllerSpec';
import { CreateSpecService } from '@templates/modules/services/create/createServiceSpec';
import { DeleteSpecController } from '@templates/modules/services/delete/deleteControllerSpec';
import { DeleteSpecService } from '@templates/modules/services/delete/deleteServiceSpec';
import { ListSpecController } from '@templates/modules/services/list/listControllerSpec';
import { ListSpecService } from '@templates/modules/services/list/listServiceSpec';
import { ShowSpecController } from '@templates/modules/services/show/showControllerSpec';
import { ShowSpecService } from '@templates/modules/services/show/showServiceSpec';
import { UpdateSpecController } from '@templates/modules/services/update/updateControllerSpec';
import { UpdateSpecService } from '@templates/modules/services/update/updateServiceSpec';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeUnitTests {
  private readonly updateSpecController: UpdateSpecController;
  private readonly createSpecController: CreateSpecController;
  private readonly deleteSpecController: DeleteSpecController;
  private readonly showSpecController: ShowSpecController;
  private readonly listSpecController: ListSpecController;
  private readonly updateSpecService: UpdateSpecService;
  private readonly createSpecService: CreateSpecService;
  private readonly deleteSpecService: DeleteSpecService;
  private readonly showSpecService: ShowSpecService;
  private readonly listSpecService: ListSpecService;
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;

  public constructor(private readonly names: IModuleNameDTO | undefined) {
    this.createSpecController = new CreateSpecController(this.names);
    this.updateSpecController = new UpdateSpecController(this.names);
    this.deleteSpecController = new DeleteSpecController(this.names);
    this.showSpecController = new ShowSpecController(this.names);
    this.listSpecController = new ListSpecController(this.names);
    this.deleteSpecService = new DeleteSpecService(this.names);
    this.createSpecService = new CreateSpecService(this.names);
    this.updateSpecService = new UpdateSpecService(this.names);
    this.showSpecService = new ShowSpecService(this.names);
    this.listSpecService = new ListSpecService(this.names);
    this.fileManager = FileManager.getInstance();
    this.messages = new Messages().execute();
  }

  public execute(): void {
    if (!this.names) {
      throw new CustomError({
        message: this.messages.modules.errors.notFound,
        color: 'red',
        bold: true,
        breakStart: true,
        breakEnd: true,
      });
    }

    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          String.prototype.concat('create', this.names.upperModuleName),
          String.prototype.concat(
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
          String.prototype.concat('create', this.names.upperModuleName),
          String.prototype.concat(
            'Create',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.createSpecService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          String.prototype.concat('delete', this.names.upperModuleName),
          String.prototype.concat(
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
          String.prototype.concat('delete', this.names.upperModuleName),
          String.prototype.concat(
            'Delete',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.deleteSpecService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          String.prototype.concat('list', this.names.upperModuleName),
          String.prototype.concat(
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
          String.prototype.concat('list', this.names.upperModuleName),
          String.prototype.concat(
            'List',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.listSpecService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          String.prototype.concat('show', this.names.upperModuleName),
          String.prototype.concat(
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
          String.prototype.concat('show', this.names.upperModuleName),
          String.prototype.concat(
            'Show',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.showSpecService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          String.prototype.concat('update', this.names.upperModuleName),
          String.prototype.concat(
            'Update',
            this.names.upperModuleName,
            'Controller.spec.ts',
          ),
        ],
        this.updateSpecController,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          String.prototype.concat('update', this.names.upperModuleName),
          String.prototype.concat(
            'Update',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.updateSpecService,
      ],
    ]);
  }
}
