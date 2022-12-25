import fs from 'fs';

import createExpressNamespace from '../templates/@types/expressNamespace';
import createApp from '../templates/api/app';
import createServer from '../templates/api/server';
import createTypeorm from '../templates/api/typeorm';
import createAuthConfig from '../templates/config/authConfig';
import createCacheConfig from '../templates/config/cacheConfig';
import createCryptoConfig from '../templates/config/cryptoConfig';
import createMailConfig from '../templates/config/mailConfig';
import createNotificationConfig from '../templates/config/notificationConfig';
import createUploadConfig from '../templates/config/uploadConfig';
import createIListDTO from '../templates/dtos/IListDTO';
import createIResponseDTO from '../templates/dtos/IResponseDTO';
import createAppError from '../templates/errors/appError';
import createContainer from '../templates/index/container';
import createRoutes from '../templates/index/routes';
import createRateLimiter from '../templates/middlewares/rateLimiter';
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
import createMapAttributeList from '../templates/utils/mapAttribute';
import createMapStringAttributeList from '../templates/utils/mapString';
import makeProvider from './makeProvider';
import messages from './messages';

async function makeApi() {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/@types')) {
    fs.mkdirSync('src/@types');
  }
  if (!fs.existsSync('src/assets')) {
    fs.mkdirSync('src/assets');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
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
  if (!fs.existsSync('src/config/cache.ts')) {
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- cache.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/config/crypto.ts')) {
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/crypto.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- crypto.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/config/mail.ts')) {
    fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/mail.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mail.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/config/notification.ts')) {
    fs.appendFile(
      'src/config/notification.ts',
      createNotificationConfig(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/config/notification.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/config/notification.ts',
      createNotificationConfig(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- notification.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/config/upload.ts')) {
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/upload.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
    });
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- upload.ts ${messages.created}`,
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
  if (!fs.existsSync('src/utils/mapObjectAttribute.ts')) {
    fs.appendFile(
      'src/utils/mapObjectAttribute.ts',
      createMapAttributeList(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mapObjectAttribute.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mapObjectAttribute.ts',
      createMapAttributeList(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapObjectAttribute.ts ${messages.created}`,
    '\x1b[0m',
  );
  if (!fs.existsSync('src/utils/mapStringAttribute.ts')) {
    fs.appendFile(
      'src/utils/mapStringAttribute.ts',
      createMapStringAttributeList(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate('src/utils/mapStringAttribute.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/utils/mapStringAttribute.ts',
      createMapStringAttributeList(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- mapStringAttribute.ts ${messages.created}`,
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

export default makeApi;
