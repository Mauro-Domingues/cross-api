import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateService } from '@templates/modules/services/create/createService';
import { DeleteService } from '@templates/modules/services/delete/deleteService';
import { ListService } from '@templates/modules/services/list/listService';
import { ShowService } from '@templates/modules/services/show/showService';
import { UpdateService } from '@templates/modules/services/update/updateService';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateServices {
  private readonly updateService: UpdateService;
  private readonly deleteService: DeleteService;
  private readonly createService: CreateService;
  private readonly showService: ShowService;
  private readonly listService: ListService;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<IModuleNameDTO, 'dbModuleName'>,
  ) {
    this.deleteService = new DeleteService(this.names);
    this.createService = new CreateService(this.names);
    this.updateService = new UpdateService(this.names);
    this.showService = new ShowService(this.names);
    this.listService = new ListService(this.names);
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
            'Service.ts',
          ),
        ],
        this.createService,
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
            'Service.ts',
          ),
        ],
        this.deleteService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute('List', this.names.upperModuleName, 'Service.ts'),
        ],
        this.listService,
      ],
      [
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'services',
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute('Show', this.names.upperModuleName, 'Service.ts'),
        ],
        this.showService,
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
            'Service.ts',
          ),
        ],
        this.updateService,
      ],
    ]);
  }
}
