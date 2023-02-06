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

export default async function makeFunctionalities(moduleData: {
  [key: string]: string;
}): Promise<void> {
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
      deleteController(moduleData.lowerModuleName, moduleData.upperModuleName),
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
      deleteController(moduleData.lowerModuleName, moduleData.upperModuleName),
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
}
