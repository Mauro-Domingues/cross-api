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
import { appendFile, existsSync, truncate } from 'fs';

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
      appendFile('.editorconfig', this.createEditorConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('.editorconfig', error => {
        if (error) throw error;
      });
      appendFile('.editorconfig', this.createEditorConfig.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .editorconfig ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.env')) {
      appendFile('.env', this.createEnv.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('.env', error => {
        if (error) throw error;
      });
      appendFile('.env', this.createEnv.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .env ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.env.template')) {
      appendFile('.env.template', this.createEnv.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('.env.template', error => {
        if (error) throw error;
      });
      appendFile('.env.template', this.createEnv.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .env.template ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.eslintignore')) {
      appendFile('.eslintignore', this.createEsLintIgnore.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('.eslintignore', error => {
        if (error) throw error;
      });
      appendFile('.eslintignore', this.createEsLintIgnore.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .eslintignore ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.eslintrc.json')) {
      appendFile('.eslintrc.json', this.createEsLintrcJson.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('.eslintrc.json', error => {
        if (error) throw error;
      });
      appendFile('.eslintrc.json', this.createEsLintrcJson.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .eslintrc.json ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('.gitignore')) {
      appendFile('.gitignore', this.createGitIgnore.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('.gitignore', error => {
        if (error) throw error;
      });
      appendFile('.gitignore', this.createGitIgnore.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- .gitignore ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('babel.config.js')) {
      appendFile('babel.config.js', this.createBabelConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('babel.config.js', error => {
        if (error) throw error;
      });
      appendFile('babel.config.js', this.createBabelConfig.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- babel.config.js ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('docker-compose.yml')) {
      appendFile(
        'docker-compose.yml',
        this.createDockerCompose.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('docker-compose.yml', error => {
        if (error) throw error;
      });
      appendFile(
        'docker-compose.yml',
        this.createDockerCompose.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- docker-compose.yml ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('jest.config.ts')) {
      appendFile('jest.config.ts', this.createJestConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('jest.config.ts', error => {
        if (error) throw error;
      });
      appendFile('jest.config.ts', this.createJestConfig.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- jest.config.ts ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('nodemon.json')) {
      appendFile('nodemon.json', this.createNodemonJson.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('nodemon.json', error => {
        if (error) throw error;
      });
      appendFile('nodemon.json', this.createNodemonJson.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- nodemon.json ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('prettier.config.js')) {
      appendFile(
        'prettier.config.js',
        this.createPrettierConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('prettier.config.js', error => {
        if (error) throw error;
      });
      appendFile(
        'prettier.config.js',
        this.createPrettierConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- prettier.config.js ${this.messages.created}`,
      '\x1b[0m',
    );
    if (!existsSync('tsconfig.json')) {
      appendFile('tsconfig.json', this.createTsConfig.execute(), error => {
        if (error) throw error;
      });
    } else {
      truncate('tsconfig.json', error => {
        if (error) throw error;
      });
      appendFile('tsconfig.json', this.createTsConfig.execute(), error => {
        if (error) throw error;
      });
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- tsconfig.json ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
