#!/usr/bin/env node

import { IActionDTO } from '@interfaces/IActionDTO';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Board } from '@tools/board';
import { ConfigJson } from '@tools/config';
import { Console } from '@tools/console';
import { ConfigLanguage } from '@tools/languageConfig';
import { DeleteRegister } from '@tools/lastModification/delete';
import { CreateRegister } from '@tools/lastModification/save';
import { ListProvider } from '@tools/listProvider';
import { CreateApi } from '@tools/makeApi/index';
import { CreateModule } from '@tools/makeModule/index';
import { CreateProvider } from '@tools/makeProvider/index';
import { Messages } from '@tools/messages';
import { GetNames } from '@tools/names';

new (class Main {
  private readonly fullComand: Array<string> = process.argv.slice(2);
  private readonly comand: string = process.argv[2];
  private readonly father: string = process.argv[4];
  private readonly deleteRegister: DeleteRegister;
  private readonly createRegister: CreateRegister;
  private readonly arg: string = process.argv[3];
  private readonly getFatherNames: GetNames;
  private readonly messages: IMessageDTO;
  private readonly actions: IActionDTO;
  private readonly getNames: GetNames;
  private readonly console: Console;

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
    this.actions = Object.freeze<IActionDTO>({
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
          message: this.messages.comands.errors.notFound,
          color: 'red',
          bold: true,
          breakStart: true,
          breakEnd: true,
        },
        {
          message: this.messages.comands.description.attempt.action,
          color: 'blue',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: this.messages.comands.description.attempt.comand,
          color: 'yellow',
          bold: true,
          breakStart: false,
          breakEnd: false,
        },
        {
          message: this.messages.comands.description.attempt.info,
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
