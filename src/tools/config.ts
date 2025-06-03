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
      '@swc/cli@^0.7.7',
      '@swc/core@^1.11.29',
      '@types/cors@^2.8.18',
      '@types/express@^5.0.0',
      '@types/jest@^29.5.14',
      '@types/supertest@^6.0.3',
      '@types/swagger-ui-express@^4.1.8',
      '@types/uuid@^10.0.0',
      '@typescript-eslint/eslint-plugin@^8.33.0',
      '@typescript-eslint/parser@^8.33.0',
      'eslint@8.57.0',
      'eslint-config-airbnb-base@^15.0.0',
      'eslint-config-prettier@^10.1.5',
      'eslint-import-resolver-typescript@^4.4.1',
      'eslint-plugin-import@^2.31.0',
      'eslint-plugin-import-helpers@^2.0.1',
      'eslint-plugin-prettier@^5.4.1',
      'jest@^29.7.0',
      'prettier@^3.5.3',
      'swc_mut_cjs_exports@^10.7.0',
      'ts-node-dev@^2.0.0',
      'tsconfig-paths@^4.2.0',
      'typescript@^5.8.3',
    ];
    this.dependencies = [
      'celebrate@^15.0.3',
      'class-transformer@^0.5.1',
      'cors@^2.8.5',
      'dotenv@^16.5.0',
      'express@^4.21.2',
      'express-async-errors@^3.1.1',
      'express-jwt@^8.5.1',
      'ioredis@^5.6.1',
      'jwks-rsa@^3.2.0',
      'mysql2@^3.14.1',
      'rate-limiter-flexible@^7.1.1',
      'reflect-metadata@^0.2.2',
      'supertest@^7.1.1',
      'swagger-ui-express@^5.0.1',
      'ts-jest@^29.3.4',
      'tsoa@^6.6.0',
      'tsyringe@^4.10.0',
      'typeorm@^0.3.24',
      'uuid@^11.1.0',
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
      build: 'npx swc src --out-dir dist --copy-files --strip-leading-paths',
      runMigrations:
        'set NODE_ENV=production&& ts-node-dev -r tsconfig-paths/register --transpile-only src/shared/typeorm/runMigrations.ts',
      typeCheck: 'npx tsc --noEmit',
      test: 'set NODE_ENV=test&& jest --runInBand',
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
        message: this.dependencyMessages.headers.yarn,
        color: 'blue',
        bold: true,
        breakStart: true,
        breakEnd: true,
      },
      {
        message: ['- yarn ', this.dependencyMessages.description.installed],
        color: 'yellow',
        breakStart: true,
      },
    ]);
    return this.shell.execute('npm install yarn --location=global');
  }

  private renderEnding(): void {
    return this.console.execute([
      {
        message: this.helpMessages.description.attempt.action,
        color: 'blue',
        bold: true,
        breakStart: true,
      },
      {
        message: this.helpMessages.description.attempt.command,
        color: 'yellow',
        bold: true,
      },
      {
        message: this.helpMessages.description.attempt.info,
        color: 'blue',
        bold: true,
      },
      {
        message: this.documentationMessages.description.action,
        color: 'blue',
        bold: true,
        breakStart: true,
      },
      {
        message: 'https://cross-packages.gitbook.io/cross-api',
        color: 'purple',
        bold: true,
      },
      {
        message: this.documentationMessages.description.info,
        color: 'blue',
        bold: true,
      },
    ]);
  }

  private setConfig(): void {
    this.patchPackage();
    this.installYarn();
    new PackageManager(
      this.dependencies,
      this.devDependencies,
      this.dependencyMessages,
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
