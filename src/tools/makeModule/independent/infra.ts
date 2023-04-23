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
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;
  private names: IModuleNamesDTO | undefined;
  private createIndexRoute: CreateIndexRoute;
  private createIndependentRoute: CreateIndependentRoute;
  private createIRepository: CreateIRepository;
  private createFakeRepository: CreateFakeRepository;
  private createRepository: CreateRepository;
  private createInjection: CreateInjection;
  private createEntity: CreateEntity;
  private createModuleDTO: CreateModuleDTO;
  private createRoutes: CreateRoutes;
  private createContainer: CreateContainer;

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
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'dtos',
        `I${this.names.upperModuleName}DTO.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ],
        this.createModuleDTO.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'dtos',
        `I${this.names.upperModuleName}DTO.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ],
        this.createModuleDTO.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'entities',
        `${this.names.upperModuleName}.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ],
        this.createEntity.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'entities',
        `${this.names.upperModuleName}.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ],
        this.createEntity.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        `${this.names.pluralUpperModuleName}Repository.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createRepository.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        `${this.names.pluralUpperModuleName}Repository.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createRepository.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        `I${this.names.pluralUpperModuleName}Repository.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createIRepository.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        `I${this.names.pluralUpperModuleName}Repository.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createIRepository.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        'fakes',
        `Fake${this.names.pluralUpperModuleName}Repository.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createFakeRepository.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'modules',
        this.names.pluralLowerModuleName,
        'repositories',
        'fakes',
        `Fake${this.names.pluralUpperModuleName}Repository.ts`,
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ],
        this.createFakeRepository.execute(),
      );
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      this.createInjection.execute(),
    );
    if (
      !this.fileManager.checkIfExists([
        'src',
        'routes',
        `${this.names.lowerModuleName}Router.ts`,
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'routes', `${this.names.lowerModuleName}Router.ts`],
        this.createIndependentRoute.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'routes',
        `${this.names.lowerModuleName}Router.ts`,
      ]);
      await this.fileManager.createFile(
        ['src', 'routes', `${this.names.lowerModuleName}Router.ts`],
        this.createIndependentRoute.execute(),
      );
    }
    return this.fileManager.createFile(
      ['src', 'routes', 'index.ts'],
      this.createIndexRoute.execute(),
    );
  }
}
