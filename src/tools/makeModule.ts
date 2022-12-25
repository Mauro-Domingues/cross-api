import fs from 'fs';

import createModuleDTO from '../templates/modules/dtos/moduleDTO';
import createEntity from '../templates/modules/entities/entity';
import createFakeRepository from '../templates/modules/repositories/fakes/fakeRepository';
import createIRepository from '../templates/modules/repositories/IRepository';
import createRepository from '../templates/modules/repositories/repository';

export default function makeModule(data: { [key: string]: string }): void {
  if (!fs.existsSync(`src/modules/${data.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${data.pluralLowerModuleName}`);
  }
  if (!fs.existsSync(`src/modules/${data.pluralLowerModuleName}/dtos`)) {
    fs.mkdirSync(`src/modules/${data.pluralLowerModuleName}/dtos`);
  }
  if (!fs.existsSync(`src/modules/${data.pluralLowerModuleName}/entities`)) {
    fs.mkdirSync(`src/modules/${data.pluralLowerModuleName}/entities`);
  }
  if (
    !fs.existsSync(`src/modules/${data.pluralLowerModuleName}/repositories`)
  ) {
    fs.mkdirSync(`src/modules/${data.pluralLowerModuleName}/repositories`);
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/repositories/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${data.pluralLowerModuleName}/repositories/fakes`,
    );
  }
  if (!fs.existsSync(`src/modules/${data.pluralLowerModuleName}/services`)) {
    fs.mkdirSync(`src/modules/${data.pluralLowerModuleName}/services`);
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/services/create${data.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${data.pluralLowerModuleName}/services/create${data.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/services/delete${data.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${data.pluralLowerModuleName}/services/delete${data.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/services/list${data.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${data.pluralLowerModuleName}/services/list${data.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/services/show${data.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${data.pluralLowerModuleName}/services/show${data.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/services/update${data.upperModuleName}`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${data.pluralLowerModuleName}/services/update${data.upperModuleName}`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/dtos/I${data.upperModuleName}DTO.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/dtos/I${data.upperModuleName}DTO.ts`,
      createModuleDTO(data.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${data.pluralLowerModuleName}/dtos/I${data.upperModuleName}DTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/dtos/I${data.upperModuleName}DTO.ts`,
      createModuleDTO(data.upperModuleName),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/entities/${data.upperModuleName}.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/entities/${data.upperModuleName}.ts`,
      createEntity(data.upperModuleName, data.dbModuleName),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${data.pluralLowerModuleName}/entities/${data.upperModuleName}.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/entities/${data.upperModuleName}.ts`,
      createEntity(data.upperModuleName, data.dbModuleName),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/repositories/${data.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/repositories/${data.pluralUpperModuleName}Repository.ts`,
      createRepository(
        data.lowerModuleName,
        data.upperModuleName,
        data.pluralLowerModuleName,
        data.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${data.pluralLowerModuleName}/repositories/${data.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/repositories/${data.pluralUpperModuleName}Repository.ts`,
      createRepository(
        data.lowerModuleName,
        data.upperModuleName,
        data.pluralLowerModuleName,
        data.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/repositories/I${data.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/repositories/I${data.pluralUpperModuleName}Repository.ts`,
      createIRepository(
        data.lowerModuleName,
        data.upperModuleName,
        data.pluralLowerModuleName,
        data.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${data.pluralLowerModuleName}/repositories/I${data.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/repositories/I${data.pluralUpperModuleName}Repository.ts`,
      createIRepository(
        data.lowerModuleName,
        data.upperModuleName,
        data.pluralLowerModuleName,
        data.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${data.pluralLowerModuleName}/repositories/fakes/fake${data.pluralUpperModuleName}Repository.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/repositories/fakes/fake${data.pluralUpperModuleName}Repository.ts`,
      createFakeRepository(
        data.lowerModuleName,
        data.upperModuleName,
        data.pluralLowerModuleName,
        data.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${data.pluralLowerModuleName}/repositories/fakes/fake${data.pluralUpperModuleName}Repository.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${data.pluralLowerModuleName}/repositories/fakes/fake${data.pluralUpperModuleName}Repository.ts`,
      createFakeRepository(
        data.lowerModuleName,
        data.upperModuleName,
        data.pluralLowerModuleName,
        data.pluralUpperModuleName,
      ),
      error => {
        if (error) throw error;
      },
    );
  }
}
