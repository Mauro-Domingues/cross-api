import { FinishConfig } from '@tools/finishConfig';
import { ConfigLanguage } from '@tools/languageConfig';
import { PackageManager } from '@tools/packageManager';
import { Shell } from '@tools/shell';

export class ConfigJson extends ConfigLanguage {
  private readonly devDependencies: Array<string>;
  private readonly dependencies: Array<string>;
  private readonly finishConfig: FinishConfig;
  private readonly shell: Shell;

  public constructor() {
    super();
    this.finishConfig = new FinishConfig();
    this.shell = Shell.getInstance();
    this.devDependencies = [
      '@swc/cli',
      '@swc/core',
      '@types/cors',
      '@types/express',
      '@types/jest',
      '@types/supertest',
      '@types/swagger-ui-express',
      '@types/uuid',
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint@^8.57.0',
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
    this.console.execute([
      {
        message: this.messages.dependencies.headers.yarn,
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: true,
      },
      {
        message: ['- yarn ', this.messages.dependencies.description.installed],
        color: 'yellow',
        bold: false,
        breakStart: true,
        breakEnd: false,
      },
    ]);
    return this.shell.execute('npm install yarn --location=global');
  }

  private renderEnding(): void {
    return this.console.execute([
      {
        message: this.messages.comands.description.attempt.action,
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: false,
      },
      {
        message: this.messages.comands.description.attempt.comand,
        color: 'yellow',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: this.messages.comands.description.attempt.info,
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: this.messages.documentation.description.action,
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: false,
      },
      {
        message: 'https://cross-packages.gitbook.io/cross-api',
        color: 'purple',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
      {
        message: this.messages.documentation.description.info,
        color: 'blue',
        bold: true,
        breakStart: false,
        breakEnd: false,
      },
    ]);
  }

  private setConfig(): void {
    this.patchPackage();
    this.installYarn();
    new PackageManager(
      this.dependencies,
      this.devDependencies,
      this.messages,
    ).execute('install');
    this.renderEnding();

    if (this.fileManager.checkIfExistsSync(['package-lock.json'])) {
      this.fileManager.removeFile(['package-lock.json']);
    }

    return this.finishConfig.execute();
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
