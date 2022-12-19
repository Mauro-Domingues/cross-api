import fs from 'fs';

import createBabelConfig from '../templates/babelConfig';
import createCacheConfig from '../templates/cacheConfig';
import createCryptoConfig from '../templates/cryptoConfig';
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
import createNodemonJson from '../templates/nodemonJson';
import createPrettierConfig from '../templates/prettierConfig';
import createRateLimiter from '../templates/rateLimiter';
import createTsConfig from '../templates/tsConfig';
import createUploadConfig from '../templates/uploadConfig';

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
      console.log('.editorconfig Criado');
    });
  } else {
    fs.truncate('.editorconfig', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.editorconfig', createEditorConfig(), error => {
      if (error) throw error;
      console.log('.editorconfig Criado');
    });
  }
  if (!fs.existsSync('.env')) {
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
      console.log('.env Criado');
    });
  } else {
    fs.truncate('.env', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env', createEnv(), error => {
      if (error) throw error;
      console.log('.env Criado');
    });
  }
  if (!fs.existsSync('.env.template')) {
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
      console.log('.env.template Criado');
    });
  } else {
    fs.truncate('.env.template', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.env.template', createEnv(), error => {
      if (error) throw error;
      console.log('.env.template Criado');
    });
  }
  if (!fs.existsSync('.eslintignore')) {
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
      console.log('.eslintignore Criado');
    });
  } else {
    fs.truncate('.eslintignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintignore', createEsLintIgnore(), error => {
      if (error) throw error;
      console.log('.eslintignore Criado');
    });
  }
  if (!fs.existsSync('.eslintrc.json')) {
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
      console.log('.eslintrc.json Criado');
    });
  } else {
    fs.truncate('.eslintrc.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.eslintrc.json', createEsLintrcJson(), error => {
      if (error) throw error;
      console.log('.eslintrc.json Criado');
    });
  }
  if (!fs.existsSync('.gitignore')) {
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
      console.log('.gitignore Criado');
    });
  } else {
    fs.truncate('.gitignore', error => {
      if (error) console.log(error);
    });
    fs.appendFile('.gitignore', createGitIgnore(), error => {
      if (error) throw error;
      console.log('.gitignore Criado');
    });
  }
  if (!fs.existsSync('babel.config.js')) {
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
      console.log('babel.config.js Criado');
    });
  } else {
    fs.truncate('babel.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('babel.config.js', createBabelConfig(), error => {
      if (error) throw error;
      console.log('babel.config.js Criado');
    });
  }
  if (!fs.existsSync('docker-compose.yml')) {
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
      console.log('docker-compose.yml Criado');
    });
  } else {
    fs.truncate('docker-compose.yml', error => {
      if (error) console.log(error);
    });
    fs.appendFile('docker-compose.yml', createDockerCompose(), error => {
      if (error) throw error;
      console.log('docker-compose.yml Criado');
    });
  }
  if (!fs.existsSync('jest.config.ts')) {
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
      console.log('jest.config.ts Criado');
    });
  } else {
    fs.truncate('jest.config.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('jest.config.ts', createJestConfig(), error => {
      if (error) throw error;
      console.log('jest.config.ts Criado');
    });
  }
  if (!fs.existsSync('nodemon.json')) {
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
      console.log('nodemon.json Criado');
    });
  } else {
    fs.truncate('nodemon.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('nodemon.json', createNodemonJson(), error => {
      if (error) throw error;
      console.log('nodemon.json Criado');
    });
  }
  if (!fs.existsSync('prettier.config.js')) {
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
      console.log('prettier.config.js Criado');
    });
  } else {
    fs.truncate('prettier.config.js', error => {
      if (error) console.log(error);
    });
    fs.appendFile('prettier.config.js', createPrettierConfig(), error => {
      if (error) throw error;
      console.log('prettier.config.js Criado');
    });
  }
  if (!fs.existsSync('tsconfig.json')) {
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
      console.log('tsconfig.json Criado');
    });
  } else {
    fs.truncate('tsconfig.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('tsconfig.json', createTsConfig(), error => {
      if (error) throw error;
      console.log('tsconfig.json Criado');
    });
  }
  if (!fs.existsSync('swagger.json')) {
    fs.appendFile('swagger.json', '{}', error => {
      if (error) throw error;
      console.log('swagger.json Criado');
    });
  } else {
    fs.truncate('swagger.json', error => {
      if (error) console.log(error);
    });
    fs.appendFile('swagger.json', '{}', error => {
      if (error) throw error;
      console.log('swagger.json Criado');
    });
  }
  if (!fs.existsSync('src/@types/express.d.ts')) {
    fs.appendFile(
      'src/@types/express.d.ts',
      createExpressNamespace(),
      error => {
        if (error) throw error;
        console.log('express.d.ts Criado');
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
        console.log('express.d.ts Criado');
      },
    );
  }
  if (!fs.existsSync('src/config/cache.ts')) {
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
      console.log('express.d.ts Criado');
    });
  } else {
    fs.truncate('src/config/cache.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/cache.ts', createCacheConfig(), error => {
      if (error) throw error;
      console.log('express.d.ts Criado');
    });
  }
  if (!fs.existsSync('src/config/crypto.ts')) {
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
      console.log('crypto.ts Criado');
    });
  } else {
    fs.truncate('src/config/crypto.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/crypto.ts', createCryptoConfig(), error => {
      if (error) throw error;
      console.log('crypto.ts Criado');
    });
  }
  if (!fs.existsSync('src/config/upload.ts')) {
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
      console.log('upload.ts Criado');
    });
  } else {
    fs.truncate('src/config/upload.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/upload.ts', createUploadConfig(), error => {
      if (error) throw error;
      console.log('upload.ts Criado');
    });
  }
  if (!fs.existsSync('src/dtos/IListDTO.ts')) {
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
      console.log('IListDTO.ts Criado');
    });
  } else {
    fs.truncate('src/dtos/IListDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IListDTO.ts', createIListDTO(), error => {
      if (error) throw error;
      console.log('IListDTO.ts Criado');
    });
  }
  if (!fs.existsSync('src/dtos/IResponseDTO.ts')) {
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
      console.log('IResponseDTO.ts Criado');
    });
  } else {
    fs.truncate('src/dtos/IResponseDTO.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/dtos/IResponseDTO.ts', createIResponseDTO(), error => {
      if (error) throw error;
      console.log('IResponseDTO.ts Criado');
    });
  }
  if (!fs.existsSync('src/middlewares/RateLimiter.ts')) {
    fs.appendFile(
      'src/middlewares/RateLimiter.ts',
      createRateLimiter(),
      error => {
        if (error) throw error;
        console.log('RateLimiter.ts Criado');
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
        console.log('RateLimiter.ts Criado');
      },
    );
  }
}

export default makeApi;
