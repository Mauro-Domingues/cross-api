import fs from 'fs';

import createContainer from '../templates/index/container';
import createModuleDTO from '../templates/modules/dtos/moduleDTO';
import createEntity from '../templates/modules/entities/entity';
import createInjection from '../templates/modules/inject/injection';
import createFakeRepository from '../templates/modules/repositories/fakes/fakeRepository';
import createIRepository from '../templates/modules/repositories/IRepository';
import createRepository from '../templates/modules/repositories/repository';
import messages from './messages';

export default function makeModule(
  moduleData: {
    [key: string]: string;
  },
  fatherData?: {
    [key: string]: string;
  },
): void {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (fatherData) {
    if (!fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        messages.moduleNotFound,
        '\x1b[0m',
      );
    } else {
      if (
        !fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`)
      ) {
        fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/dtos`);
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/entities`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/entities`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
        );
      }
      if (
        !fs.existsSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
        )
      ) {
        fs.mkdirSync(
          `src/modules/${fatherData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
        );
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
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/${moduleData.pluralUpperModuleName}Repository.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/I${moduleData.pluralUpperModuleName}Repository.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
        )
      ) {
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
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
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
          error => {
            if (error) console.log(error);
          },
        );
        fs.appendFile(
          `src/modules/${fatherData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- ${moduleData.lowerModuleName}Module ${messages.created}`,
      '\x1b[0m',
    );
  } else if (fatherData !== undefined) {
    if (!fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}`)) {
      fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}`);
    }
    if (
      !fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}/dtos`)
    ) {
      fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}/dtos`);
    }
    if (
      !fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}/entities`)
    ) {
      fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}/entities`);
    }
    if (
      !fs.existsSync(
        `src/modules/${moduleData.pluralLowerModuleName}/repositories`,
      )
    ) {
      fs.mkdirSync(
        `src/modules/${moduleData.pluralLowerModuleName}/repositories`,
      );
    }
    if (
      !fs.existsSync(
        `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes`,
      )
    ) {
      fs.mkdirSync(
        `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes`,
      );
    }
    if (
      !fs.existsSync(`src/modules/${moduleData.pluralLowerModuleName}/services`)
    ) {
      fs.mkdirSync(`src/modules/${moduleData.pluralLowerModuleName}/services`);
    }
    if (
      !fs.existsSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
      )
    ) {
      fs.mkdirSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/create${moduleData.upperModuleName}`,
      );
    }
    if (
      !fs.existsSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
      )
    ) {
      fs.mkdirSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/delete${moduleData.upperModuleName}`,
      );
    }
    if (
      !fs.existsSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
      )
    ) {
      fs.mkdirSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/list${moduleData.upperModuleName}`,
      );
    }
    if (
      !fs.existsSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
      )
    ) {
      fs.mkdirSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/show${moduleData.upperModuleName}`,
      );
    }
    if (
      !fs.existsSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
      )
    ) {
      fs.mkdirSync(
        `src/modules/${moduleData.pluralLowerModuleName}/services/update${moduleData.upperModuleName}`,
      );
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
        `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
      )
    ) {
      fs.appendFile(
        `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
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
        `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
        error => {
          if (error) console.log(error);
        },
      );
      fs.appendFile(
        `src/modules/${moduleData.pluralLowerModuleName}/repositories/fakes/fake${moduleData.pluralUpperModuleName}Repository.ts`,
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
    console.log(
      '\x1b[38;2;255;255;0m',
      `- ${moduleData.lowerModuleName}Module ${messages.created}`,
      '\x1b[0m',
    );
  }
}
