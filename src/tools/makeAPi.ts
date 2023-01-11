import fs from 'fs';

import createExpressNamespace from '../templates/@types/expressNamespace';
import createApp from '../templates/api/app';
import createServer from '../templates/api/server';
import createTypeorm from '../templates/api/typeorm';
import createICacheDTO from '../templates/dtos/ICacheDTO';
import createIListDTO from '../templates/dtos/IListDTO';
import createIObjectDTO from '../templates/dtos/IObjectDTO';
import createIResponseDTO from '../templates/dtos/IResponseDTO';
import createAppError from '../templates/errors/appError';
import createContainer from '../templates/index/container';
import createRoutes from '../templates/index/routes';
import createRateLimiter from '../templates/middlewares/rateLimiter';
import createAuthConfig from '../templates/providers/config/authConfig';
import createBabelConfig from '../templates/root/babelConfig';
import createDataSource from '../templates/root/dataSource';
import createDockerCompose from '../templates/root/dockerCompose';
import createEditorConfig from '../templates/root/editorConfig';
import createEnv from '../templates/root/env';
import createEsLintIgnore from '../templates/root/esLintIgnore';
import createEsLintrcJson from '../templates/root/esLintrcJson';
import createGitIgnore from '../templates/root/gitIgnore';
import createJestConfig from '../templates/root/jestConfig';
import createNodemonJson from '../templates/root/nodemonJson';
import createPrettierConfig from '../templates/root/prettierConfig';
import createTsConfig from '../templates/root/tsConfig';
import createDecimaAdjust from '../templates/utils/decimalAdjust';
import createMapAndClone from '../templates/utils/mappers/mapAndClone';
import createMapAndInsert from '../templates/utils/mappers/mapAndInsert';
import createMapAndPatch from '../templates/utils/mappers/mapAndPatch';
import createMapAndPatchString from '../templates/utils/mappers/mapAndPatchString';
import createMapAndUpdate from '../templates/utils/mappers/mapAndUpdate';
import createMapAndUpdateString from '../templates/utils/mappers/mapAndUpdateString';
import makeProvider from './makeProvider';
import messages from './messages';

