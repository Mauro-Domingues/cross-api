import fs from 'fs';

import createContainer from '../templates/index/container';
import createRoutes from '../templates/index/routes';
import createModuleDTO from '../templates/modules/dtos/moduleDTO';
import createEntity from '../templates/modules/entities/entity';
import createInjection from '../templates/modules/inject/injection';
import createFakeRepository from '../templates/modules/repositories/fakes/fakeRepository';
import createIRepository from '../templates/modules/repositories/IRepository';
import createRepository from '../templates/modules/repositories/repository';
import createIndependentRoute from '../templates/modules/routes/independentRoutes';
import createIndexRoute from '../templates/modules/routes/indexRouter';
import createController from '../templates/modules/services/create/createController';
import createSpecController from '../templates/modules/services/create/createControllerSpec';
import createService from '../templates/modules/services/create/createService';
import createSpecService from '../templates/modules/services/create/createServiceSpec';
import deleteController from '../templates/modules/services/delete/deleteController';
import deleteSpecController from '../templates/modules/services/delete/deleteControllerSpec';
import deleteService from '../templates/modules/services/delete/deleteService';
import deleteSpecService from '../templates/modules/services/delete/deleteServiceSpec';
import listController from '../templates/modules/services/list/listController';
import listService from '../templates/modules/services/list/listService';
import showController from '../templates/modules/services/show/showController';
import showService from '../templates/modules/services/show/showService';
import updateController from '../templates/modules/services/update/updateController';
import updateService from '../templates/modules/services/update/updateService';
import messages from './messages';

export default function makeIndependentModule(moduleData: {
  [key: string]: string;
}): void {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!fs.existsSync('src/routes')) {
    fs.mkdirSync('src/routes');
  }
  if (!fs.existsSync('src/routes/index.ts')) {
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  }
  if (!fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}`);
  }
  if (!fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}/dtos`)) {
    fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}/dtos`);
  }
  if (
    !fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}/entities`)
  ) {
    fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}/entities`);
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes`,
    );
  }
  if (
    !fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}/services`)
  ) {
    fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}/services`);
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
      createModuleDTO(moduleData.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
      createModuleDTO(moduleData.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
      createEntity(moduleData.upperModuleName, moduleData.dbModuleName),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
      createEntity(moduleData.upperModuleName, moduleData.dbModuleName),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
      createRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
      createRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
      createIRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
      createIRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
      createFakeRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
      createFakeRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  fs.appendFile(
    'src/shared/container/index.ts',
    createInjection(
      moduleData.pluralLowerModuleName,
      moduleData.pluralUpperModuleName,
    ),
    error => {
      if (error) throw error;
    },
  );
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
      createController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
      createController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
      createService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
      createService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
      deleteController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
      deleteController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
      deleteService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
      deleteService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
      listController(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
      listController(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
      listService(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
      listService(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
      showController(moduleData.lowerModuleName, moduleData.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
      showController(moduleData.lowerModuleName, moduleData.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
      showService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
      showService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
      updateController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
      updateController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
      updateService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
      updateService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
      createSpecController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
      createSpecController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
      createSpecService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
      createSpecService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
      deleteSpecController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
      deleteSpecController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
      deleteSpecService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
      deleteSpecService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //     listController(
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //     listController(
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //     listService(
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //     listService(
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //     showController(moduleData.lowerModuleName, moduleData.upperModuleName),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //     showController(moduleData.lowerModuleName, moduleData.upperModuleName),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //     showService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //     showService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //     updateController(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //     updateController(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //     updateService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //     updateService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  if (!fs.existsSync(`src/routes/${moduleData.lowerModuleName}Router.ts`)) {
    fs.appendFile(
      `src/routes/${moduleData.lowerModuleName}Router.ts`,
      createIndependentRoute(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(`src/routes/${moduleData.lowerModuleName}Router.ts`, error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      `src/routes/${moduleData.lowerModuleName}Router.ts`,
      createIndependentRoute(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!fs.existsSync(`src/routes/index.ts`)) {
    fs.appendFile(
      `src/routes/index.ts`,
      createIndexRoute(
        moduleData.lowerModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.appendFile(
      `src/routes/index.ts`,
      createIndexRoute(
        moduleData.lowerModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- ${moduleData.lowerModuleName}Module ${messages.created}`,
    '\x1b[0m',
  );
}
