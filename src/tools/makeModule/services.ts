import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateService } from '@templates/modules/services/create/createService';
import { DeleteService } from '@templates/modules/services/delete/deleteService';
import { ListService } from '@templates/modules/services/list/listService';
import { ShowService } from '@templates/modules/services/show/showService';
import { UpdateService } from '@templates/modules/services/update/updateService';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateServices extends BaseModule {
  private readonly updateService: UpdateService;
  private readonly deleteService: DeleteService;
  private readonly createService: CreateService;
  private readonly showService: ShowService;
  private readonly listService: ListService;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
    this.deleteService = new DeleteService(this.names, fatherNames);
    this.createService = new CreateService(this.names, fatherNames);
    this.updateService = new UpdateService(this.names, fatherNames);
    this.showService = new ShowService(this.names, fatherNames);
    this.listService = new ListService(this.names, fatherNames);
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
            'Service.ts',
          ),
        ],
        this.createService,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('delete', this.names.upperModuleName),
          this.concat.execute(
            'Delete',
            this.names.upperModuleName,
            'Service.ts',
          ),
        ],
        this.deleteService,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute('List', this.names.upperModuleName, 'Service.ts'),
        ],
        this.listService,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute('Show', this.names.upperModuleName, 'Service.ts'),
        ],
        this.showService,
      ],
      [
        [
          this.basePath,
          'services',
          this.concat.execute('update', this.names.upperModuleName),
          this.concat.execute(
            'Update',
            this.names.upperModuleName,
            'Service.ts',
          ),
        ],
        this.updateService,
      ],
    ]);
  }
}
