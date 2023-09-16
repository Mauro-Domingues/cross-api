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
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly createIndexDependentRoute: CreateIndexDependentRoute;
  private readonly createFullDependentRoute: CreateFullDependentRoute;
  private readonly createDependentRoute: CreateDependentRoute;
  private readonly createIDependentRepository: CreateIDependentRepository;
  private readonly createDependentFakeRepository: CreateDependentFakeRepository;
  private readonly createDependentRepository: CreateDependentRepository;
  private readonly createDependentInjection: CreateDependentInjection;
  private readonly createEntity: CreateEntity;
  private readonly createModuleDTO: CreateModuleDTO;
  private readonly createRoutes: CreateRoutes;
  private readonly createContainer: CreateContainer;

  constructor(
    private readonly names: IModuleNamesDTO | undefined,
    private readonly fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createIndexDependentRoute = new CreateIndexDependentRoute(
      this.fatherNames,
    );
    this.createFullDependentRoute = new CreateFullDependentRoute(
      this.names,
      this.fatherNames,
    );
    this.createDependentRoute = new CreateDependentRoute(
      this.names,
      this.fatherNames,
    );
    this.createIDependentRepository = new CreateIDependentRepository(
      this.names,
      this.fatherNames,
    );
    this.createDependentFakeRepository = new CreateDependentFakeRepository(
      this.names,
      this.fatherNames,
    );
    this.createDependentRepository = new CreateDependentRepository(
      this.names,
      this.fatherNames,
    );
    this.createDependentInjection = new CreateDependentInjection(
      this.names,
      this.fatherNames,
    );
    this.createEntity = new CreateEntity(this.names);
    this.createModuleDTO = new CreateModuleDTO(this.names);
    this.createRoutes = new CreateRoutes();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.names || !this.fatherNames) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (!this.fileManager.checkIfExists(['src', 'routes', 'index.ts'])) {
      await this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createRoutes.execute(),
      );
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createDependentInjection.execute(),
    );
    if (
      !this.fileManager.checkIfExists([
        'src',
        'routes',
        `${this.fatherNames.lowerModuleName}Router.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`],
        this.createFullDependentRoute.execute(),
      );
      await this.fileManager.createFile(
        ['src', 'routes', 'index.ts'],
        this.createIndexDependentRoute.execute(),
      );
    } else {
      await this.fileManager.createFile(
        ['src', 'routes', `${this.fatherNames.lowerModuleName}Router.ts`],
        this.createDependentRoute.execute(),
      );
    }
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'dtos',
        `I${this.names.upperModuleName}DTO.ts`,
      ],
      this.createModuleDTO,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'entities',
        `${this.names.upperModuleName}.ts`,
      ],
      this.createEntity,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
        `${this.names.pluralUpperModuleName}Repository.ts`,
      ],
      this.createDependentRepository,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
        `I${this.names.pluralUpperModuleName}Repository.ts`,
      ],
      this.createIDependentRepository,
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'repositories',
        'fakes',
        `Fake${this.names.pluralUpperModuleName}Repository.ts`,
      ],
      this.createDependentFakeRepository,
    );
  }
}
