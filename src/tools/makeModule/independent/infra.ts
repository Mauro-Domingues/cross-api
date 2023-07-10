import { CreateContainer } from '@templates/index/container.js';
import { CreateRoutes } from '@templates/index/routes.js';
import { CreateModuleDTO } from '@templates/modules/dtos/moduleDTO.js';
import { CreateEntity } from '@templates/modules/entities/entity.js';
import { CreateInjection } from '@templates/modules/inject/injection.js';
import { CreateFakeRepository } from '@templates/modules/repositories/fakes/fakeRepository.js';
import { CreateIRepository } from '@templates/modules/repositories/IRepository.js';
import { CreateRepository } from '@templates/modules/repositories/repository.js';
import { CreateIndependentRoute } from '@templates/modules/routes/independentRoutes.js';
import { CreateIndexRoute } from '@templates/modules/routes/indexRouter.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeInfra {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly names: IModuleNamesDTO | undefined;
  private readonly createIndexRoute: CreateIndexRoute;
  private readonly createIndependentRoute: CreateIndependentRoute;
  private readonly createIRepository: CreateIRepository;
  private readonly createFakeRepository: CreateFakeRepository;
  private readonly createRepository: CreateRepository;
  private readonly createInjection: CreateInjection;
  private readonly createEntity: CreateEntity;
  private readonly createModuleDTO: CreateModuleDTO;
  private readonly createRoutes: CreateRoutes;
  private readonly createContainer: CreateContainer;

  constructor(names: IModuleNamesDTO | undefined) {
    this.names = names;
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createIndexRoute = new CreateIndexRoute(this.names);
    this.createIndependentRoute = new CreateIndependentRoute(this.names);
    this.createIRepository = new CreateIRepository(this.names);
    this.createFakeRepository = new CreateFakeRepository(this.names);
    this.createRepository = new CreateRepository(this.names);
    this.createInjection = new CreateInjection(this.names);
    this.createEntity = new CreateEntity(this.names);
    this.createModuleDTO = new CreateModuleDTO(this.names);
    this.createRoutes = new CreateRoutes();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.names) {
      this.console.one([
        this.messages.moduleNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createContainer,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'routes', 'index.ts'],
      this.createRoutes,
    );
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createInjection.execute(),
    );
    await this.fileManager.createFile(
      ['src', 'routes', 'index.ts'],
      this.createIndexRoute.execute(),
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'dtos',
        `I${this.names.upperModuleName}DTO.ts`,
      ],
      this.createModuleDTO,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'entities',
        `${this.names.upperModuleName}.ts`,
      ],
      this.createEntity,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        `${this.names.pluralUpperModuleName}Repository.ts`,
      ],
      this.createRepository,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        `I${this.names.pluralUpperModuleName}Repository.ts`,
      ],
      this.createIRepository,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        'fakes',
        `Fake${this.names.pluralUpperModuleName}Repository.ts`,
      ],
      this.createFakeRepository,
    );
    return this.fileManager.checkAndCreateFile(
      ['src', 'routes', `${this.names.lowerModuleName}Router.ts`],
      this.createIndependentRoute,
    );
  }
}
