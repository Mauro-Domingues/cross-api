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
import { appendFile, existsSync, truncate } from 'fs';
import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';

export class MakeDependentInfra {
  private messages: typeof messages;
  private names: IModuleNamesDTO | undefined;
  private fatherNames: IModuleNamesDTO | undefined;
  private createIndexDependentRoute: CreateIndexDependentRoute;
  private createFullDependentRoute: CreateFullDependentRoute;
  private createDependentRoute: CreateDependentRoute;
  private createIDependentRepository: CreateIDependentRepository;
  private createDependentFakeRepository: CreateDependentFakeRepository;
  private createDependentRepository: CreateDependentRepository;
  private createDependentInjection: CreateDependentInjection;
  private createEntity: CreateEntity;
  private createModuleDTO: CreateModuleDTO;
  private createRoutes: CreateRoutes;
  private createContainer: CreateContainer;

  constructor(
    names: IModuleNamesDTO | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = messages;
    this.names = names;
    this.fatherNames = fatherNames;
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
        `src/modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
        this.createModuleDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/dtos/I${this.names.upperModuleName}DTO.ts`,
        this.createModuleDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
        this.createEntity.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/entities/${this.names.upperModuleName}.ts`,
        this.createEntity.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
        this.createDependentRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/${this.names.pluralUpperModuleName}Repository.ts`,
        this.createDependentRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
        this.createIDependentRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/I${this.names.pluralUpperModuleName}Repository.ts`,
        this.createIDependentRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
      )
    ) {
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
        this.createDependentFakeRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/repositories/fakes/Fake${this.names.pluralUpperModuleName}Repository.ts`,
        this.createDependentFakeRepository.execute(),
        error => {
          if (error) throw error;
        },
      );
    }

    if (
      !existsSync(`src/routes/${this.fatherNames.lowerModuleName}Router.ts`)
    ) {
      appendFile(
        `src/routes/${this.fatherNames.lowerModuleName}Router.ts`,
        this.createFullDependentRoute.execute(),
        error => {
          if (error) throw error;
        },
      );
      appendFile(
        `src/routes/index.ts`,
        this.createIndexDependentRoute.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      appendFile(
        `src/routes/${this.fatherNames.lowerModuleName}Router.ts`,
        this.createDependentRoute.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    appendFile(
      'src/shared/container/index.ts',
      this.createDependentInjection.execute(),
      error => {
        if (error) throw error;
      },
    );
  }
}
