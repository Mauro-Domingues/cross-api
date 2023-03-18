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
import messages from '@tools/messages';
import { appendFileSync, existsSync, truncateSync } from 'fs';

export class MakeFirstLayer {
  private messages: typeof messages;
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
    this.messages = messages;
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
    if (!existsSync('.editorconfig')) {
      appendFileSync('.editorconfig', this.createEditorConfig.execute());
    } else {
      truncateSync('.editorconfig');
      appendFileSync('.editorconfig', this.createEditorConfig.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .editorconfig ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.env')) {
      appendFileSync('.env', this.createEnv.execute());
    } else {
      truncateSync('.env');
      appendFileSync('.env', this.createEnv.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .env ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.env.template')) {
      appendFileSync('.env.template', this.createEnv.execute());
    } else {
      truncateSync('.env.template');
      appendFileSync('.env.template', this.createEnv.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .env.template ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.eslintignore')) {
      appendFileSync('.eslintignore', this.createEsLintIgnore.execute());
    } else {
      truncateSync('.eslintignore');
      appendFileSync('.eslintignore', this.createEsLintIgnore.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .eslintignore ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.eslintrc.json')) {
      appendFileSync('.eslintrc.json', this.createEsLintrcJson.execute());
    } else {
      truncateSync('.eslintrc.json');
      appendFileSync('.eslintrc.json', this.createEsLintrcJson.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .eslintrc.json ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.gitignore')) {
      appendFileSync('.gitignore', this.createGitIgnore.execute());
    } else {
      truncateSync('.gitignore');
      appendFileSync('.gitignore', this.createGitIgnore.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .gitignore ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('babel.config.js')) {
      appendFileSync('babel.config.js', this.createBabelConfig.execute());
    } else {
      truncateSync('babel.config.js');
      appendFileSync('babel.config.js', this.createBabelConfig.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- babel.config.js ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('docker-compose.yml')) {
      appendFileSync('docker-compose.yml', this.createDockerCompose.execute());
    } else {
      truncateSync('docker-compose.yml');
      appendFileSync('docker-compose.yml', this.createDockerCompose.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- docker-compose.yml ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('jest.config.ts')) {
      appendFileSync('jest.config.ts', this.createJestConfig.execute());
    } else {
      truncateSync('jest.config.ts');
      appendFileSync('jest.config.ts', this.createJestConfig.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- jest.config.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('nodemon.json')) {
      appendFileSync('nodemon.json', this.createNodemonJson.execute());
    } else {
      truncateSync('nodemon.json');
      appendFileSync('nodemon.json', this.createNodemonJson.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- nodemon.json ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('prettier.config.js')) {
      appendFileSync('prettier.config.js', this.createPrettierConfig.execute());
    } else {
      truncateSync('prettier.config.js');
      appendFileSync('prettier.config.js', this.createPrettierConfig.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- prettier.config.js ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('tsconfig.json')) {
      appendFileSync('tsconfig.json', this.createTsConfig.execute());
    } else {
      truncateSync('tsconfig.json');
      appendFileSync('tsconfig.json', this.createTsConfig.execute());
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- tsconfig.json ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
