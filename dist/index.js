#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./tools/board");
const config_1 = require("./tools/config");
const languageConfig_1 = require("./tools/languageConfig");
const listProvider_1 = require("./tools/listProvider");
const makeApi_1 = require("./tools/makeApi");
const makeModule_1 = require("./tools/makeModule");
const makeProvider_1 = require("./tools/makeProvider");
const save_1 = require("./tools/lastModification/save");
const delete_1 = require("./tools/lastModification/delete");
const names_1 = require("./tools/names");
const shell_1 = require("./tools/shell");
const messages_1 = require("./tools/messages");
class Index {
    constructor() {
        this.fullComand = process.argv.slice(2);
        this.comand = process.argv[2];
        this.arg = process.argv[3];
        this.father = process.argv[4];
        this.messages = new messages_1.Messages().execute();
        this.shell = new shell_1.Shell();
        this.getNames = new names_1.GetNames(this.arg);
        this.getFatherNames = new names_1.GetNames(this.father);
        this.deleteRegister = new delete_1.DeleteRegister();
        this.createRegister = new save_1.CreateRegister(this.fullComand, this.arg, this.getNames.execute(), this.getFatherNames.execute());
        this.createProvider = new makeProvider_1.CreateProvider(this.arg, this.getFatherNames.execute());
        this.createModule = new makeModule_1.CreateModule(this.getNames.execute(), this.getFatherNames.execute());
        this.createApi = new makeApi_1.CreateApi();
        this.listProvider = new listProvider_1.ListProvider();
        this.configLanguage = new languageConfig_1.ConfigLanguage();
        this.configJson = new config_1.ConfigJson();
        this.board = new board_1.Board();
    }
    execute() {
        if (this.comand) {
            if (this.comand !== 'revert') {
                this.createRegister.execute();
            }
            switch (this.comand) {
                case 'config':
                    this.configJson.execute();
                    break;
                case 'comands':
                    this.board.execute();
                    break;
                case 'language':
                    this.configLanguage.execute();
                    break;
                case 'list:provider':
                    this.listProvider.execute();
                    break;
                case 'make:api':
                    this.createApi.execute();
                    break;
                case 'make:module':
                    this.createModule.execute();
                    break;
                case 'make:provider':
                    this.createProvider.execute();
                    break;
                case 'migration:generate':
                    this.shell.execute('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default');
                    break;
                case 'migration:run':
                    this.shell.execute('ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run');
                    break;
                case 'revert':
                    this.deleteRegister.execute();
                    this.createRegister.execute();
                    break;
                default:
                    console.log('');
                    console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.notFound, '\x1b[0m');
                    console.log('');
                    console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.messages.try[0]}`, '\x1b[38;2;255;255;0m', `${this.messages.try[1]}`, '\x1b[38;2;0;155;255m', `${this.messages.try[2]}`, '\x1b[0m');
                    console.log('');
                    break;
            }
        }
        else {
            console.log('');
            console.log('\x1b[1m', '\x1b[38;2;255;0;0m', this.messages.notFound, '\x1b[0m');
            console.log('\x1b[1m', '\x1b[38;2;0;155;255m', `${this.messages.try[0]}`, '\x1b[38;2;255;255;0m', `${this.messages.try[1]}`, '\x1b[38;2;0;155;255m', `${this.messages.try[2]}`, '\x1b[0m');
            console.log('');
        }
    }
}
new Index().execute();
