import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateSpecDependentService } from '@templates/modules/services/createDependent/createServiceSpec';
import { DeleteSpecDependentService } from '@templates/modules/services/deleteDependent/deleteServiceSpec';
import { ListSpecDependentService } from '@templates/modules/services/listDependent/listServiceSpec';
import { ShowSpecDependentService } from '@templates/modules/services/showDependent/showServiceSpec';
import { UpdateSpecDependentService } from '@templates/modules/services/updateDependent/updateServiceSpec';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentSpecServices {
  private readonly updateSpecDependentService: UpdateSpecDependentService;
  private readonly deleteSpecDependentService: DeleteSpecDependentService;
  private readonly createSpecDependentService: CreateSpecDependentService;
  private readonly showSpecDependentService: ShowSpecDependentService;
  private readonly listSpecDependentService: ListSpecDependentService;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {
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
            'Service.spec.ts',
          ),
        ],
        this.updateSpecDependentService,
      ],
    ]);
  }
}
