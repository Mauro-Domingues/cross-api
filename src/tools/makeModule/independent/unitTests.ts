import { appendFile, existsSync, truncate } from 'fs';
import { createSpecController } from '@templates/modules/services/create/createControllerSpec';
import { createSpecService } from '@templates/modules/services/create/createServiceSpec';
import { deleteSpecController } from '@templates/modules/services/delete/deleteControllerSpec';
import { deleteSpecService } from '@templates/modules/services/delete/deleteServiceSpec';
import { listSpecController } from '@templates/modules/services/list/listControllerSpec';
import { listSpecService } from '@templates/modules/services/list/listServiceSpec';
import { showSpecController } from '@templates/modules/services/show/showControllerSpec';
import { showSpecService } from '@templates/modules/services/show/showServiceSpec';
import { updateSpecController } from '@templates/modules/services/update/updateControllerSpec';
import { updateSpecService } from '@templates/modules/services/update/updateServiceSpec';
import { IModuleNamesDTO } from '@tools/names';

export async function makeUnitTests(names: IModuleNamesDTO): Promise<void> {
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
      createSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Controller.spec.ts`,
      createSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
      createSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/create${names.upperModuleName}/Create${names.upperModuleName}Service.spec.ts`,
      createSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
      deleteSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Controller.spec.ts`,
      deleteSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
      deleteSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/delete${names.upperModuleName}/Delete${names.upperModuleName}Service.spec.ts`,
      deleteSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
      listSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Controller.spec.ts`,
      listSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
      listSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/list${names.upperModuleName}/List${names.upperModuleName}Service.spec.ts`,
      listSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
      showSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Controller.spec.ts`,
      showSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
      showSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/show${names.upperModuleName}/Show${names.upperModuleName}Service.spec.ts`,
      showSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
      updateSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Controller.spec.ts`,
      updateSpecController(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
    )
  ) {
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
      updateSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${names.pluralLowerModuleName}/services/update${names.upperModuleName}/Update${names.upperModuleName}Service.spec.ts`,
      updateSpecService(names),
      error => {
        if (error) throw error;
      },
    );
  }
}
