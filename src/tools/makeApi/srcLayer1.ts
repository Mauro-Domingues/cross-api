import { CreateBabelConfig } from '@templates/root/babelConfig';
import { CreateDocConfig } from '@templates/root/docConfig';
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
import { FileManager } from '@tools/fileManager';

export class MakeFirstLayer {
  private readonly fileManager: FileManager;
  private readonly createTsConfig: CreateTsConfig;
  private readonly createPrettierConfig: CreatePrettierConfig;
  private readonly createNodemonJson: CreateNodemonJson;
  private readonly createJestConfig: CreateJestConfig;
  private readonly createDocConfig: CreateDocConfig;
  private readonly createGitIgnore: CreateGitIgnore;
  private readonly createEsLintrcJson: CreateEsLintrcJson;
  private readonly createEsLintIgnore: CreateEsLintIgnore;
  private readonly createEnv: CreateEnv;
  private readonly createEditorConfig: CreateEditorConfig;
  private readonly createDockerCompose: CreateDockerCompose;
  private readonly createBabelConfig: CreateBabelConfig;

  constructor() {
    this.fileManager = new FileManager();
    this.createTsConfig = new CreateTsConfig();
    this.createPrettierConfig = new CreatePrettierConfig();
    this.createNodemonJson = new CreateNodemonJson();
    this.createJestConfig = new CreateJestConfig();
    this.createDocConfig = new CreateDocConfig();
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
    await this.fileManager.checkAndCreateFile(['.env'], this.createEnv);
    await this.fileManager.checkAndCreateFile(
      ['.env.template'],
      this.createEnv,
    );
    await this.fileManager.checkAndCreateFile(
      ['.eslintignore'],
      this.createEsLintIgnore,
    );
    await this.fileManager.checkAndCreateFile(
      ['.eslintrc.json'],
      this.createEsLintrcJson,
    );
    await this.fileManager.checkAndCreateFile(
      ['.gitignore'],
      this.createGitIgnore,
    );
    await this.fileManager.checkAndCreateFile(
      ['babel.config.js'],
      this.createBabelConfig,
    );
    await this.fileManager.checkAndCreateFile(
      ['doc.config.ts'],
      this.createDocConfig,
    );
    await this.fileManager.checkAndCreateFile(
      ['docker-compose.yml'],
      this.createDockerCompose,
    );
    await this.fileManager.checkAndCreateFile(
      ['jest.config.ts'],
      this.createJestConfig,
    );
    await this.fileManager.checkAndCreateFile(
      ['nodemon.json'],
      this.createNodemonJson,
    );
    await this.fileManager.checkAndCreateFile(
      ['prettier.config.js'],
      this.createPrettierConfig,
    );
    return this.fileManager.checkAndCreateFile(
      ['tsconfig.json'],
      this.createTsConfig,
    );
  }
}
