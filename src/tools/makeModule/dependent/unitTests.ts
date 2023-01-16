import fs from 'fs';
import createSpecDependentController from '@templates/modules/services/createDependent/createControllerSpec';
import createSpecDependentService from '@templates/modules/services/createDependent/createServiceSpec';
import deleteSpecDependentController from '@templates/modules/services/deleteDependent/deleteControllerSpec';
import deleteSpecDependentService from '@templates/modules/services/deleteDependent/deleteServiceSpec';
import listSpecDependentController from '@templates/modules/services/listDependent/listControllerSpec';
import listSpecDependentService from '@templates/modules/services/listDependent/listServiceSpec';
import showSpecDependentController from '@templates/modules/services/showDependent/showControllerSpec';
import showSpecDependentService from '@templates/modules/services/showDependent/showServiceSpec';
import updateSpecDependentController from '@templates/modules/services/updateDependent/updateControllerSpec';
import updateSpecDependentService from '@templates/modules/services/updateDependent/updateServiceSpec';

export default async function makeDependentUnitTests(
  moduleData: { [key: string]: string },
  fatherData: { [key: string]: string },
): Promise<void> {
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
        fatherData.pluralLowerModuleName,
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
        fatherData.pluralLowerModuleName,
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
      listSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Controller.spec.ts`,
      listSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
      listSpecDependentService(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}/List${moduleData.upperModuleName}Service.spec.ts`,
      listSpecDependentService(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
      showSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Controller.spec.ts`,
      showSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
      showSpecDependentService(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}/Show${moduleData.upperModuleName}Service.spec.ts`,
      showSpecDependentService(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
      updateSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Controller.spec.ts`,
      updateSpecDependentController(
        moduleData.lowerModuleName,
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.pluralLowerModuleName,
        moduleData.dbModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
      updateSpecDependentService(
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
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}/Update${moduleData.upperModuleName}Service.spec.ts`,
      updateSpecDependentService(
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
}
