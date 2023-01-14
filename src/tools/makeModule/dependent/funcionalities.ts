import createDependentController from '@templates/modules/services/createDependent/createController';
import createDependentService from '@templates/modules/services/createDependent/createService';
import deleteDependentController from '@templates/modules/services/deleteDependent/deleteController';
import deleteDependentService from '@templates/modules/services/deleteDependent/deleteService';
import listDependentController from '@templates/modules/services/listDependent/listController';
import listDependentService from '@templates/modules/services/listDependent/listService';
import showDependentController from '@templates/modules/services/showDependent/showController';
import showDependentService from '@templates/modules/services/showDependent/showService';
import updateDependentController from '@templates/modules/services/updateDependent/updateController';
import updateDependentService from '@templates/modules/services/updateDependent/updateService';
import fs from 'fs';

export default async function makeDependentFunctionalities(
  moduleData: { [key: string]: string },
  fatherData: { [key: string]: string },
): Promise<void> {
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
}
