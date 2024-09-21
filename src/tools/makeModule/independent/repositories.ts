import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateFakeRepository } from '@templates/modules/repositories/fakes/fakeRepository';
import { CreateIRepository } from '@templates/modules/repositories/IRepository';
import { CreateRepository } from '@templates/modules/repositories/repository';
import { Concat } from '@tools/concat';
import { FileManager } from '@tools/fileManager';

export class CreateRepositories {
  private readonly createFakeRepository: CreateFakeRepository;
  private readonly createIRepository: CreateIRepository;
  private readonly createRepository: CreateRepository;
  private readonly fileManager: FileManager;
  private readonly concat: Concat;

  public constructor(
    private readonly names: Pick<
      IModuleNameDTO,
      'upperModuleName' | 'pluralUpperModuleName' | 'pluralLowerModuleName'
    >,
  ) {
    this.createFakeRepository = new CreateFakeRepository(this.names);
    this.createIRepository = new CreateIRepository(this.names);
    this.createRepository = new CreateRepository(this.names);
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
          'src',
          'modules',
          this.names.pluralLowerModuleName,
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
          'src',
          'modules',
          this.names.pluralLowerModuleName,
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
