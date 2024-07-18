import { IMessageDTO } from '@interfaces/IMessageDTO';
import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { CreateContainer } from '@templates/index/container';
import { CreateRoutes } from '@templates/index/routes';
import { CreateModuleDTO } from '@templates/modules/dtos/moduleDTO';
import { CreateEntity } from '@templates/modules/entities/entity';
import { CreateDependentInjection } from '@templates/modules/inject/dependentInjection';
import { CreateDependentRepository } from '@templates/modules/repositories/dependentRepository';
import { CreateDependentFakeRepository } from '@templates/modules/repositories/fakes/fakeDependentRepository';
import { CreateIDependentRepository } from '@templates/modules/repositories/IDependentRepository';
import { CreateDependentRoute } from '@templates/modules/routes/dependentRoutes';
import { CreateFullDependentRoute } from '@templates/modules/routes/fullDependentRoutes';
import { CreateIndexDependentRoute } from '@templates/modules/routes/indexDependentRouter';
import { Concat } from '@tools/concat';
import { CustomError } from '@tools/customError';
import { FileManager } from '@tools/fileManager';
import { Messages } from '@tools/messages';

export class MakeDependentInfra {
  private readonly createDependentFakeRepository: CreateDependentFakeRepository;
  private readonly createIDependentRepository: CreateIDependentRepository;
  private readonly createDependentRepository: CreateDependentRepository;
  private readonly createIndexDependentRoute: CreateIndexDependentRoute;
  private readonly createDependentInjection: CreateDependentInjection;
  private readonly createFullDependentRoute: CreateFullDependentRoute;
  private readonly createDependentRoute: CreateDependentRoute;
  private readonly createModuleDTO: CreateModuleDTO;
  private readonly createContainer: CreateContainer;
  private readonly createRoutes: CreateRoutes;
  private readonly createEntity: CreateEntity;
  private readonly fileManager: FileManager;
  private readonly messages: IMessageDTO;
  private readonly concat: Concat;

  public constructor(
    private readonly names: IModuleNameDTO | undefined,
    private readonly fatherNames: IModuleNameDTO | undefined,
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
    this.createIndexDependentRoute = new CreateIndexDependentRoute(
      this.fatherNames,
    );
    this.createFullDependentRoute = new CreateFullDependentRoute(
      this.names,
      this.fatherNames,
    );
    this.createDependentInjection = new CreateDependentInjection(
      this.names,
      this.fatherNames,
    );
    this.createDependentRoute = new CreateDependentRoute(
      this.names,
      this.fatherNames,
    );
    this.createModuleDTO = new CreateModuleDTO(this.names);
    this.createEntity = new CreateEntity(this.names);
    this.messages = Messages.getInstance().execute();
    this.createContainer = new CreateContainer();
    this.fileManager = FileManager.getInstance();
    this.createRoutes = new CreateRoutes();
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

    if (
      !this.fileManager.checkIfExistsSync([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (!this.fileManager.checkIfExistsSync(['src', 'routes', 'index.ts'])) {
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createRoutes.execute(),
      );
    }
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createDependentInjection.execute(),
    );
    if (
      !this.fileManager.checkIfExistsSync([
        'src',
        'routes',
        this.concat.execute(this.fatherNames.lowerModuleName, 'Router.ts'),
      ])
    ) {
      this.fileManager.createFile(
        [
          'src',
          'routes',
          this.concat.execute(this.fatherNames.lowerModuleName, 'Router.ts'),
        ],
        this.createFullDependentRoute.execute(),
      );
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createIndexDependentRoute.execute(),
      );
    } else {
      this.fileManager.createFile(
        [
          'src',
          'routes',
          this.concat.execute(this.fatherNames.lowerModuleName, 'Router.ts'),
        ],
        this.createDependentRoute.execute(),
      );
    }
    return this.fileManager.checkAndCreateMultiFile([
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'dtos',
          this.concat.execute('I', this.names.upperModuleName, 'DTO.ts'),
        ],
        this.createModuleDTO,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'entities',
          this.concat.execute(this.names.upperModuleName, '.ts'),
        ],
        this.createEntity,
      ],
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
