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
import { appendFileSync, existsSync, truncateSync } from 'fs';
import { IModuleNamesDTO } from '@tools/names';
import messages from '@tools/messages';
import { resolve } from 'path';

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

    if (!existsSync(resolve('src', 'shared', 'container', 'index.ts'))) {
      appendFileSync(
        resolve('src', 'shared', 'container', 'index.ts'),
        this.createContainer.execute(),
      );
    }

    if (!existsSync(resolve('src', 'routes', 'index.ts'))) {
      appendFileSync(
        resolve('src', 'routes', 'index.ts'),
        this.createRoutes.execute(),
      );
    }

    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ),
        this.createModuleDTO.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ),
        this.createModuleDTO.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ),
        this.createEntity.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ),
        this.createEntity.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createDependentRepository.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createDependentRepository.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createIDependentRepository.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createIDependentRepository.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createDependentFakeRepository.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createDependentFakeRepository.execute(),
      );
    }

    if (
      !existsSync(
        resolve(
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ),
        this.createFullDependentRoute.execute(),
      );
      appendFileSync(
        resolve('src', 'routes', 'index.ts'),
        this.createIndexDependentRoute.execute(),
      );
    } else {
      appendFileSync(
        resolve(
          'src',
          'routes',
          `${this.fatherNames.lowerModuleName}Router.ts`,
        ),
        this.createDependentRoute.execute(),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'index.ts'),
      this.createDependentInjection.execute(),
    );
  }
}
