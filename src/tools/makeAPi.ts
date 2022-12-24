import fs from 'fs';

import createApp from '../templates/app';
import createAppError from '../templates/appError';
import createAuthConfig from '../templates/authConfig';
import createBabelConfig from '../templates/babelConfig';
import createCacheConfig from '../templates/cacheConfig';
import createContainer from '../templates/container';
import createCryptoConfig from '../templates/cryptoConfig';
import createDataSource from '../templates/dataSource';
import createDecimaAdjust from '../templates/decimalAdjust';
import createDockerCompose from '../templates/dockerCompose';
import createEditorConfig from '../templates/editorConfig';
import createEnv from '../templates/env';
import createEsLintIgnore from '../templates/esLintIgnore';
import createEsLintrcJson from '../templates/esLintrcJson';
import createExpressNamespace from '../templates/expressNamespace';
import createGitIgnore from '../templates/gitIgnore';
import createIListDTO from '../templates/IListDTO';
import createIResponseDTO from '../templates/IResponseDTO';
import createJestConfig from '../templates/jestConfig';
import createMailConfig from '../templates/mailConfig';
import createMapAttributeList from '../templates/mapAttribute';
import createMapStringAttributeList from '../templates/mapString';
import createNodemonJson from '../templates/nodemonJson';
import createNotificationConfig from '../templates/notificationConfig';
import createPrettierConfig from '../templates/prettierConfig';
import createRateLimiter from '../templates/rateLimiter';
import createRoutes from '../templates/routes';
import createServer from '../templates/server';
import createTsConfig from '../templates/tsConfig';
import createTypeorm from '../templates/typeorm';
import createUploadConfig from '../templates/uploadConfig';
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
  console.log('estrutura criada(criar função de idiomas aqui e abaixo)');
  if (!fs.existsSync('.editorconfig')) {
    fs.appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
      console.log(`.editorconfig ${messages.created}`);
    });
  } else {
    fs.truncate('.editorconfig', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
      console.log(`.editorconfig ${messages.created}`);
    });
  }
  if (!fs.existsSync('.env')) {
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
      console.log(`.env ${messages.created}`);
    });
  } else {
    fs.truncate('.env', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
      console.log(`.env ${messages.created}`);
    });
  }
  if (!fs.existsSync('.env.template')) {
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
      console.log(`.env.template ${messages.created}`);
    });
  } else {
    fs.truncate('.env.template', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
      console.log(`.env.template ${messages.created}`);
    });
  }
  if (!fs.existsSync('.eslintignore')) {
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
      console.log(`.eslintignore ${messages.created}`);
    });
  } else {
    fs.truncate('.eslintignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
      console.log(`.eslintignore ${messages.created}`);
    });
  }
  if (!fs.existsSync('.eslintrc.json')) {
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
      console.log(`.eslintrc.json ${messages.created}`);
    });
  } else {
    fs.truncate('.eslintrc.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
      console.log(`.eslintrc.json ${messages.created}`);
    });
  }
  if (!fs.existsSync('.gitignore')) {
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
      console.log(`.gitignore ${messages.created}`);
    });
  } else {
    fs.truncate('.gitignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
      console.log(`.gitignore ${messages.created}`);
    });
  }
  if (!fs.existsSync('babel.config.js')) {
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
      console.log(`babel.config.js ${messages.created}`);
    });
  } else {
    fs.truncate('babel.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
      console.log(`babel.config.js ${messages.created}`);
    });
  }
  if (!fs.existsSync('dataSource.js')) {
    fs.appendFile('dataSource.js', createDataSource(), error => {
      if (error) throw error;
      console.log(`dataSource.js ${messages.created}`);
    });
  } else {
    fs.truncate('dataSource.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('dataSource.js', createDataSource(), error => {
      if (error) throw error;
      console.log(`dataSource.js ${messages.created}`);
    });
  }
  if (!fs.existsSync('docker-compose.yml')) {
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
      console.log(`docker-compose.yml ${messages.created}`);
    });
  } else {
    fs.truncate('docker-compose.yml', error => {
      if (error) console.log(error);
    });
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
      console.log(`docker-compose.yml ${messages.created}`);
    });
  }
  if (!fs.existsSync('jest.config.ts')) {
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
      console.log(`jest.config.ts ${messages.created}`);
    });
  } else {
    fs.truncate('jest.config.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
      console.log(`jest.config.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('nodemon.json')) {
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
      console.log(`nodemon.json ${messages.created}`);
    });
  } else {
    fs.truncate('nodemon.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
      console.log(`nodemon.json ${messages.created}`);
    });
  }
  if (!fs.existsSync('prettier.config.js')) {
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
      console.log(`prettier.config.js ${messages.created}`);
    });
  } else {
    fs.truncate('prettier.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
      console.log(`prettier.config.js ${messages.created}`);
    });
  }
  if (!fs.existsSync('tsconfig.json')) {
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
      console.log(`tsconfig.json ${messages.created}`);
    });
  } else {
    fs.truncate('tsconfig.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
      console.log(`tsconfig.json ${messages.created}`);
    });
  }
  if (!fs.existsSync('swagger.json')) {
    fs.appendFile('swagger.json', '{}', error => {
      if (error) throw error;
      console.log(`swagger.json ${messages.created}`);
    });
  } else {
    fs.truncate('swagger.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('swagger.json', '{}', error => {
      if (error) throw error;
      console.log(`swagger.json ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/@types/express.d.ts')) {
    fs.appendFile(
      'src/@types/express.d.ts',
      createExpressNamespace(),
      error => {
        if (error) throw error;
        console.log(`express.d.ts ${messages.created}`);
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
        console.log(`express.d.ts ${messages.created}`);
      },
    );
  }
  if (!fs.existsSync('src/config/auth.ts')) {
    fs.appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
      console.log(`auth.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/config/auth.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/auth.ts', createAuthConfig(), error => {
      if (error) throw error;
      console.log(`auth.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/config/cache.ts')) {
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
      console.log(`cache.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
      console.log(`cache.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/config/crypto.ts')) {
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
      console.log(`crypto.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/config/crypto.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
      console.log(`crypto.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/config/mail.ts')) {
    fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
      console.log(`mail.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/config/mail.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
      console.log(`mail.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/config/notification.ts')) {
    fs.appendFile(
      'src/config/notification.ts',
      createNotificationConfig(),
      error => {
        if (error) throw error;
        console.log(`notification.ts ${messages.created}`);
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
        console.log(`notification.ts ${messages.created}`);
      },
    );
  }
  if (!fs.existsSync('src/config/upload.ts')) {
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
      console.log(`upload.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/config/upload.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
      console.log(`upload.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/dtos/IListDTO.ts')) {
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
      console.log(`IListDTO.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/dtos/IListDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
      console.log(`IListDTO.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/dtos/IResponseDTO.ts')) {
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
      console.log(`IResponseDTO.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/dtos/IResponseDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
      console.log(`IResponseDTO.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/middlewares/RateLimiter.ts')) {
    fs.appendFile(
      'src/middlewares/RateLimiter.ts',
      createRateLimiter(),
      error => {
        if (error) throw error;
        console.log(`RateLimiter.ts ${messages.created}`);
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
        console.log(`RateLimiter.ts ${messages.created}`);
      },
    );
  }
  if (!fs.existsSync('src/routes/index.ts')) {
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
      console.log(`routes.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/routes/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/routes/index.ts', createRoutes(), error => {
      if (error) throw error;
      console.log(`routes.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/shared/app.ts')) {
    fs.appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
      console.log(`app.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/shared/app.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/app.ts', createApp(), error => {
      if (error) throw error;
      console.log(`app.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/shared/server.ts')) {
    fs.appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
      console.log(`server.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/shared/server.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/server.ts', createServer(), error => {
      if (error) throw error;
      console.log(`server.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/utils/mapObjectAttribute.ts')) {
    fs.appendFile(
      'src/utils/mapObjectAttribute.ts',
      createMapAttributeList(),
      error => {
        if (error) throw error;
        console.log(`mapObjectAttribute.ts ${messages.created}`);
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
        console.log(`mapObjectAttribute.ts ${messages.created}`);
      },
    );
  }
  if (!fs.existsSync('src/utils/mapStringAttribute.ts')) {
    fs.appendFile(
      'src/utils/mapStringAttribute.ts',
      createMapStringAttributeList(),
      error => {
        if (error) throw error;
        console.log(`server.ts ${messages.created}`);
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
        console.log(`server.ts ${messages.created}`);
      },
    );
  }
  if (!fs.existsSync('src/utils/decimalAdjust.ts')) {
    fs.appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
      console.log(`decimalAdjust.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/utils/decimalAdjust.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/utils/decimalAdjust.ts', createDecimaAdjust(), error => {
      if (error) throw error;
      console.log(`decimalAdjust.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
      console.log(`container ${messages.created}`);
    });
  } else {
    fs.truncate('src/shared/container/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
      console.log(`container ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/shared/errors/AppError.ts')) {
    fs.appendFile('src/shared/errors/AppError.ts', createAppError(), error => {
      if (error) throw error;
      console.log(`AppError.ts ${messages.created}`);
    });
  } else {
    fs.truncate('src/shared/errors/AppError.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/errors/AppError.ts', createAppError(), error => {
      if (error) throw error;
      console.log(`AppError.ts ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/shared/typeorm/index.ts')) {
    fs.appendFile('src/shared/typeorm/index.ts', createTypeorm(), error => {
      if (error) throw error;
      console.log(`typeorm ${messages.created}`);
    });
  } else {
    fs.truncate('src/shared/typeorm/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/shared/typeorm/index.ts', createTypeorm(), error => {
      if (error) throw error;
      console.log(`typeorm ${messages.created}`);
    });
  }
  if (!fs.existsSync('src/shared/container/providers/index.ts')) {
    fs.appendFile(
      'src/shared/container/providers/index.ts',
      `import './CacheProvider';`,
      error => {
        if (error) throw error;
        console.log(`providers ${messages.created}`);
      },
    );
  } else {
    fs.truncate('src/shared/container/providers/index.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile(
      'src/shared/container/providers/index.ts',
      `import './CacheProvider';`,
      error => {
        if (error) throw error;
        console.log(`providers ${messages.created}`);
      },
    );
  }
}

export default makeApi;
