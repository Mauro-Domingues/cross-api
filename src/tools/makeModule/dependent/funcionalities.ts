import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateDependentController } from '@templates/modules/services/createDependent/createController';
import { CreateDependentService } from '@templates/modules/services/createDependent/createService';
import { DeleteDependentController } from '@templates/modules/services/deleteDependent/deleteController';
import { DeleteDependentService } from '@templates/modules/services/deleteDependent/deleteService';
import { ListDependentController } from '@templates/modules/services/listDependent/listController';
import { ListDependentService } from '@templates/modules/services/listDependent/listService';
import { ShowDependentController } from '@templates/modules/services/showDependent/showController';
import { ShowDependentService } from '@templates/modules/services/showDependent/showService';
import { UpdateDependentController } from '@templates/modules/services/updateDependent/updateController';
import { UpdateDependentService } from '@templates/modules/services/updateDependent/updateService';
import { Concat } from '@tools/concat';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeDependentFunctionalities {
  private readonly updateDependentController: UpdateDependentController;
  private readonly createDependentController: CreateDependentController;
  private readonly deleteDependentController: DeleteDependentController;
  private readonly showDependentController: ShowDependentController;
  private readonly listDependentController: ListDependentController;
  private readonly updateDependentService: UpdateDependentService;
  private readonly deleteDependentService: DeleteDependentService;
  private readonly createDependentService: CreateDependentService;
  private readonly showDependentService: ShowDependentService;
  private readonly listDependentService: ListDependentService;
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly concat: Concat;

  public constructor(
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames: IModuleNameDTO | undefined,
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
    this.deleteDependentService = new DeleteDependentService(
      this.names,
      this.fatherNames,
    );
    this.createDependentService = new CreateDependentService(
      this.names,
      this.fatherNames,
    );
    this.updateDependentService = new UpdateDependentService(
      this.names,
      this.fatherNames,
    );
    this.showDependentService = new ShowDependentService(
      this.names,
      this.fatherNames,
    );
    this.listDependentService = new ListDependentService(
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
          this.concat.execute('create', this.names.upperModuleName),
          this.concat.execute(
            'Create',
            this.names.upperModuleName,
            'Service.ts',
          ),
        ],
        this.createDependentService,
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
          this.concat.execute('delete', this.names.upperModuleName),
          this.concat.execute(
            'Delete',
            this.names.upperModuleName,
            'Service.ts',
          ),
        ],
        this.deleteDependentService,
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
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute('List', this.names.upperModuleName, 'Service.ts'),
        ],
        this.listDependentService,
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
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute('Show', this.names.upperModuleName, 'Service.ts'),
        ],
        this.showDependentService,
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
            'Service.ts',
          ),
        ],
        this.updateDependentService,
      ],
    ]);
  }
}
