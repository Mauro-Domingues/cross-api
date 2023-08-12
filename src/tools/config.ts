import { Config } from '@templates/assets/config.js';
import { createInterface } from 'readline';
import { Shell } from '@tools/shell.js';
import { ConfigLanguage, ILanguageOptionsDTO } from '@tools/languageConfig.js';
import { FileManager } from '@tools/fileManager.js';
import { Console } from '@tools/console.js';

export class ConfigJson {
  private readonly config: Config;
  private readonly console: Console;
  private readonly shell: Shell;
  private readonly configLanguage: ConfigLanguage;
  private readonly fileManager: FileManager;
  private readonly dependencies: Array<string>;
  private readonly devDependencies: Array<string>;

  constructor() {
    this.configLanguage = new ConfigLanguage();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.shell = new Shell();
    this.config = new Config();
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
      'redis@^3.0.2',
      'reflect-metadata',
      'supertest',
      'swagger-ui-express',
      'ts-jest',
      'tsoa',
      'tsyringe',
      'typeorm@^0.3.15',
      'uuid',
    ];
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
      '@types/redis@^2.8.27',
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
  }

  private async patchPackage(): Promise<void> {
    const stringifiedPackage = await this.fileManager.readFile([
      'package.json',
    ]);
    const jsonPackage = JSON.parse(stringifiedPackage);

    jsonPackage.scripts = {
      ...jsonPackage.scripts,
      dev: 'ts-node-dev -r tsconfig-paths/register --inspect --transpile-only src/shared/server.ts',
      doc: 'ts-node-dev -r tsconfig-paths/register --inspect --transpile-only doc.config.ts',
      build: 'babel src --extensions ".js,.ts" --out-dir dist --copy-files',
      test: 'set NODE_ENV=test&&jest --runInBand',
      start: 'node dist/shared/server.js',
    };

    await this.fileManager.truncateFile(['package.json']);
    return this.fileManager.writeFile(
      ['package.json'],
      JSON.stringify(jsonPackage),
    );
  }

  private installYarn(): void {
    this.console.many([
      [this.configLanguage.messages.yarn, 'blue', true, true, true],
      [
        `- yarn ${this.configLanguage.messages.installed}`,
        'yellow',
        false,
        true,
        true,
      ],
    ]);
    this.shell.execute('npm install yarn --location=global');
  }

  private installDependencies(): void {
    this.console.one([
      this.configLanguage.messages.dependencies,
      'blue',
      true,
      false,
      true,
    ]);
    const dependenciesToInstall = this.dependencies.reduce(
      (acc, dependency) => {
        return `${acc} ${dependency}`;
      },
    );
    this.shell.execute(`yarn add ${dependenciesToInstall}`);
    this.dependencies.forEach(dependency => {
      this.console.one([
        `- ${dependency} ${this.configLanguage.messages.installed}`,
        'yellow',
        false,
        false,
        false,
      ]);
    });
  }

  private installDevDependencies(): void {
    this.console.one([
      this.configLanguage.messages.devDependencies,
      'blue',
      true,
      true,
      true,
    ]);
    const devDependenciesToInstall = this.devDependencies.reduce(
      (acc, devDependency) => {
        return `${acc} ${devDependency}`;
      },
    );
    this.shell.execute(`yarn add ${devDependenciesToInstall} -D`);
    this.devDependencies.forEach(devDependency => {
      this.console.one([
        `- ${devDependency} ${this.configLanguage.messages.installed}`,
        'yellow',
        false,
        false,
        false,
      ]);
    });
  }

  private renderEnding(): void {
    this.console.many([
      [
        this.configLanguage.messages.marketplaceTool[0],
        'blue',
        true,
        true,
        false,
      ],
      [
        'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig   ',
        'purple',
        true,
        false,
        false,
      ],
      [
        this.configLanguage.messages.marketplaceTool[1],
        'blue',
        true,
        false,
        false,
      ],
      [this.configLanguage.messages.try[0], 'blue', true, true, false],
      [this.configLanguage.messages.try[1], 'yellow', true, false, false],
      [this.configLanguage.messages.try[2], 'blue', true, false, true],
    ]);
  }

  private async setConfig(): Promise<void> {
    await this.patchPackage();
    this.installYarn();
    this.installDependencies();
    this.installDevDependencies();
    this.renderEnding();

    if (this.fileManager.checkIfExists(['package-lock.json'])) {
      await this.fileManager.removeFile(['package-lock.json']);
    }

    return this.config.execute();
  }

  private showLanguageOptions(): void {
    this.console.one([
      this.configLanguage.messages.language,
      'yellow',
      true,
      true,
      true,
    ]);
    console.table(Object.keys(this.configLanguage.Language));
    this.console.one(['', 'white', false, false, false]);

    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(this.configLanguage.messages.answer, optionChosen => {
      const choice = Object.keys(this.configLanguage.Language)[
        Number(optionChosen)
      ] as keyof ILanguageOptionsDTO;

      if (
        this.configLanguage.isLanguageOptionsKeyType(choice) &&
        Object.keys(this.configLanguage.Language)[Number(optionChosen)]
      ) {
        this.configLanguage.languageConfig = {
          option: choice,
          index: Number(optionChosen),
        };

        rl.close();
        this.configLanguage.showChosenOption();
        this.setConfig();
        this.configLanguage.setLanguageOption();
      } else {
        rl.close();
        this.configLanguage.validateOption(optionChosen);
        this.execute();
      }
    });
  }

  public async execute(): Promise<void> {
    return this.showLanguageOptions();
  }
}
