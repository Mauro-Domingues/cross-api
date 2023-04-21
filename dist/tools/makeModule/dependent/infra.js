import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateContainer } from '../../../templates/index/container.js';
import { CreateRoutes } from '../../../templates/index/routes.js';
import { CreateModuleDTO } from '../../../templates/modules/dtos/moduleDTO.js';
import { CreateEntity } from '../../../templates/modules/entities/entity.js';
import { CreateDependentInjection } from '../../../templates/modules/inject/dependentInjection.js';
import { CreateDependentRepository } from '../../../templates/modules/repositories/dependentRepository.js';
import { CreateDependentFakeRepository } from '../../../templates/modules/repositories/fakes/fakeDependentRepository.js';
import { CreateIDependentRepository } from '../../../templates/modules/repositories/IDependentRepository.js';
import { CreateDependentRoute } from '../../../templates/modules/routes/dependentRoutes.js';
import { CreateFullDependentRoute } from '../../../templates/modules/routes/fullDependentRoutes.js';
import { CreateIndexDependentRoute } from '../../../templates/modules/routes/indexDependentRouter.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';

export class MakeDependentInfra {
  messages;
  console;
  names;
  fatherNames;
  createIndexDependentRoute;
  createFullDependentRoute;
  createDependentRoute;
  createIDependentRepository;
  createDependentFakeRepository;
  createDependentRepository;
  createDependentInjection;
  createEntity;
  createModuleDTO;
  createRoutes;
  createContainer;
  constructor(names, fatherNames) {
    this.messages = new Messages().execute();
    this.console = new Console();
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
  async execute() {
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
