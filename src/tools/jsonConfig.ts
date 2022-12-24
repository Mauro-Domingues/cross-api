import fs from 'fs';
import readline from 'readline';
import shell from 'shelljs';

// eslint-disable-next-line import/no-relative-packages
import userJson from '../../../../package.json';
import enUs from '../assets/en-us';
import ptBr from '../assets/pt-br';

class LanguageOption {
  Language;

  constructor(Language: string) {
    this.Language = Language;
  }
}

function configJson(): void {
  const languages = [new LanguageOption('en-us'), new LanguageOption('pt-br')];
  const newScript: any = userJson;

  newScript.scripts = {
    ...newScript.scripts,
    cross: 'ts-node ./node_modules/cross-oficial-api-framework/index.ts',
    'dev:server': 'ts-node-dev -r tsconfig-paths/register src/shared/server.ts',
    'migration:generate':
      'typeorm-ts-node-commonjs -d ./src/shared/typeorm/index.ts migration:generate ./src/shared/typeorm/migrations/default',
    'migration:run':
      'typeorm-ts-node-commonjs -d ./src/shared/typeorm/index.ts migration:run',
    test: 'set NODE_ENV=test&&jest --runInBand',
  };

  fs.writeFileSync('./package.json', JSON.stringify(newScript), {
    encoding: 'utf8',
    flag: 'w',
  });

  const dependencies: string[] = [
    'aws-sdk',
    'axios',
    'bcryptjs',
    'celebrate',
    'class-transformer',
    'cors',
    'csv-parse',
    'date-fns',
    'dotenv',
    'express',
    'express-async-errors',
    'handlebars',
    'ioredis',
    'jsonwebtoken',
    'mime',
    'multer',
    'mysql',
    'nodemailer',
    'rate-limiter-flexible',
    'redis',
    'reflect-metadata',
    'supertest',
    'swagger-ui-express',
    'ts-jest',
    'tsyringe',
    'typeorm',
    'uuid',
    'xlsx',
  ];

  const devDependencies: string[] = [
    '@babel/cli',
    '@babel/core',
    '@babel/node',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-decorators',
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@types/bcryptjs',
    '@types/cors',
    '@types/express',
    '@types/ioredis',
    '@types/jest',
    '@types/jsonwebtoken',
    '@types/mime',
    '@types/multer',
    '@types/nodemailer',
    '@types/redis',
    '@types/shelljs',
    '@types/supertest',
    '@types/swagger-ui-express',
    '@types/uuid',
    '@typescript-eslint/eslint-plugin',
    '@typescript-eslint/parser',
    'babel-plugin-module-resolver',
    'babel-plugin-transform-typescript-metadata',
    'eslint',
    'eslint-config-airbnb-base',
    'eslint-config-prettier',
    'eslint-import-resolver-typescript',
    'eslint-plugin-import',
    'eslint-plugin-import-helpers',
    'eslint-plugin-prettier',
    'jest',
    'prettier',
    'ts-node-dev',
    'tsconfig-paths',
    'typescript',
  ];

  console.log('');
  console.log(
    '\x1b[1m',
    '\x1b[38;2;255;255;0m',
    '➤  Which language do you prefer?',
    '\x1b[0m',
  );
  console.log('');
  console.table([languages[0], languages[1]]);
  console.log('\x1b[1m');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Your answer: ', languageOption => {
    if (languageOption !== '0' && languageOption !== '1') {
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        `"${languageOption}" is not a valid option`,
        '\x1b[0m',
      );
      rl.close();
      configJson();
    } else {
      fs.truncate(
        './node_modules/cross-oficial-api-framework/src/tools/messages.ts',
        error => {
          if (error) console.log(error);
        },
      );

      if (languageOption === '0') {
        fs.appendFile(
          './node_modules/cross-oficial-api-framework/src/tools/messages.ts',
          enUs,
          error => {
            if (error) console.log(error);
          },
        );
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;255;155m',
          `➤  You chose the language: ${languages[languageOption].Language}`,
          '\x1b[0m',
        );
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '==============={ Installing Yarn }===============',
          '\x1b[0m',
        );
        console.log('');
        shell.exec('npm install yarn --location=global');
        console.log('\x1b[38;2;255;255;0m', `- yarn installed ✅`, '\x1b[0m');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '==========={ Installing Dependencies }===========',
          '\x1b[0m',
        );
        dependencies.forEach(dependency => {
          shell.exec(`npm install ${dependency}`);
          console.log(
            '\x1b[38;2;255;255;0m',
            `- ${dependency} installed ✅`,
            '\x1b[0m',
          );
        });
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '====={ Installing Development Dependencies }=====',
          '\x1b[0m',
        );
        devDependencies.forEach(devDependency => {
          shell.exec(`npm install ${devDependency} -D`);
          console.log(
            '\x1b[38;2;255;255;0m',
            `- ${devDependency} installed ✅`,
            '\x1b[0m',
          );
        });
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '- execute',
          '\x1b[38;2;255;255;0m',
          'yarn cross comands',
          '\x1b[38;2;0;155;255m',
          'to see available commands',
          '\x1b[0m',
        );
        console.log('');
      } else {
        fs.appendFile(
          './node_modules/cross-oficial-api-framework/src/tools/messages.ts',
          ptBr,
          error => {
            if (error) console.log(error);
          },
        );
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;255;155m',
          `➤  Você escolheu a linguagem: ${languages[languageOption].Language}`,
          '\x1b[0m',
        );
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '==================={ Instalando Yarn }==================',
          '\x1b[0m',
        );
        console.log('');
        shell.exec('npm install yarn --location=global');
        console.log('\x1b[38;2;255;255;0m', `- yarn instalado ✅`, '\x1b[0m');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '=============={ Instalando Dependências }===============',
          '\x1b[0m',
        );
        dependencies.forEach(dependency => {
          shell.exec(`npm install ${dependency}`);
          console.log(
            '\x1b[38;2;255;255;0m',
            `- ${dependency} instalado ✅`,
            '\x1b[0m',
          );
        });
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '====={ Instalando Dependências de Desenvolvimento }=====',
          '\x1b[0m',
        );
        devDependencies.forEach(devDependency => {
          shell.exec(`npm install ${devDependency} -D`);
          console.log(
            '\x1b[38;2;255;255;0m',
            `- ${devDependency} instalado ✅`,
            '\x1b[0m',
          );
        });
        console.log('');
        console.log(
          '\x1b[1m',
          '\x1b[38;2;0;155;255m',
          '- execute',
          '\x1b[38;2;255;255;0m',
          'yarn cross comands',
          '\x1b[38;2;0;155;255m',
          'para ver os comandos disponíveis',
          '\x1b[0m',
        );
        console.log('');
      }

      rl.close();
    }
  });
}

configJson();
