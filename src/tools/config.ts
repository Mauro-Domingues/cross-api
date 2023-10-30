import { Config } from '@templates/assets/config';
import { createInterface } from 'readline';
import { Shell } from '@tools/shell';
import { ConfigLanguage, ILanguageOptionsDTO } from '@tools/languageConfig';

export class ConfigJson extends ConfigLanguage {
  private readonly devDependencies: Array<string>;
  private readonly dependencies: Array<string>;
  private readonly config: Config;
  private readonly shell: Shell;

  constructor() {
    super();
    this.config = new Config();
    this.shell = new Shell();
    this.devDependencies = [
      '@babel/cli',
      '@babel/core',
      '@babel/node',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-decorators',
      '@babel/preset-env',
      '@babel/preset-typescript',
      '@types/bcrypt',
      '@types/cors',
      '@types/express',
      '@types/jest',
      '@types/jsonwebtoken',
      '@types/kue',
      '@types/mime',
      '@types/multer',
      '@types/nodemailer',
      '@types/pem-jwk',
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
    this.dependencies = [
      '@aws-sdk/client-s3',
      '@aws-sdk/client-ses',
      'axios',
      'bcrypt',
      'bee-queue',
      'bull',
      'celebrate',
      'class-transformer',
      'cors',
      'dotenv',
      'express',
      'express-async-errors',
      'express-jwt',
      'handlebars',
      'ioredis',
      'jsonwebtoken',
      'jwks-rsa',
      'kue',
      'mime',
      'multer',
      'mysql',
      'nodemailer',
      'pem-jwk',
      'rate-limiter-flexible',
      'reflect-metadata',
      'supertest',
      'swagger-ui-express',
      'ts-jest',
      'tsoa',
      'tsyringe',
      'typeorm@^0.3.15',
      'uuid',
    ];
  }

  private patchPackage(): void {
    const stringifiedPackage = this.fileManager.readFile(['package.json']);
    const jsonPackage = JSON.parse(stringifiedPackage);

    jsonPackage.scripts = {
      ...jsonPackage.scripts,
      dev: 'ts-node-dev -r tsconfig-paths/register --inspect --transpile-only src/shared/server.ts',
      doc: 'ts-node-dev -r tsconfig-paths/register --inspect --transpile-only doc.config.ts',
      build: 'babel src --extensions ".js,.ts" --out-dir dist --copy-files',
      test: 'set NODE_ENV=test&&jest --runInBand',
      start: 'node dist/shared/server.js',
    };

    this.fileManager.truncateFile(['package.json']);
    return this.fileManager.writeFile(
      ['package.json'],
      JSON.stringify(jsonPackage, null, 2),
    );
  }

  private installYarn(): string {
    this.console.many([
      {
        message: this.messages.yarn,
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: true,
      },
      {
        message: `- yarn ${this.messages.installed}`,
        color: 'yellow',
        bold: false,
        breakStart: true,
        breakEnd: true,
      },
    ]);
    return this.shell.execute('npm install yarn --location=global');
  }

  private installDependencies(): void {
    this.console.one({
      message: this.messages.dependencies,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: true,
    });
    this.shell.execute(`yarn add ${this.dependencies.join(' ')}`);
    return this.dependencies.forEach(dependency => {
      return this.console.one({
        message: `- ${dependency} ${this.messages.installed}`,
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
    });
  }

  private installDevDependencies(): void {
    this.console.one({
      message: this.messages.devDependencies,
      color: 'blue',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    this.shell.execute(`yarn add ${this.devDependencies.join(' ')} -D`);
    return this.devDependencies.forEach(devDependency => {
      return this.console.one({
        message: `- ${devDependency} ${this.messages.installed}`,
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
    });
  }

  private renderEnding(): void {
    return this.console.many([
      {
        message: this.messages.marketplaceTool[0],
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: false,
      },
      {
        message:
          'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig   ',
        color: 'purple',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: this.messages.marketplaceTool[1],
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: this.messages.try[0],
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: false,
      },
      {
        message: this.messages.try[1],
        color: 'yellow',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: this.messages.try[2],
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: true,
      },
    ]);
  }

  private setConfig(): void {
    this.patchPackage();
    this.installYarn();
    this.installDependencies();
    this.installDevDependencies();
    this.renderEnding();

    if (this.fileManager.checkIfExists(['package-lock.json'])) {
      this.fileManager.removeFile(['package-lock.json']);
    }

    return this.config.execute();
  }

  private configLanguage(): void {
    this.console.one({
      message: this.messages.language,
      color: 'yellow',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    console.table(Object.keys(this.languageOptions));
    this.console.one({
      message: '',
      color: 'white',
      bold: false,
      breakStart: false,
      breakEnd: false,
    });

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    return rl.question(this.messages.answer, optionChosen => {
      const choice = Object.keys(this.languageOptions)[
        Number(optionChosen)
      ] as keyof ILanguageOptionsDTO;

      if (
        this.isLanguageOptionsKeyType(choice) &&
        Object.keys(this.languageOptions)[Number(optionChosen)]
      ) {
        this.languageConfig = {
          option: choice,
          index: Number(optionChosen),
        };

        rl.close();
        this.showChosenOption();
        this.setConfig();
        return this.setLanguageOption();
      }
      rl.close();
      this.validateOption(optionChosen);
      return this.execute();
    });
  }

  public override execute(): void {
    return this.configLanguage();
  }
}
