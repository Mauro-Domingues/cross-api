import fs from 'fs';
import createContainer from '@templates/index/container';
import createRoutes from '@templates/index/routes';
import createModuleDTO from '@templates/modules/dtos/moduleDTO';
import createEntity from '@templates/modules/entities/entity';
import createInjection from '@templates/modules/inject/injection';
import createFakeRepository from '@templates/modules/repositories/fakes/fakeRepository';
import createIRepository from '@templates/modules/repositories/IRepository';
import createRepository from '@templates/modules/repositories/repository';
import createIndependentRoute from '@templates/modules/routes/independentRoutes';
import createIndexRoute from '@templates/modules/routes/indexRouter';
import IModuleNamesDTO from 'index';

export default async function makeInfra(names: IModuleNamesDTO): Promise<void> {
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
      `src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
      createModuleDTO(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/dtos/I${names.upperModuleName}DTO.ts`,
      createModuleDTO(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
      createEntity(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/entities/${names.upperModuleName}.ts`,
      createEntity(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
      createRepository(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/repositories/${names.pluralUpperModuleName}Repository.ts`,
      createRepository(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
      createIRepository(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/repositories/I${names.pluralUpperModuleName}Repository.ts`,
      createIRepository(names),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
      createFakeRepository(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${names.pluralLowerModuleName}/repositories/fakes/Fake${names.pluralUpperModuleName}Repository.ts`,
      createFakeRepository(names),
      error => {
        if (error) throw error;
      },
    );
  }
  fs.appendFile(
    'src/shared/container/index.ts',
    createInjection(names),
    error => {
      if (error) throw error;
    },
  );
  if (!fs.existsSync(`src/routes/${names.lowerModuleName}Router.ts`)) {
    fs.appendFile(
      `src/routes/${names.lowerModuleName}Router.ts`,
      createIndependentRoute(names),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(`src/routes/${names.lowerModuleName}Router.ts`, error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      `src/routes/${names.lowerModuleName}Router.ts`,
      createIndependentRoute(names),
      error => {
        if (error) throw error;
      },
    );
  }
  fs.appendFile(`src/routes/index.ts`, createIndexRoute(names), error => {
    if (error) throw error;
  });
}
