import { CreateBabelConfig } from '../../templates/root/babelConfig';
import { CreateDockerCompose } from '../../templates/root/dockerCompose';
import { CreateEditorConfig } from '../../templates/root/editorConfig';
import { CreateEnv } from '../../templates/root/env';
import { CreateEsLintIgnore } from '../../templates/root/esLintIgnore';
import { CreateEsLintrcJson } from '../../templates/root/esLintrcJson';
import { CreateGitIgnore } from '../../templates/root/gitIgnore';
import { CreateJestConfig } from '../../templates/root/jestConfig';
import { CreateNodemonJson } from '../../templates/root/nodemonJson';
import { CreatePrettierConfig } from '../../templates/root/prettierConfig';
import { CreateTsConfig } from '../../templates/root/tsConfig';
import { Messages } from '../messages';
import { appendFileSync, existsSync, truncateSync } from 'fs';
import { resolve } from 'path';
export class MakeFirstLayer {
    messages;
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
        if (!existsSync(resolve('.editorconfig'))) {
            appendFileSync(resolve('.editorconfig'), this.createEditorConfig.execute());
        }
        else {
            truncateSync(resolve('.editorconfig'));
            appendFileSync(resolve('.editorconfig'), this.createEditorConfig.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- .editorconfig ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('.env'))) {
            appendFileSync(resolve('.env'), this.createEnv.execute());
        }
        else {
            truncateSync(resolve('.env'));
            appendFileSync(resolve('.env'), this.createEnv.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- .env ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('.env.template'))) {
            appendFileSync(resolve('.env.template'), this.createEnv.execute());
        }
        else {
            truncateSync(resolve('.env.template'));
            appendFileSync(resolve('.env.template'), this.createEnv.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- .env.template ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('.eslintignore'))) {
            appendFileSync(resolve('.eslintignore'), this.createEsLintIgnore.execute());
        }
        else {
            truncateSync(resolve('.eslintignore'));
            appendFileSync(resolve('.eslintignore'), this.createEsLintIgnore.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- .eslintignore ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('.eslintrc.json'))) {
            appendFileSync(resolve('.eslintrc.json'), this.createEsLintrcJson.execute());
        }
        else {
            truncateSync(resolve('.eslintrc.json'));
            appendFileSync(resolve('.eslintrc.json'), this.createEsLintrcJson.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- .eslintrc.json ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('.gitignore'))) {
            appendFileSync(resolve('.gitignore'), this.createGitIgnore.execute());
        }
        else {
            truncateSync(resolve('.gitignore'));
            appendFileSync(resolve('.gitignore'), this.createGitIgnore.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- .gitignore ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('babel.config.js'))) {
            appendFileSync(resolve('babel.config.js'), this.createBabelConfig.execute());
        }
        else {
            truncateSync(resolve('babel.config.js'));
            appendFileSync(resolve('babel.config.js'), this.createBabelConfig.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- babel.config.js ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('docker-compose.yml'))) {
            appendFileSync(resolve('docker-compose.yml'), this.createDockerCompose.execute());
        }
        else {
            truncateSync(resolve('docker-compose.yml'));
            appendFileSync(resolve('docker-compose.yml'), this.createDockerCompose.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- docker-compose.yml ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('jest.config.ts'))) {
            appendFileSync(resolve('jest.config.ts'), this.createJestConfig.execute());
        }
        else {
            truncateSync(resolve('jest.config.ts'));
            appendFileSync(resolve('jest.config.ts'), this.createJestConfig.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- jest.config.ts ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('nodemon.json'))) {
            appendFileSync(resolve('nodemon.json'), this.createNodemonJson.execute());
        }
        else {
            truncateSync(resolve('nodemon.json'));
            appendFileSync(resolve('nodemon.json'), this.createNodemonJson.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- nodemon.json ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('prettier.config.js'))) {
            appendFileSync(resolve('prettier.config.js'), this.createPrettierConfig.execute());
        }
        else {
            truncateSync(resolve('prettier.config.js'));
            appendFileSync(resolve('prettier.config.js'), this.createPrettierConfig.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- prettier.config.js ${this.messages.created}`, '\x1b[0m');
        if (!existsSync(resolve('tsconfig.json'))) {
            appendFileSync(resolve('tsconfig.json'), this.createTsConfig.execute());
        }
        else {
            truncateSync(resolve('tsconfig.json'));
            appendFileSync(resolve('tsconfig.json'), this.createTsConfig.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- tsconfig.json ${this.messages.created}`, '\x1b[0m');
    }
}
