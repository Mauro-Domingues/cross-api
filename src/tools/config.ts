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
      [this.messages.yarn, 'blue', true, true, true],
      [`- yarn ${this.messages.installed}`, 'yellow', false, true, true],
    ]);
    return this.shell.execute('npm install yarn --location=global');
  }

  private installDependencies(): void {
    this.console.one([this.messages.dependencies, 'blue', true, false, true]);
    this.shell.execute(`yarn add ${this.dependencies.join(' ')}`);
    return this.dependencies.forEach(dependency => {
      return this.console.one([
        `- ${dependency} ${this.messages.installed}`,
        'yellow',
        false,
        false,
        false,
      ]);
    });
  }

  private installDevDependencies(): void {
    this.console.one([this.messages.devDependencies, 'blue', true, true, true]);
    this.shell.execute(`yarn add ${this.devDependencies.join(' ')} -D`);
    return this.devDependencies.forEach(devDependency => {
      return this.console.one([
        `- ${devDependency} ${this.messages.installed}`,
        'yellow',
        false,
        false,
        false,
      ]);
    });
  }

  private renderEnding(): void {
    return this.console.many([
      [this.messages.marketplaceTool[0], 'blue', true, true, false],
      [
        'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig   ',
        'purple',
        true,
        false,
        false,
      ],
      [this.messages.marketplaceTool[1], 'blue', true, false, false],
      [this.messages.try[0], 'blue', true, true, false],
      [this.messages.try[1], 'yellow', true, false, false],
      [this.messages.try[2], 'blue', true, false, true],
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
    this.console.one([this.messages.language, 'yellow', true, true, true]);
    console.table(Object.keys(this.languageOptions));
    this.console.one(['', 'white', false, false, false]);

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
