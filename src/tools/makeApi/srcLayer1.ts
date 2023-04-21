import { CreateBabelConfig } from '@templates/root/babelConfig';
import { CreateDockerCompose } from '@templates/root/dockerCompose';
import { CreateEditorConfig } from '@templates/root/editorConfig';
import { CreateEnv } from '@templates/root/env';
import { CreateEsLintIgnore } from '@templates/root/esLintIgnore';
import { CreateEsLintrcJson } from '@templates/root/esLintrcJson';
import { CreateGitIgnore } from '@templates/root/gitIgnore';
import { CreateJestConfig } from '@templates/root/jestConfig';
import { CreateNodemonJson } from '@templates/root/nodemonJson';
import { CreatePrettierConfig } from '@templates/root/prettierConfig';
import { CreateTsConfig } from '@templates/root/tsConfig';
import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';

export class MakeFirstLayer {
  private messages: IMessagesDTO;
  private console: Console;
  private createTsConfig: CreateTsConfig;
  private createPrettierConfig: CreatePrettierConfig;
  private createNodemonJson: CreateNodemonJson;
  private createJestConfig: CreateJestConfig;
  private createGitIgnore: CreateGitIgnore;
  private createEsLintrcJson: CreateEsLintrcJson;
  private createEsLintIgnore: CreateEsLintIgnore;
  private createEnv: CreateEnv;
  private createEditorConfig: CreateEditorConfig;
  private createDockerCompose: CreateDockerCompose;
  private createBabelConfig: CreateBabelConfig;

  constructor() {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.createTsConfig = new CreateTsConfig();
    this.createPrettierConfig = new CreatePrettierConfig();
    this.createNodemonJson = new CreateNodemonJson();
    this.createJestConfig = new CreateJestConfig();
    this.createGitIgnore = new CreateGitIgnore();
    this.createEsLintrcJson = new CreateEsLintrcJson();
    this.createEsLintIgnore = new CreateEsLintIgnore();
    this.createEnv = new CreateEnv();
    this.createEditorConfig = new CreateEditorConfig();
    this.createDockerCompose = new CreateDockerCompose();
    this.createBabelConfig = new CreateBabelConfig();
  }

  public async execute(): Promise<void> {
    if (!existsSync(resolve('.editorconfig'))) {
      appendFileSync(
        resolve('.editorconfig'),
        this.createEditorConfig.execute(),
      );
    } else {
      truncateSync(resolve('.editorconfig'));
      appendFileSync(
        resolve('.editorconfig'),
        this.createEditorConfig.execute(),
      );
    }
    this.console.one([
      `- .editorconfig ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('.env'))) {
      appendFileSync(resolve('.env'), this.createEnv.execute());
    } else {
      truncateSync(resolve('.env'));
      appendFileSync(resolve('.env'), this.createEnv.execute());
    }
    this.console.one([
      `- .env ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('.env.template'))) {
      appendFileSync(resolve('.env.template'), this.createEnv.execute());
    } else {
      truncateSync(resolve('.env.template'));
      appendFileSync(resolve('.env.template'), this.createEnv.execute());
    }
    this.console.one([
      `- .env.template ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('.eslintignore'))) {
      appendFileSync(
        resolve('.eslintignore'),
        this.createEsLintIgnore.execute(),
      );
    } else {
      truncateSync(resolve('.eslintignore'));
      appendFileSync(
        resolve('.eslintignore'),
        this.createEsLintIgnore.execute(),
      );
    }
    this.console.one([
      `- .eslintignore ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('.eslintrc.json'))) {
      appendFileSync(
        resolve('.eslintrc.json'),
        this.createEsLintrcJson.execute(),
      );
    } else {
      truncateSync(resolve('.eslintrc.json'));
      appendFileSync(
        resolve('.eslintrc.json'),
        this.createEsLintrcJson.execute(),
      );
    }
    this.console.one([
      `- .eslintrc.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('.gitignore'))) {
      appendFileSync(resolve('.gitignore'), this.createGitIgnore.execute());
    } else {
      truncateSync(resolve('.gitignore'));
      appendFileSync(resolve('.gitignore'), this.createGitIgnore.execute());
    }
    this.console.one([
      `- .gitignore ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('babel.config.js'))) {
      appendFileSync(
        resolve('babel.config.js'),
        this.createBabelConfig.execute(),
      );
    } else {
      truncateSync(resolve('babel.config.js'));
      appendFileSync(
        resolve('babel.config.js'),
        this.createBabelConfig.execute(),
      );
    }
    this.console.one([
      `- babel.config.js ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('docker-compose.yml'))) {
      appendFileSync(
        resolve('docker-compose.yml'),
        this.createDockerCompose.execute(),
      );
    } else {
      truncateSync(resolve('docker-compose.yml'));
      appendFileSync(
        resolve('docker-compose.yml'),
        this.createDockerCompose.execute(),
      );
    }
    this.console.one([
      `- docker-compose.yml ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('jest.config.ts'))) {
      appendFileSync(
        resolve('jest.config.ts'),
        this.createJestConfig.execute(),
      );
    } else {
      truncateSync(resolve('jest.config.ts'));
      appendFileSync(
        resolve('jest.config.ts'),
        this.createJestConfig.execute(),
      );
    }
    this.console.one([
      `- jest.config.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('nodemon.json'))) {
      appendFileSync(resolve('nodemon.json'), this.createNodemonJson.execute());
    } else {
      truncateSync(resolve('nodemon.json'));
      appendFileSync(resolve('nodemon.json'), this.createNodemonJson.execute());
    }
    this.console.one([
      `- nodemon.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('prettier.config.js'))) {
      appendFileSync(
        resolve('prettier.config.js'),
        this.createPrettierConfig.execute(),
      );
    } else {
      truncateSync(resolve('prettier.config.js'));
      appendFileSync(
        resolve('prettier.config.js'),
        this.createPrettierConfig.execute(),
      );
    }
    this.console.one([
      `- prettier.config.js ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    if (!existsSync(resolve('tsconfig.json'))) {
      appendFileSync(resolve('tsconfig.json'), this.createTsConfig.execute());
    } else {
      truncateSync(resolve('tsconfig.json'));
      appendFileSync(resolve('tsconfig.json'), this.createTsConfig.execute());
    }
    this.console.one([
      `- tsconfig.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
