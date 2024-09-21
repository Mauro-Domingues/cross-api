import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateDependentService } from '@templates/modules/services/createDependent/createService';
import { DeleteDependentService } from '@templates/modules/services/deleteDependent/deleteService';
import { ListDependentService } from '@templates/modules/services/listDependent/listService';
import { ShowDependentService } from '@templates/modules/services/showDependent/showService';
import { UpdateDependentService } from '@templates/modules/services/updateDependent/updateService';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentServices {
  private readonly updateDependentService: UpdateDependentService;
  private readonly deleteDependentService: DeleteDependentService;
  private readonly createDependentService: CreateDependentService;
  private readonly showDependentService: ShowDependentService;
  private readonly listDependentService: ListDependentService;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {
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
            'Service.ts',
          ),
        ],
        this.updateDependentService,
      ],
    ]);
  }
}
