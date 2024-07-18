import { CreateDocConfig } from '@templates/root/docConfig';
import { CreateDockerCompose } from '@templates/root/dockerCompose';
import { CreateEditorConfig } from '@templates/root/editorConfig';
import { CreateEnv } from '@templates/root/env';
import { CreateEsLintIgnore } from '@templates/root/esLintIgnore';
import { CreateEsLintrcJson } from '@templates/root/esLintrcJson';
import { CreateGitIgnore } from '@templates/root/gitIgnore';
import { CreateJestConfig } from '@templates/root/jestConfig';
import { CreatePrettierConfig } from '@templates/root/prettierConfig';
import { CreateSwcConfig } from '@templates/root/swcConfig';
import { CreateTsConfig } from '@templates/root/tsConfig';
import { FileManager } from '@tools/fileManager';

export class MakeFirstLayer {
  private readonly createPrettierConfig: CreatePrettierConfig;
  private readonly createDockerCompose: CreateDockerCompose;
  private readonly createEsLintrcJson: CreateEsLintrcJson;
  private readonly createEsLintIgnore: CreateEsLintIgnore;
  private readonly createEditorConfig: CreateEditorConfig;
  private readonly createJestConfig: CreateJestConfig;
  private readonly createSwcConfig: CreateSwcConfig;
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
    this.createJestConfig = new CreateJestConfig();
    this.createSwcConfig = new CreateSwcConfig();
    this.createDocConfig = new CreateDocConfig();
    this.createGitIgnore = new CreateGitIgnore();
    this.fileManager = FileManager.getInstance();
    this.createTsConfig = new CreateTsConfig();
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
      [['.swcrc'], this.createSwcConfig],
      [['doc.config.ts'], this.createDocConfig],
      [['docker-compose.yml'], this.createDockerCompose],
      [['jest.config.ts'], this.createJestConfig],
      [['prettier.config.cjs'], this.createPrettierConfig],
      [['tsconfig.json'], this.createTsConfig],
    ]);
  }
}
