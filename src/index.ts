#!/usr/bin/env node

import { Board } from '@tools/board';
import { ConfigJson } from '@tools/config';
import { ConfigLanguage } from '@tools/languageConfig';
import { ListProvider } from '@tools/listProvider';
import { CreateApi } from '@tools/makeApi/index';
import { CreateModule } from '@tools/makeModule/index';
import { CreateProvider } from '@tools/makeProvider/index';
import { CreateRegister } from '@tools/lastModification/save';
import { DeleteRegister } from '@tools/lastModification/delete';
import { GetNames } from '@tools/names';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';

new (class Main {
  private readonly fullComand: Array<string> = process.argv.slice(2);
  private readonly comand: string = process.argv[2];
  private readonly father: string = process.argv[4];
  private readonly deleteRegister: DeleteRegister;
  private readonly createRegister: CreateRegister;
  private readonly arg: string = process.argv[3];
  private readonly getFatherNames: GetNames;
  private readonly messages: IMessagesDTO;
  private readonly getNames: GetNames;
  private readonly console: Console;
  private readonly actions: {
    readonly config: ConfigJson;
    readonly comands: Board;
    readonly language: ConfigLanguage;
    readonly 'list:provider': ListProvider;
    readonly 'make:api': CreateApi;
    readonly 'make:module': CreateModule;
    readonly 'make:provider': CreateProvider;
    readonly revert: {
      readonly execute: () => void;
    };
  };

  public constructor() {
    this.getFatherNames = new GetNames(this.father);
    this.deleteRegister = new DeleteRegister();
    this.messages = new Messages().execute();
    this.getNames = new GetNames(this.arg);
    this.createRegister = new CreateRegister(
      this.fullComand,
      this.arg,
      this.getNames.execute(),
      this.getFatherNames.execute(),
    );
    this.console = new Console();
    this.actions = Object.freeze({
      config: new ConfigJson(),
      comands: new Board(),
      language: new ConfigLanguage(),
      'list:provider': new ListProvider(),
      'make:api': new CreateApi(),
      'make:module': new CreateModule(
        this.getNames.execute(),
        this.getFatherNames.execute(),
      ),
      'make:provider': new CreateProvider(
        this.arg,
        this.getFatherNames.execute(),
      ),
      revert: {
        execute: (): void => {
          this.deleteRegister.execute();
          return this.createRegister.execute();
        },
      },
    });
  }

  public execute(): void {
    if (!Object.keys(this.actions).includes(this.comand)) {
      throw this.console.multi([
        {
          message: this.messages.notFound,
          color: 'red',
          bold: true,
          breakStart: true,
          breakEnd: true,
        },
        {
          message: this.messages.try[0],
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: this.messages.try[1],
          color: 'yellow',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: this.messages.try[2],
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: true,
        },
      ]);
    }

    if (this.comand !== 'revert') {
      this.createRegister.execute();
    }

    return this.actions[this.comand as keyof typeof this.actions].execute();
  }
})().execute();