export default async function makeApi() {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/@types')) {
    fs.mkdirSync('src/@types');
  }
  if (!fs.existsSync('src/assets')) {
    fs.mkdirSync('src/assets');
  }
  if (!fs.existsSync('src/dtos')) {
    fs.mkdirSync('src/dtos');
  }
  if (!fs.existsSync('src/middlewares')) {
    fs.mkdirSync('src/middlewares');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/routes')) {
    fs.mkdirSync('src/routes');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/utils')) {
    fs.mkdirSync('src/utils');
  }
  if (!fs.existsSync('src/utils/mappers')) {
    fs.mkdirSync('src/utils/mappers');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/errors')) {
    fs.mkdirSync('src/shared/errors');
  }
  if (!fs.existsSync('src/shared/typeorm')) {
    fs.mkdirSync('src/shared/typeorm');
  }
  if (!fs.existsSync('src/shared/container/providers')) {
    fs.mkdirSync('src/shared/container/providers');
  }
  if (!fs.existsSync('src/shared/typeorm/migrations')) {
    fs.mkdirSync('src/shared/typeorm/migrations');
  }
  if (!fs.existsSync('src/shared/typeorm/seeds')) {
    fs.mkdirSync('src/shared/typeorm/seeds');
  }
  console.log(
    '\x1b[1m',
    '\x1b[38;2;0;155;255m',
    messages.apiCreated,
    '\x1b[0m',
  );
  if (!fs.existsSync('.editorconfig')) {
    fs.appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.editorconfig', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .editorconfig ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.env')) {
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.env', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
    });
  }
  console.log('\x1b[38;2;255;255;0m', `- .env ${messages.created}`, '\x1b[0m');
  if (!fs.existsSync('.env.template')) {
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.env.template', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .env.template ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.eslintignore')) {
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.eslintignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .eslintignore ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.eslintrc.json')) {
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.eslintrc.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .eslintrc.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('.gitignore')) {
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('.gitignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- .gitignore ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('babel.config.js')) {
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('babel.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- babel.config.js ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('dataSource.ts')) {
    fs.appendFile('dataSource.ts', createDataSource(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('dataSource.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('dataSource.ts', createDataSource(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- dataSource.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('docker-compose.yml')) {
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('docker-compose.yml', error => {
      if (error) console.log(error);
    });
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- docker-compose.yml ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('jest.config.ts')) {
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('jest.config.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- jest.config.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('nodemon.json')) {
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('nodemon.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- nodemon.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('prettier.config.js')) {
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('prettier.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- prettier.config.js ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('tsconfig.json')) {
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('tsconfig.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- tsconfig.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/swagger.json')) {
    fs.appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/swagger.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/swagger.json', '{}', error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- swagger.json ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/@types/express.d.ts')) {
    fs.appendFile(
      'src/@types/express.d.ts',
      createExpressNamespace(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/@types/express.d.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/@types/express.d.ts',
      createExpressNamespace(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- express.d.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/config/auth.ts')) {
    fs.appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/auth.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- auth.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/ICacheDTO.ts')) {
    fs.appendFile('src/dtos/ICacheDTO.ts', createICacheDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/ICacheDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/ICacheDTO.ts', createICacheDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- ICacheDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/IListDTO.ts')) {
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/IListDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IListDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/IObjectDTO.ts')) {
    fs.appendFile('src/dtos/IObjectDTO.ts', createIObjectDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/IObjectDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IObjectDTO.ts', createIObjectDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IObjectDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/dtos/IResponseDTO.ts')) {
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/dtos/IResponseDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- IResponseDTO.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/middlewares/RateLimiter.ts')) {
    fs.appendFile(
      'src/middlewares/RateLimiter.ts',
      createRateLimiter(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/middlewares/RateLimiter.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/middlewares/RateLimiter.ts',
      createRateLimiter(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- RateLimiter.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/routes/index.ts')) {
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/routes/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- routes.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/shared/app.ts')) {
    fs.appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/shared/app.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- app.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/shared/server.ts')) {
    fs.appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/shared/server.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- server.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/mappers/mapAndCloneAttribute.ts')) {
    fs.appendFile(
      'src/utils/mappers/mapAndCloneAttribute.ts',
      createMapAndClone(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mappers/mapAndCloneAttribute.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mappers/mapAndCloneAttribute.ts',
      createMapAndClone(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndCloneAttribute.ts.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/mappers/mapAndInsertAttribute.ts')) {
    fs.appendFile(
      'src/utils/mappers/mapAndInsertAttribute.ts',
      createMapAndInsert(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mappers/mapAndInsertAttribute.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mappers/mapAndInsertAttribute.ts',
      createMapAndInsert(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndInsertAttribute.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/mappers/mapAndPatchAttribute.ts')) {
    fs.appendFile(
      'src/utils/mappers/mapAndPatchAttribute.ts',
      createMapAndPatch(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mappers/mapAndPatchAttribute.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mappers/mapAndPatchAttribute.ts',
      createMapAndPatch(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndPatchAttribute.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/mappers/mapAndPatchString.ts')) {
    fs.appendFile(
      'src/utils/mappers/mapAndPatchString.ts',
      createMapAndPatchString(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mappers/mapAndPatchString.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mappers/mapAndPatchString.ts',
      createMapAndPatchString(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndPatchString.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/mappers/mapAndUpdateAttribute.ts')) {
    fs.appendFile(
      'src/utils/mappers/mapAndUpdateAttribute.ts',
      createMapAndUpdate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mappers/mapAndUpdateAttribute.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mappers/mapAndUpdateAttribute.ts',
      createMapAndUpdate(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndUpdateAttribute.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/mappers/mapAndUpdateString.ts')) {
    fs.appendFile(
      'src/utils/mappers/mapAndUpdateString.ts',
      createMapAndUpdateString(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mappers/mapAndUpdateString.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mappers/mapAndUpdateString.ts',
      createMapAndUpdateString(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapAndUpdateString.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/decimalAdjust.ts')) {
    fs.appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/utils/decimalAdjust.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- decimaAdjust.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/shared/container/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- container/index.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/shared/errors/AppError.ts')) {
    fs.appendFile('src/shared/errors/AppError.ts', createAppError(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/shared/errors/AppError.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/errors/AppError.ts', createAppError(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- AppError.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/shared/typeorm/index.ts')) {
    fs.appendFile('src/shared/typeorm/index.ts', createTypeorm(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/shared/typeorm/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/typeorm/index.ts', createTypeorm(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- typeorm/index.ts ${messages.created}`,
    '\x1b[0m',
  );
  makeProvider('cache');
}
