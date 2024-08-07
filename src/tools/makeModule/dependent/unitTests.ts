import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecDependentController } from '@templates/modules/services/createDependent/createControllerSpec';
import { CreateSpecDependentService } from '@templates/modules/services/createDependent/createServiceSpec';
import { DeleteSpecDependentController } from '@templates/modules/services/deleteDependent/deleteControllerSpec';
import { DeleteSpecDependentService } from '@templates/modules/services/deleteDependent/deleteServiceSpec';
import { ListSpecDependentController } from '@templates/modules/services/listDependent/listControllerSpec';
import { ListSpecDependentService } from '@templates/modules/services/listDependent/listServiceSpec';
import { ShowSpecDependentController } from '@templates/modules/services/showDependent/showControllerSpec';
import { ShowSpecDependentService } from '@templates/modules/services/showDependent/showServiceSpec';
import { UpdateSpecDependentController } from '@templates/modules/services/updateDependent/updateControllerSpec';
import { UpdateSpecDependentService } from '@templates/modules/services/updateDependent/updateServiceSpec';
import { Concat } from '@tools/concat';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeDependentUnitTests {
  private readonly updateSpecDependentController: UpdateSpecDependentController;
  private readonly deleteSpecDependentController: DeleteSpecDependentController;
  private readonly createSpecDependentController: CreateSpecDependentController;
  private readonly showSpecDependentController: ShowSpecDependentController;
  private readonly listSpecDependentController: ListSpecDependentController;
  private readonly updateSpecDependentService: UpdateSpecDependentService;
  private readonly deleteSpecDependentService: DeleteSpecDependentService;
  private readonly createSpecDependentService: CreateSpecDependentService;
  private readonly showSpecDependentService: ShowSpecDependentService;
  private readonly listSpecDependentService: ListSpecDependentService;
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly concat: Concat;

  public constructor(
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames: IModuleNameDTO | undefined,
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
    this.deleteSpecDependentService = new DeleteSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.updateSpecDependentService = new UpdateSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.createSpecDependentService = new CreateSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.showSpecDependentService = new ShowSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.listSpecDependentService = new ListSpecDependentService(
      this.names,
      this.fatherNames,
    );
    this.messages = Messages.getInstance().execute();
    this.fileManager = FileManager.getInstance();
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    if (!this.names || !this.fatherNames) {
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
          this.concat.execute('create', this.names.upperModuleName),
          this.concat.execute(
            'Create',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.createSpecDependentService,
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
          this.concat.execute('delete', this.names.upperModuleName),
          this.concat.execute(
            'Delete',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.deleteSpecDependentService,
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
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute(
            'List',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.listSpecDependentService,
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
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute(
            'Show',
            this.names.upperModuleName,
            'Service.spec.ts',
          ),
        ],
        this.showSpecDependentService,
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
            'Service.spec.ts',
          ),
        ],
        this.updateSpecDependentService,
      ],
    ]);
  }
}
