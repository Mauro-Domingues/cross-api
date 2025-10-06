import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecService } from '@templates/modules/services/create/createServiceSpec';
import { DeleteSpecService } from '@templates/modules/services/delete/deleteServiceSpec';
import { ListSpecService } from '@templates/modules/services/list/listServiceSpec';
import { ShowSpecService } from '@templates/modules/services/show/showServiceSpec';
import { UpdateSpecService } from '@templates/modules/services/update/updateServiceSpec';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateSpecServices extends BaseModule {
  private readonly updateSpecService: UpdateSpecService;
  private readonly deleteSpecService: DeleteSpecService;
  private readonly createSpecService: CreateSpecService;
  private readonly showSpecService: ShowSpecService;
  private readonly listSpecService: ListSpecService;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
    fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
    this.deleteSpecService = new DeleteSpecService(this.names, fatherNames);
    this.updateSpecService = new UpdateSpecService(this.names, fatherNames);
    this.createSpecService = new CreateSpecService(this.names, fatherNames);
    this.showSpecService = new ShowSpecService(this.names, fatherNames);
    this.listSpecService = new ListSpecService(this.names, fatherNames);
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
            'Service.spec.ts',
          ),
        ],
        this.createSpecService,
      ],
      [
        [
          this.basePath,
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
          this.basePath,
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
          this.basePath,
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
          this.basePath,
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
