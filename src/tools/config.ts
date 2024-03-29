import { Config } from '@templates/assets/config';
import { createInterface } from 'node:readline';
import { Shell } from '@tools/shell';
import { ConfigLanguage, ILanguageOptionsDTO } from '@tools/languageConfig';

export class ConfigJson extends ConfigLanguage {
  private readonly devDependencies: Array<string>;
  private readonly dependencies: Array<string>;
  private readonly config: Config;
  private readonly shell: Shell;

  public constructor() {
    super();
    this.config = new Config();
    this.shell = new Shell();
    this.devDependencies = [
      '@swc/cli',
      '@swc/core',
      '@types/bcrypt',
      '@types/cors',
      '@types/express',
      '@types/jest',
      '@types/jsonwebtoken',
      '@types/kue',
      '@types/mime@^3.0.1',
      '@types/multer',
      '@types/nodemailer',
      '@types/pem-jwk',
      '@types/supertest',
      '@types/swagger-ui-express',
      '@types/uuid',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint',
      'eslint-config-airbnb-base',
      'eslint-config-prettier',
      'eslint-import-resolver-typescript',
      'eslint-plugin-import',
      'eslint-plugin-import-helpers',
      'eslint-plugin-prettier',
      'jest',
      'prettier',
      'swc_mut_cjs_exports',
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
      'mime@^3.0.0',
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
    const stringifiedPackage = this.fileManager.readFileSync(['package.json']);
    const jsonPackage: Record<string, Record<string, string>> = JSON.parse(
      stringifiedPackage,
    );

    jsonPackage.scripts = {
      ...jsonPackage.scripts,
      dev: 'ts-node-dev -r tsconfig-paths/register --inspect --transpile-only src/shared/server.ts',
      doc: 'ts-node-dev doc.config.ts',
      build:
        'swc src --out-dir dist --copy-files --strip-leading-paths --ignore **/*.spec.ts',
      comp: 'npx tsc && npx tsc-alias',
      test: 'set NODE_ENV=test&&jest --runInBand',
      start: 'node dist/shared/server.js',
    };

    this.fileManager.truncateFileSync(['package.json']);
    return this.fileManager.writeFileSync(
      ['package.json'],
      JSON.stringify(jsonPackage, null, 2),
    );
  }

  private installYarn(): string {
    this.console.multi([
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
    this.console.single({
      message: this.messages.dependencies,
      color: 'blue',
      bold: true,
      breakStart: false,
      breakEnd: true,
    });
    this.shell.execute(`yarn add ${this.dependencies.join(' ')}`);
    return this.dependencies.forEach(dependency => {
      return this.console.single({
        message: `- ${dependency} ${this.messages.installed}`,
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
    });
  }

  private installDevDependencies(): void {
    this.console.single({
      message: this.messages.devDependencies,
      color: 'blue',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    this.shell.execute(`yarn add ${this.devDependencies.join(' ')} -D`);
    return this.devDependencies.forEach(devDependency => {
      return this.console.single({
        message: `- ${devDependency} ${this.messages.installed}`,
        color: 'yellow',
        bold: false,
        breakStart: false,
        breakEnd: false,
      });
    });
  }

  private renderEnding(): void {
    return this.console.multi([
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

    if (this.fileManager.checkIfExistsSync(['package-lock.json'])) {
      this.fileManager.removeFile(['package-lock.json']);
    }

    return this.config.execute();
  }

  private configLanguage(): void {
    this.console.single({
      message: this.messages.language,
      color: 'yellow',
      bold: true,
      breakStart: true,
      breakEnd: true,
    });
    console.table(Object.keys(this.languageOptions));
    this.console.single({
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

    return rl.question(this.messages.answer, (optionChosen: string): void => {
      const choice = Object.keys(this.languageOptions)[
        Number(optionChosen)
      ] as keyof ILanguageOptionsDTO;

      if (Object.keys(this.languageOptions)[Number(optionChosen)]) {
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
