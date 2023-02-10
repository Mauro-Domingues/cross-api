import fs from 'fs';
import createController from '@templates/modules/services/create/createController';
import createService from '@templates/modules/services/create/createService';
import deleteController from '@templates/modules/services/delete/deleteController';
import deleteService from '@templates/modules/services/delete/deleteService';
import listController from '@templates/modules/services/list/listController';
import listService from '@templates/modules/services/list/listService';
import showController from '@templates/modules/services/show/showController';
import showService from '@templates/modules/services/show/showService';
import updateController from '@templates/modules/services/update/updateController';
import updateService from '@templates/modules/services/update/updateService';
import IModuleNamesDTO from 'index';

export default async function makeFunctionalities(
  names: IModuleNamesDTO,
): Promise<void> {
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
      createController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
      createController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
      createService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
      createService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
      deleteController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
      deleteController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
      deleteService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
      deleteService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
      listController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
      listController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
      listService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
      listService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
      showController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
      showController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
      showService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
      showService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
      updateController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
      updateController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
      updateService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
      updateService(names),
      error => {
        if (error) throw error;
      },
    );
  }
}
