import fs from 'fs';
import createContainer from '../../../templates/index/container';
import createRoutes from '../../../templates/index/routes';
import createModuleDTO from '../../../templates/modules/dtos/moduleDTO';
import createEntity from '../../../templates/modules/entities/entity';
import createInjection from '../../../templates/modules/inject/injection';
import createFakeRepository from '../../../templates/modules/repositories/fakes/fakeRepository';
import createIRepository from '../../../templates/modules/repositories/IRepository';
import createRepository from '../../../templates/modules/repositories/repository';
import createIndependentRoute from '../../../templates/modules/routes/independentRoutes';
import createIndexRoute from '../../../templates/modules/routes/indexRouter';

export default async function makeInfra(moduleData: {
  [key: string]: string;
}): Promise<void> {
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
