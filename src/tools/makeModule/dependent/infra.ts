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
import { IModuleNamesDTO } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

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
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  public constructor(
    private readonly names: IModuleNamesDTO | undefined,
    private readonly fatherNames: IModuleNamesDTO | undefined,
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
    this.createContainer = new CreateContainer();
    this.messages = new Messages().execute();
    this.createRoutes = new CreateRoutes();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    if (!this.names || !this.fatherNames) {
      throw this.console.single({
        message: this.messages.moduleNotFound,
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
        `${this.fatherNames.lowerModuleName}Router.ts`,
      ])
    ) {
      this.fileManager.createFile(
        ['src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`],
        this.createFullDependentRoute.execute(),
      );
      this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createIndexDependentRoute.execute(),
      );
    } else {
      this.fileManager.createFile(
        ['src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`],
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
          `I${this.names.upperModuleName}DTO.ts`,
        ],
        this.createModuleDTO,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ],
        this.createEntity,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createDependentRepository,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
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
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createDependentFakeRepository,
      ],
    ]);
  }
}
