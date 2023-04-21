import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateContainer } from '../../../templates/index/container.js';
import { CreateRoutes } from '../../../templates/index/routes.js';
import { CreateModuleDTO } from '../../../templates/modules/dtos/moduleDTO.js';
import { CreateEntity } from '../../../templates/modules/entities/entity.js';
import { CreateInjection } from '../../../templates/modules/inject/injection.js';
import { CreateFakeRepository } from '../../../templates/modules/repositories/fakes/fakeRepository.js';
import { CreateIRepository } from '../../../templates/modules/repositories/IRepository.js';
import { CreateRepository } from '../../../templates/modules/repositories/repository.js';
import { CreateIndependentRoute } from '../../../templates/modules/routes/independentRoutes.js';
import { CreateIndexRoute } from '../../../templates/modules/routes/indexRouter.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';

export class MakeInfra {
  messages;
  console;
  names;
  createIndexRoute;
  createIndependentRoute;
  createIRepository;
  createFakeRepository;
  createRepository;
  createInjection;
  createEntity;
  createModuleDTO;
  createRoutes;
  createContainer;
  constructor(names) {
    this.names = names;
    this.messages = new Messages().execute();
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
  async execute() {
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
          this.names.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
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
          this.names.pluralLowerModuleName,
          'dtos',
          `I${this.names.upperModuleName}DTO.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
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
          this.names.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
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
          this.names.pluralLowerModuleName,
          'entities',
          `${this.names.upperModuleName}.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
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
          this.names.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createRepository.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createRepository.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createIRepository.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          `I${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createIRepository.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
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
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createFakeRepository.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'modules',
          this.names.pluralLowerModuleName,
          'repositories',
          'fakes',
          `Fake${this.names.pluralUpperModuleName}Repository.ts`,
        ),
        this.createFakeRepository.execute(),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'index.ts'),
      this.createInjection.execute(),
    );
    if (
      !existsSync(
        resolve('src', 'routes', `${this.names.lowerModuleName}Router.ts`),
      )
    ) {
      appendFileSync(
        resolve('src', 'routes', `${this.names.lowerModuleName}Router.ts`),
        this.createIndependentRoute.execute(),
      );
    } else {
      truncateSync(
        resolve('src', 'routes', `${this.names.lowerModuleName}Router.ts`),
      );
      appendFileSync(
        resolve('src', 'routes', `${this.names.lowerModuleName}Router.ts`),
        this.createIndependentRoute.execute(),
      );
    }
    appendFileSync(
      resolve('src', 'routes', 'index.ts'),
      this.createIndexRoute.execute(),
    );
  }
}
