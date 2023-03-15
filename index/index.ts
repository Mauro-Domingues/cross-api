#!/usr/bin/env node

import { exec } from 'shelljs';
import { Board } from '@tools/board';
import { ConfigJson } from '@tools/config';
import { ConfigLanguage } from '@tools/languageConfig';
import { ListProvider } from '@tools/listProvider';
import { CreateApi } from '@tools/makeApi';
import { CreateModule } from '@tools/makeModule';
import { CreateProvider } from '@tools/makeProvider';
import messages from '@tools/messages';
import { CreateRegister } from '@tools/lastModification/save';
import { DeleteRegister } from '@tools/lastModification/delete';
import { GetNames } from '@tools/names';

class Index {
  private fullComand: string[] = process.argv.slice(2);
  private comand: string = process.argv[2];
  private arg: string = process.argv[3];
  private father: string = process.argv[4];
  private messages: typeof messages;
  private getNames: GetNames;
  private deleteRegister: DeleteRegister;
  private createRegister: CreateRegister;
  private createProvider: CreateProvider;
  private createModule: CreateModule;
  private createApi: CreateApi;
  private listProvider: ListProvider;
  private configLanguage: ConfigLanguage;
  private configJson: ConfigJson;
  private board: Board;

  constructor() {
    this.messages = messages;
    this.getNames = new GetNames();
    this.deleteRegister = new DeleteRegister();
    this.createRegister = new CreateRegister(
      this.fullComand,
      this.arg,
      this.getNames.execute(this.arg),
      this.getNames.execute(this.father),
    );
    this.createProvider = new CreateProvider(
      this.arg,
      this.getNames.execute(this.father),
    );
    this.createModule = new CreateModule(
      this.getNames.execute(this.arg),
      this.getNames.execute(this.father),
    );
    this.createApi = new CreateApi();
    this.listProvider = new ListProvider();
    this.configLanguage = new ConfigLanguage();
    this.configJson = new ConfigJson();
    this.board = new Board();
  }

  public async execute(): Promise<void> {
    if (this.comand) {
      await this.createRegister.execute();
      switch (this.comand) {
        case 'config':
          this.configJson.execute();
          break;
        case 'comands':
          this.board.execute();
          break;
        case 'language':
          await this.configLanguage.execute();
          break;
        case 'list:provider':
          this.listProvider.execute();
          break;
        case 'make:api':
          await this.createApi.execute();
          break;
        case 'make:module':
          await this.createModule.execute();
          break;
        case 'make:provider':
          await this.createProvider.execute();
          break;
        case 'migration:generate':
          exec(
            'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:generate ./src/shared/typeorm/migrations/default',
          );
          break;
        case 'migration:run':
          exec(
            'ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js -d ./src/shared/typeorm/dataSource.ts migration:run',
          );
          break;
        case 'revert':
          await this.deleteRegister.execute();
          break;
        default:
          console.log('');
          console.log(
            '\x1b[1m',
            '\x1b[38;2;255;0;0m',
            this.messages.notFound,
            '\x1b[0m',
          );
          console.log('');
          console.log(
            '\x1b[1m',
            '\x1b[38;2;0;155;255m',
            `${this.messages.try[0]}`,
            '\x1b[38;2;255;255;0m',
            `${this.messages.try[1]}`,
            '\x1b[38;2;0;155;255m',
            `${this.messages.try[2]}`,
            '\x1b[0m',
          );
          console.log('');
          break;
      }
    } else {
      console.log('');
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.notFound,
        '\x1b[0m',
      );
      console.log(
        '\x1b[1m',
        '\x1b[38;2;0;155;255m',
        `${this.messages.try[0]}`,
        '\x1b[38;2;255;255;0m',
        `${this.messages.try[1]}`,
        '\x1b[38;2;0;155;255m',
        `${this.messages.try[2]}`,
        '\x1b[0m',
      );
      console.log('');
    }
  }
}

new Index().execute();
