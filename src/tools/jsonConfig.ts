import fs from 'fs';
import readline from 'readline';
import shell from 'shelljs';

// eslint-disable-next-line import/no-relative-packages
import userJson from '../../../../package.json';
import enUs from '../templates/en-us';
import ptBr from '../templates/pt-br';

class LanguageOption {
  Language;

  constructor(Language: string) {
    this.Language = Language;
  }
}

function configJson(): void {
  const languages = [new LanguageOption('en-us'), new LanguageOption('pt-br')];

  console.log('');
  console.log('➤  Which language do you prefer?');
  console.log('');
  console.table([languages[0], languages[1]]);
  console.log('');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Your answer: ', languageOption => {
    if (languageOption !== '0' && languageOption !== '1') {
      console.log('');
      console.log(`"${languageOption}" is not a valid option`);
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
          `➤  You chose the language: ${languages[languageOption].Language}`,
        );
        console.log('');
        console.log('=========={ Installing Yarn }==========');
        console.log('');
        shell.exec('npm install yarn --location=global');
        console.log('=========={ Installing Dependencies }==========');
        shell.exec(
          'npm install aws-sdk axios bcryptjs celebrate class-transformer cors csv-parse date-fns dotenv express express-async-errors handlebars ioredis jsonwebtoken mime multer mysql nodemailer rate-limiter-flexible redis reflect-metadata supertest swagger-ui-express ts-jest tsyringe typeorm uuid xlsx',
        );
        console.log(
          '=========={ Installing Development Dependencies }==========',
        );
        shell.exec(
          'npm install  @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env @babel/preset-typescript @types/bcryptjs @types/cors @types/express @types/ioredis @types/jest @types/jsonwebtoken @types/mime @types/multer @types/nodemailer @types/redis @types/shelljs @types/supertest @types/swagger-ui-express @types/uuid @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-module-resolver babel-plugin-transform-typescript-metadata eslint eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier jest prettier ts-node-dev tsconfig-paths typescript -D',
        );
        console.log('');
        console.table(
          '- execute "yarn cross comands" to see available commands',
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
          `➤  Você escolheu a linguagem: ${languages[languageOption].Language}`,
        );
        console.log('');
        console.log('=========={ Instalando Yarn }==========');
        console.log('');
        shell.exec('npm install yarn --location=global');
        console.log('=========={ Instalando Dependências }==========');
        shell.exec(
          'npm install aws-sdk axios bcryptjs celebrate class-transformer cors csv-parse date-fns dotenv express express-async-errors handlebars ioredis jsonwebtoken mime multer mysql nodemailer rate-limiter-flexible redis reflect-metadata supertest swagger-ui-express ts-jest tsyringe typeorm uuid xlsx',
        );
        console.log(
          '=========={ Instalando Dependências de Desenvolvimento }==========',
        );
        shell.exec(
          'npm install  @babel/cli @babel/core @babel/node @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/preset-env @babel/preset-typescript @types/bcryptjs @types/cors @types/express @types/ioredis @types/jest @types/jsonwebtoken @types/mime @types/multer @types/nodemailer @types/redis @types/shelljs @types/supertest @types/swagger-ui-express @types/uuid @typescript-eslint/eslint-plugin @typescript-eslint/parser babel-plugin-module-resolver babel-plugin-transform-typescript-metadata eslint eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier jest prettier ts-node-dev tsconfig-paths typescript -D',
        );
        console.log('');
        console.table(
          '- execute "yarn cross comands" para ver os comandos disponíveis',
        );
        console.log('');
      }

      rl.close();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const newScript: any = userJson;

      newScript.scripts = {
        ...newScript.scripts,
        cross: 'ts-node ./node_modules/cross-oficial-api-framework/index.ts',
        'dev:server':
          'ts-node-dev -r tsconfig-paths/register src/shared/server.ts',
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

      rl.close();
    }
  });
}

configJson();
