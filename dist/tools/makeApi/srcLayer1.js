import { CreateBabelConfig } from '../../templates/root/babelConfig.js';
import { CreateDockerCompose } from '../../templates/root/dockerCompose.js';
import { CreateEditorConfig } from '../../templates/root/editorConfig.js';
import { CreateEnv } from '../../templates/root/env.js';
import { CreateEsLintIgnore } from '../../templates/root/esLintIgnore.js';
import { CreateEsLintrcJson } from '../../templates/root/esLintrcJson.js';
import { CreateGitIgnore } from '../../templates/root/gitIgnore.js';
import { CreateJestConfig } from '../../templates/root/jestConfig.js';
import { CreateNodemonJson } from '../../templates/root/nodemonJson.js';
import { CreatePrettierConfig } from '../../templates/root/prettierConfig.js';
import { CreateTsConfig } from '../../templates/root/tsConfig.js';
import { Console } from '../console.js';
import { FileManager } from '../fileManager.js';
import { Messages } from '../messages.js';
export class MakeFirstLayer {
    messages;
    fileManager;
    console;
    createTsConfig;
    createPrettierConfig;
    createNodemonJson;
    createJestConfig;
    createGitIgnore;
    createEsLintrcJson;
    createEsLintIgnore;
    createEnv;
    createEditorConfig;
    createDockerCompose;
    createBabelConfig;
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
    async execute() {
        if (!this.fileManager.checkIfExists(['.editorconfig'])) {
            await this.fileManager.createFile(['.editorconfig'], this.createEditorConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['.editorconfig']);
            await this.fileManager.createFile(['.editorconfig'], this.createEditorConfig.execute());
        }
        this.console.one([
            `- .editorconfig ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['.env'])) {
            await this.fileManager.createFile(['.env'], this.createEnv.execute());
        }
        else {
            await this.fileManager.truncateFile(['.env']);
            await this.fileManager.createFile(['.env'], this.createEnv.execute());
        }
        this.console.one([
            `- .env ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['.env.template'])) {
            await this.fileManager.createFile(['.env.template'], this.createEnv.execute());
        }
        else {
            await this.fileManager.truncateFile(['.env.template']);
            await this.fileManager.createFile(['.env.template'], this.createEnv.execute());
        }
        this.console.one([
            `- .env.template ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['.eslintignore'])) {
            await this.fileManager.createFile(['.eslintignore'], this.createEsLintIgnore.execute());
        }
        else {
            await this.fileManager.truncateFile(['.eslintignore']);
            await this.fileManager.createFile(['.eslintignore'], this.createEsLintIgnore.execute());
        }
        this.console.one([
            `- .eslintignore ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['.eslintrc.json'])) {
            await this.fileManager.createFile(['.eslintrc.json'], this.createEsLintrcJson.execute());
        }
        else {
            await this.fileManager.truncateFile(['.eslintrc.json']);
            await this.fileManager.createFile(['.eslintrc.json'], this.createEsLintrcJson.execute());
        }
        this.console.one([
            `- .eslintrc.json ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['.gitignore'])) {
            await this.fileManager.createFile(['.gitignore'], this.createGitIgnore.execute());
        }
        else {
            await this.fileManager.truncateFile(['.gitignore']);
            await this.fileManager.createFile(['.gitignore'], this.createGitIgnore.execute());
        }
        this.console.one([
            `- .gitignore ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['babel.config.js'])) {
            await this.fileManager.createFile(['babel.config.js'], this.createBabelConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['babel.config.js']);
            await this.fileManager.createFile(['babel.config.js'], this.createBabelConfig.execute());
        }
        this.console.one([
            `- babel.config.js ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['docker-compose.yml'])) {
            await this.fileManager.createFile(['docker-compose.yml'], this.createDockerCompose.execute());
        }
        else {
            await this.fileManager.truncateFile(['docker-compose.yml']);
            await this.fileManager.createFile(['docker-compose.yml'], this.createDockerCompose.execute());
        }
        this.console.one([
            `- docker-compose.yml ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['jest.config.ts'])) {
            await this.fileManager.createFile(['jest.config.ts'], this.createJestConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['jest.config.ts']);
            await this.fileManager.createFile(['jest.config.ts'], this.createJestConfig.execute());
        }
        this.console.one([
            `- jest.config.ts ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['nodemon.json'])) {
            await this.fileManager.createFile(['nodemon.json'], this.createNodemonJson.execute());
        }
        else {
            await this.fileManager.truncateFile(['nodemon.json']);
            await this.fileManager.createFile(['nodemon.json'], this.createNodemonJson.execute());
        }
        this.console.one([
            `- nodemon.json ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['prettier.config.js'])) {
            await this.fileManager.createFile(['prettier.config.js'], this.createPrettierConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['prettier.config.js']);
            await this.fileManager.createFile(['prettier.config.js'], this.createPrettierConfig.execute());
        }
        this.console.one([
            `- prettier.config.js ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
        if (!this.fileManager.checkIfExists(['tsconfig.json'])) {
            await this.fileManager.createFile(['tsconfig.json'], this.createTsConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['tsconfig.json']);
            await this.fileManager.createFile(['tsconfig.json'], this.createTsConfig.execute());
        }
        return this.console.one([
            `- tsconfig.json ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
