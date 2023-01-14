import createContainer from '@templates/index/container';
import createRoutes from '@templates/index/routes';
import createModuleDTO from '@templates/modules/dtos/moduleDTO';
import createEntity from '@templates/modules/entities/entity';
import createDependentInjection from '@templates/modules/inject/dependentInjection';
import createDependentRepository from '@templates/modules/repositories/dependentRepository';
import createDependentFakeRepository from '@templates/modules/repositories/fakes/fakeDependentRepository';
import createIDependentRepository from '@templates/modules/repositories/IDependentRepository';
import createDependentRoute from '@templates/modules/routes/dependentRoutes';
import createFullDependentRoute from '@templates/modules/routes/fullDependentRoutes';
import createIndexDependentRoute from '@templates/modules/routes/indexDependentRouter';
import fs from 'fs';

export default async function makeDependentInfra(
  moduleData: { [key: string]: string },
  fatherData: { [key: string]: string },
): Promise<void> {
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }

  if (!fs.existsSync('src/routes/index.ts')) {
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
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

  if (!fs.existsSync(`src/routes/${fatherData.lowerModuleName}Router.ts`)) {
    fs.appendFile(
      `src/routes/${fatherData.lowerModuleName}Router.ts`,
      createFullDependentRoute(
        moduleData.upperModuleName,
        moduleData.pluralLowerModuleName,
        fatherData.lowerModuleName,
        fatherData.pluralLowerModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
    fs.appendFile(
      `src/routes/index.ts`,
      createIndexDependentRoute(
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
}
