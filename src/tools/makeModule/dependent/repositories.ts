import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateDependentRepository } from '@templates/modules/repositories/dependentRepository';
import { CreateDependentFakeRepository } from '@templates/modules/repositories/fakes/fakeDependentRepository';
import { CreateIDependentRepository } from '@templates/modules/repositories/IDependentRepository';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateDependentRepositories {
  private readonly createDependentFakeRepository: CreateDependentFakeRepository;
  private readonly createIDependentRepository: CreateIDependentRepository;
  private readonly createDependentRepository: CreateDependentRepository;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'pluralUpperModuleName' | 'upperModuleName'
    >,
    private readonly fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ) {
    this.createDependentFakeRepository = new CreateDependentFakeRepository(
      this.names,
      this.fatherNames,
    );
    this.createIDependentRepository = new CreateIDependentRepository(
      this.names,
      this.fatherNames,
    );
    this.createDependentRepository = new CreateDependentRepository(
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
          'repositories',
          this.concat.execute(
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createDependentRepository,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          this.concat.execute(
            'I',
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createIDependentRepository,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          'fakes',
          this.concat.execute(
            'Fake',
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createDependentFakeRepository,
      ],
    ]);
  }
}
