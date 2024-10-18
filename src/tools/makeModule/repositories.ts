import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateFakeRepository } from '@templates/modules/repositories/fakes/fakeRepository';
import { CreateIRepository } from '@templates/modules/repositories/IRepository';
import { CreateRepository } from '@templates/modules/repositories/repository';
import { Concat } from '@tools/concat';
import { BaseModule } from '@tools/makeModule/base';

export class CreateRepositories extends BaseModule {
  private readonly createFakeRepository: CreateFakeRepository;
  private readonly createIRepository: CreateIRepository;
  private readonly createRepository: CreateRepository;
  private readonly concat: Concat;

  public constructor(
    protected readonly names: Omit<
      IModuleNameDTO,
      'dbModuleName' | 'routeModuleName'
    >,
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName' | 'lowerModuleName'>
      | undefined,
  ) {
    super(names, fatherNames);
    this.createFakeRepository = new CreateFakeRepository(
      this.names,
      this.fatherNames,
    );
    this.createIRepository = new CreateIRepository(
      this.names,
      this.fatherNames,
    );
    this.createRepository = new CreateRepository(this.names, this.fatherNames);
    this.concat = Concat.getInstance();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          this.basePath,
          'repositories',
          this.concat.execute(
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createRepository,
      ],
      [
        [
          this.basePath,
          'repositories',
          this.concat.execute(
            'I',
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createIRepository,
      ],
      [
        [
          this.basePath,
          'repositories',
          'fakes',
          this.concat.execute(
            'Fake',
            this.names.pluralUpperModuleName,
            'Repository.ts',
          ),
        ],
        this.createFakeRepository,
      ],
    ]);
  }
}
