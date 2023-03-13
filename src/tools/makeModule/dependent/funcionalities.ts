import { appendFile, existsSync, truncate } from 'fs';
import { createDependentController } from '@templates/modules/services/createDependent/createController';
import { createDependentService } from '@templates/modules/services/createDependent/createService';
import { deleteDependentController } from '@templates/modules/services/deleteDependent/deleteController';
import { deleteDependentService } from '@templates/modules/services/deleteDependent/deleteService';
import { listDependentController } from '@templates/modules/services/listDependent/listController';
import { listDependentService } from '@templates/modules/services/listDependent/listService';
import { showDependentController } from '@templates/modules/services/showDependent/showController';
import { showDependentService } from '@templates/modules/services/showDependent/showService';
import { updateDependentController } from '@templates/modules/services/updateDependent/updateController';
import { updateDependentService } from '@templates/modules/services/updateDependent/updateService';
import { IModuleNamesDTO } from '@tools/names';

export async function makeDependentFunctionalities(
  names: IModuleNamesDTO,
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
      createDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.ts`,
      createDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
      createDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.ts`,
      createDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
      deleteDependentController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.ts`,
      deleteDependentController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
      deleteDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.ts`,
      deleteDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
      listDependentController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.ts`,
      listDependentController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
      listDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.ts`,
      listDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
      showDependentController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.ts`,
      showDependentController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
      showDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.ts`,
      showDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
      updateDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.ts`,
      updateDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
      updateDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.ts`,
      updateDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
}
