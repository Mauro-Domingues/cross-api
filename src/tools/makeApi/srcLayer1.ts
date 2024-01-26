import { CreateBabelConfig } from '@templates/root/babelConfig';
import { CreateDocConfig } from '@templates/root/docConfig';
import { CreateDockerCompose } from '@templates/root/dockerCompose';
import { CreateEditorConfig } from '@templates/root/editorConfig';
import { CreateEnv } from '@templates/root/env';
import { CreateEsLintIgnore } from '@templates/root/esLintIgnore';
import { CreateEsLintrcJson } from '@templates/root/esLintrcJson';
import { CreateGitIgnore } from '@templates/root/gitIgnore';
import { CreateJestConfig } from '@templates/root/jestConfig';
import { CreatePrettierConfig } from '@templates/root/prettierConfig';
import { CreateTsConfig } from '@templates/root/tsConfig';
import { FileManager } from '@tools/fileManager';

export class MakeFirstLayer {
  private readonly createPrettierConfig: CreatePrettierConfig;
  private readonly createDockerCompose: CreateDockerCompose;
  private readonly createEsLintrcJson: CreateEsLintrcJson;
  private readonly createEsLintIgnore: CreateEsLintIgnore;
  private readonly createEditorConfig: CreateEditorConfig;
  private readonly createBabelConfig: CreateBabelConfig;
  private readonly createJestConfig: CreateJestConfig;
  private readonly createDocConfig: CreateDocConfig;
  private readonly createGitIgnore: CreateGitIgnore;
  private readonly createTsConfig: CreateTsConfig;
  private readonly fileManager: FileManager;
  private readonly createEnv: CreateEnv;

  public constructor() {
    this.createPrettierConfig = new CreatePrettierConfig();
    this.createDockerCompose = new CreateDockerCompose();
    this.createEsLintrcJson = new CreateEsLintrcJson();
    this.createEsLintIgnore = new CreateEsLintIgnore();
    this.createEditorConfig = new CreateEditorConfig();
    this.createBabelConfig = new CreateBabelConfig();
    this.createJestConfig = new CreateJestConfig();
    this.createDocConfig = new CreateDocConfig();
    this.createGitIgnore = new CreateGitIgnore();
    this.createTsConfig = new CreateTsConfig();
    this.fileManager = new FileManager();
    this.createEnv = new CreateEnv();
  }

  public execute(): void {
    return this.fileManager.checkAndCreateMultiFile([
      [['.editorconfig'], this.createEditorConfig],
      [['.env'], this.createEnv],
      [['.env.template'], this.createEnv],
      [['.eslintignore'], this.createEsLintIgnore],
      [['.eslintrc.json'], this.createEsLintrcJson],
      [['.gitignore'], this.createGitIgnore],
      [['babel.config.js'], this.createBabelConfig],
      [['doc.config.ts'], this.createDocConfig],
      [['docker-compose.yml'], this.createDockerCompose],
      [['jest.config.ts'], this.createJestConfig],
      [['prettier.config.js'], this.createPrettierConfig],
      [['tsconfig.json'], this.createTsConfig],
    ]);
  }
}
