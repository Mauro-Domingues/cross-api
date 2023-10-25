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
  private readonly createPrettierConfig: CreatePrettierConfig;
  private readonly createDockerCompose: CreateDockerCompose;
  private readonly createEsLintrcJson: CreateEsLintrcJson;
  private readonly createEsLintIgnore: CreateEsLintIgnore;
  private readonly createEditorConfig: CreateEditorConfig;
  private readonly createNodemonJson: CreateNodemonJson;
  private readonly createBabelConfig: CreateBabelConfig;
  private readonly createJestConfig: CreateJestConfig;
  private readonly createDocConfig: CreateDocConfig;
  private readonly createGitIgnore: CreateGitIgnore;
  private readonly createTsConfig: CreateTsConfig;
  private readonly fileManager: FileManager;
  private readonly createEnv: CreateEnv;

  constructor() {
    this.createPrettierConfig = new CreatePrettierConfig();
    this.createDockerCompose = new CreateDockerCompose();
    this.createEsLintrcJson = new CreateEsLintrcJson();
    this.createEsLintIgnore = new CreateEsLintIgnore();
    this.createEditorConfig = new CreateEditorConfig();
    this.createBabelConfig = new CreateBabelConfig();
    this.createNodemonJson = new CreateNodemonJson();
    this.createJestConfig = new CreateJestConfig();
    this.createDocConfig = new CreateDocConfig();
    this.createGitIgnore = new CreateGitIgnore();
    this.createTsConfig = new CreateTsConfig();
    this.fileManager = new FileManager();
    this.createEnv = new CreateEnv();
  }

  public execute(): void {
    this.fileManager.checkAndCreateFile(
      ['.editorconfig'],
      this.createEditorConfig,
    );
    this.fileManager.checkAndCreateFile(['.env'], this.createEnv);
    this.fileManager.checkAndCreateFile(['.env.template'], this.createEnv);
    this.fileManager.checkAndCreateFile(
      ['.eslintignore'],
      this.createEsLintIgnore,
    );
    this.fileManager.checkAndCreateFile(
      ['.eslintrc.json'],
      this.createEsLintrcJson,
    );
    this.fileManager.checkAndCreateFile(['.gitignore'], this.createGitIgnore);
    this.fileManager.checkAndCreateFile(
      ['babel.config.js'],
      this.createBabelConfig,
    );
    this.fileManager.checkAndCreateFile(
      ['doc.config.ts'],
      this.createDocConfig,
    );
    this.fileManager.checkAndCreateFile(
      ['docker-compose.yml'],
      this.createDockerCompose,
    );
    this.fileManager.checkAndCreateFile(
      ['jest.config.ts'],
      this.createJestConfig,
    );
    this.fileManager.checkAndCreateFile(
      ['nodemon.json'],
      this.createNodemonJson,
    );
    this.fileManager.checkAndCreateFile(
      ['prettier.config.js'],
      this.createPrettierConfig,
    );
    return this.fileManager.checkAndCreateFile(
      ['tsconfig.json'],
      this.createTsConfig,
    );
  }
}
