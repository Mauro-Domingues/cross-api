import { appendFile, existsSync, truncate } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateRoutes } from '@templates/index/routes';
import { CreateModuleDTO } from '@templates/modules/dtos/moduleDTO';
import { CreateEntity } from '@templates/modules/entities/entity';
import { CreateInjection } from '@templates/modules/inject/injection';
import { CreateFakeRepository } from '@templates/modules/repositories/fakes/fakeRepository';
import { CreateIRepository } from '@templates/modules/repositories/IRepository';
import { CreateRepository } from '@templates/modules/repositories/repository';
import { CreateIndependentRoute } from '@templates/modules/routes/independentRoutes';
import { CreateIndexRoute } from '@templates/modules/routes/indexRouter';
import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class MakeInfra {
  private messages: typeof messages;
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
    this.messages = messages;
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
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.moduleNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    if (!existsSync('src/shared/container/index.ts')) {
      appendFile(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (!existsSync('src/routes/index.ts')) {
      appendFile('src/routes/index.ts', this.createRoutes.execute(), error => {
        if (error) throw error;
      });
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
        this.createModuleDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
        this.createModuleDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
        this.createEntity.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
        this.createEntity.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
        this.createRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
        this.createRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
        this.createIRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
        this.createIRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
        this.createFakeRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.names.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
        this.createFakeRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    appendFile(
      'src/shared/container/index.ts',
      this.createInjection.execute(),
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync(`src/routes/${this.names.lowerModuleName}Router.ts`)) {
      appendFile(
        `src/routes/${this.names.lowerModuleName}Router.ts`,
        this.createIndependentRoute.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(`src/routes/${this.names.lowerModuleName}Router.ts`, error => {
        if (error) console.log(error);
      });
      appendFile(
        `src/routes/${this.names.lowerModuleName}Router.ts`,
        this.createIndependentRoute.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    appendFile(
      `src/routes/index.ts`,
      this.createIndexRoute.execute(),
      error => {
        if (error) throw error;
      },
    );
  }
}
