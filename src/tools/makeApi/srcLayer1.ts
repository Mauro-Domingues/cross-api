import { CreateBabelConfig } from '@templates/root/babelConfig.js';
import { CreateDockerCompose } from '@templates/root/dockerCompose.js';
import { CreateEditorConfig } from '@templates/root/editorConfig.js';
import { CreateEnv } from '@templates/root/env.js';
import { CreateEsLintIgnore } from '@templates/root/esLintIgnore.js';
import { CreateEsLintrcJson } from '@templates/root/esLintrcJson.js';
import { CreateGitIgnore } from '@templates/root/gitIgnore.js';
import { CreateJestConfig } from '@templates/root/jestConfig.js';
import { CreateNodemonJson } from '@templates/root/nodemonJson.js';
import { CreatePrettierConfig } from '@templates/root/prettierConfig.js';
import { CreateTsConfig } from '@templates/root/tsConfig.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';

export class MakeFirstLayer {
  private readonly messages: IMessagesDTO;
  private readonly fileManager: FileManager;
  private readonly console: Console;
  private readonly createTsConfig: CreateTsConfig;
  private readonly createPrettierConfig: CreatePrettierConfig;
  private readonly createNodemonJson: CreateNodemonJson;
  private readonly createJestConfig: CreateJestConfig;
  private readonly createGitIgnore: CreateGitIgnore;
  private readonly createEsLintrcJson: CreateEsLintrcJson;
  private readonly createEsLintIgnore: CreateEsLintIgnore;
  private readonly createEnv: CreateEnv;
  private readonly createEditorConfig: CreateEditorConfig;
  private readonly createDockerCompose: CreateDockerCompose;
  private readonly createBabelConfig: CreateBabelConfig;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
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
    await this.fileManager.checkAndCreateFile(
      ['.editorconfig'],
      this.createEditorConfig,
    );
    this.console.one([
      `- .editorconfig ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(['.env'], this.createEnv);
    this.console.one([
      `- .env ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['.env.template'],
      this.createEnv,
    );
    this.console.one([
      `- .env.template ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['.eslintignore'],
      this.createEsLintIgnore,
    );
    this.console.one([
      `- .eslintignore ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['.eslintrc.json'],
      this.createEsLintrcJson,
    );
    this.console.one([
      `- .eslintrc.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['.gitignore'],
      this.createGitIgnore,
    );
    this.console.one([
      `- .gitignore ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['babel.config.js'],
      this.createBabelConfig,
    );
    this.console.one([
      `- babel.config.js ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['docker-compose.yml'],
      this.createDockerCompose,
    );
    this.console.one([
      `- docker-compose.yml ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['jest.config.ts'],
      this.createJestConfig,
    );
    this.console.one([
      `- jest.config.ts ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['nodemon.json'],
      this.createNodemonJson,
    );
    this.console.one([
      `- nodemon.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['prettier.config.js'],
      this.createPrettierConfig,
    );
    this.console.one([
      `- prettier.config.js ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
    await this.fileManager.checkAndCreateFile(
      ['tsconfig.json'],
      this.createTsConfig,
    );
    return this.console.one([
      `- tsconfig.json ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
