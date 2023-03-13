import { appendFile, existsSync, truncate } from 'fs';
import { createSpecDependentController } from '@templates/modules/services/createDependent/createControllerSpec';
import { createSpecDependentService } from '@templates/modules/services/createDependent/createServiceSpec';
import { deleteSpecDependentController } from '@templates/modules/services/deleteDependent/deleteControllerSpec';
import { deleteSpecDependentService } from '@templates/modules/services/deleteDependent/deleteServiceSpec';
import { listSpecDependentController } from '@templates/modules/services/listDependent/listControllerSpec';
import { listSpecDependentService } from '@templates/modules/services/listDependent/listServiceSpec';
import { showSpecDependentController } from '@templates/modules/services/showDependent/showControllerSpec';
import { showSpecDependentService } from '@templates/modules/services/showDependent/showServiceSpec';
import { updateSpecDependentController } from '@templates/modules/services/updateDependent/updateControllerSpec';
import { updateSpecDependentService } from '@templates/modules/services/updateDependent/updateServiceSpec';
import { IModuleNamesDTO } from '@tools/names';

export async function makeDependentUnitTests(
  names: IModuleNamesDTO,
  fatherNames: IModuleNamesDTO,
): Promise<void> {
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
      createSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
      createSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
      createSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
      createSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
      deleteSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
      deleteSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
      deleteSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
      deleteSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
      listSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
      listSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
      listSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
      listSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
      showSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
      showSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
      showSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
      showSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
      updateSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
      updateSpecDependentController(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
      updateSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
      updateSpecDependentService(names, fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
}
