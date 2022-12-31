import fs from 'fs';

import createContainer from '../templates/index/container';
import createRoutes from '../templates/index/routes';
import createModuleDTO from '../templates/modules/dtos/moduleDTO';
import createEntity from '../templates/modules/entities/entity';
import createDependentInjection from '../templates/modules/inject/dependentInjection';
import createDependentRepository from '../templates/modules/repositories/dependentRepository';
import createDependentFakeRepository from '../templates/modules/repositories/fakes/fakeDependentRepository';
import createIDependentRepository from '../templates/modules/repositories/IDependentRepository';
import createDependentRoute from '../templates/modules/routes/dependentRoutes';
import createDependentController from '../templates/modules/services/createDependent/createController';
import createSpecDependentController from '../templates/modules/services/createDependent/createControllerSpec';
import createDependentService from '../templates/modules/services/createDependent/createService';
import createSpecDependentService from '../templates/modules/services/createDependent/createServiceSpec';
import deleteDependentController from '../templates/modules/services/deleteDependent/deleteController';
import deleteSpecDependentController from '../templates/modules/services/deleteDependent/deleteControllerSpec';
import deleteDependentService from '../templates/modules/services/deleteDependent/deleteService';
import deleteSpecDependentService from '../templates/modules/services/deleteDependent/deleteServiceSpec';
import listDependentController from '../templates/modules/services/listDependent/listController';
import listDependentService from '../templates/modules/services/listDependent/listService';
import showDependentController from '../templates/modules/services/showDependent/showController';
import showDependentService from '../templates/modules/services/showDependent/showService';
import updateDependentController from '../templates/modules/services/updateDependent/updateController';
import updateDependentService from '../templates/modules/services/updateDependent/updateService';
import messages from './messages';

export default function makeDependentModule(
  moduleData: {
    [key: string]: string;
  },
  fatherData: {
    [key: string]: string;
  },
): void {
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
  if (!fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (!fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`)) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`);
  }
  if (
    !fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/entities`)
  ) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/entities`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`,
    );
  }
  if (
    !fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/services`)
  ) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/services`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
      createModuleDTO(moduleData.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/dtos/I${moduleData.upperModuleName}DTO.ts`,
      createModuleDTO(moduleData.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
      createEntity(moduleData.upperModuleName, moduleData.dbModuleName),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/entities/${moduleData.upperModuleName}.ts`,
      createEntity(moduleData.upperModuleName, moduleData.dbModuleName),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
      createDependentRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
      createDependentRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
      createIDependentRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
      createIDependentRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
      createDependentFakeRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/Fake${moduleData.pluralUpperModuleName}Repository.ts`,
      createDependentFakeRepository(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
      createDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.ts`,
      createDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
      createDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.ts`,
      createDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
      deleteDependentController(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.ts`,
      deleteDependentController(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
      deleteDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.ts`,
      deleteDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
      listDependentController(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.ts`,
      listDependentController(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
      listDependentService(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.ts`,
      listDependentService(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
      showDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.ts`,
      showDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
      showDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.ts`,
      showDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
      updateDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.ts`,
      updateDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
      updateDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.ts`,
      updateDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
      createSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Controller.spec.ts`,
      createSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
      createSpecDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}/Create${moduleData.upperModuleName}Service.spec.ts`,
      createSpecDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
      deleteSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralFatherLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Controller.spec.ts`,
      deleteSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralFatherLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
      deleteSpecDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}/Delete${moduleData.upperModuleName}Service.spec.ts`,
      deleteSpecDependentService(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        moduleData.pluralUpperModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //     listSpecDependentController(
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
  //     listSpecDependentController(
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
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //     listSpecDependentService(
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
  //     listSpecDependentService(
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //     showSpecDependentController(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
  //     showSpecDependentController(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //     showSpecDependentService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
  //     showSpecDependentService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //     updateSpecDependentController(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
  //     updateSpecDependentController(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  // if (
  //   !fs.existsSync(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //   )
  // ) {
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //     updateSpecDependentService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // } else {
  //   fs.truncate(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //     error => {
  //       if (error) console.log(error);
  //     },
  //   );
  //   fs.appendFile(
  //     `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
  //     updateSpecDependentService(
  //       moduleData.lowerModuleName,
  //       moduleData.upperModuleName,
  //       moduleData.pluralLowerModuleName,
  //       moduleData.pluralUpperModuleName,
  //       fatherData.pluralLowerModuleName,
  //     ),
  //     error => {
  //       if (error) throw error;
  //     },
  //   );
  // }
  if (!fs.existsSync(`src/routes/${fatherData.lowerModuleName}Router.ts`)) {
    fs.appendFile(
      `src/routes/${fatherData.lowerModuleName}Router.ts`,
      createDependentRoute(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.lowerModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.appendFile(
      `src/routes/${fatherData.lowerModuleName}Router.ts`,
      createDependentRoute(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.lowerModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  fs.appendFile(
    'src/shared/container/index.ts',
    createDependentInjection(
      moduleData.pluralUpperModuleName,
      fatherData.pluralLowerModuleName,
    ),
    error => {
      if (error) throw error;
    },
  );
  console.log(
    '\x1b[38;2;255;255;0m',
    `- ${moduleData.lowerModuleName}Module ${messages.created}`,
    '\x1b[0m',
  );
}
