import { Config } from '@templates/assets/config';
import { Shell } from '@tools/shell';
import { ConfigLanguage } from '@tools/languageConfig';
import { PackageManager } from '@tools/packageManager';

export class ConfigJson extends ConfigLanguage {
  private readonly devDependencies: Array<string>;
  private readonly packageManager: PackageManager;
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
      '@types/cors',
      '@types/express',
      '@types/jest',
      '@types/supertest',
      '@types/swagger-ui-express',
      '@types/uuid',
      '@typescript-eslint/eslint-plugin@^5.60.0',
      '@typescript-eslint/parser@^5.60.0',
      'eslint@^8.43.0',
      'eslint-config-airbnb-base@^15.0.0',
      'eslint-config-prettier@^8.8.0',
      'eslint-import-resolver-typescript@^3.5.5',
      'eslint-plugin-import@^2.27.5',
      'eslint-plugin-import-helpers@^1.3.1',
      'eslint-plugin-prettier@^4.2.1',
      'jest',
      'prettier@^2.8.8',
      'swc_mut_cjs_exports',
      'ts-node-dev',
      'tsconfig-paths',
      'typescript',
    ];
    this.dependencies = [
      'axios',
      'celebrate',
      'class-transformer',
      'cors',
      'dotenv',
      'express',
      'express-async-errors',
      'express-jwt',
      'ioredis',
      'jwks-rsa',
      'mysql',
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
    this.packageManager = new PackageManager(
      this.dependencies,
      this.devDependencies,
    );
  }

  private patchPackage(): void {
    const stringifiedPackage = this.fileManager.readFileSync(['package.json']);
    const jsonPackage: Record<'scripts', Record<string, string>> = JSON.parse(
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
        breakEnd: false,
      },
    ]);
    return this.shell.execute('npm install yarn --location=global');
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
    this.packageManager.execute('install');
    this.renderEnding();

    if (this.fileManager.checkIfExistsSync(['package-lock.json'])) {
      this.fileManager.removeFile(['package-lock.json']);
    }

    return this.config.execute();
  }

  private configLanguage(): void {
    this.renderLanguageOptions();
    return this.readline.execute(
      (optionChosen: keyof typeof this.languageOptions): void => {
        if (this.languageOptions[optionChosen]) {
          this.languageChosen = optionChosen;
          this.showChosenOption();
          this.setConfig();
          return this.setLanguageOption();
        }
        this.readline.invalidOption(optionChosen);
        return this.execute();
      },
    );
  }

  public override execute(): void {
    return this.configLanguage();
  }
}
