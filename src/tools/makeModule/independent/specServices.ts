import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecService } from '@templates/modules/services/create/createServiceSpec';
import { DeleteSpecService } from '@templates/modules/services/delete/deleteServiceSpec';
import { ListSpecService } from '@templates/modules/services/list/listServiceSpec';
import { ShowSpecService } from '@templates/modules/services/show/showServiceSpec';
import { UpdateSpecService } from '@templates/modules/services/update/updateServiceSpec';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateSpecServices {
  private readonly updateSpecService: UpdateSpecService;
  private readonly deleteSpecService: DeleteSpecService;
  private readonly createSpecService: CreateSpecService;
  private readonly showSpecService: ShowSpecService;
  private readonly listSpecService: ListSpecService;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
  ) {
    this.deleteSpecService = new DeleteSpecService(this.names);
    this.updateSpecService = new UpdateSpecService(this.names);
    this.createSpecService = new CreateSpecService(this.names);
    this.showSpecService = new ShowSpecService(this.names);
    this.listSpecService = new ListSpecService(this.names);
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
          this.concat.execute('delete', this.names.upperModuleName),
          this.concat.execute(
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
          this.concat.execute('list', this.names.upperModuleName),
          this.concat.execute(
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
          this.concat.execute('show', this.names.upperModuleName),
          this.concat.execute(
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
          this.concat.execute('update', this.names.upperModuleName),
          this.concat.execute(
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
