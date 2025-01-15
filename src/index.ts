#!/usr/bin/env node

import { argv } from 'node:process';
import { IActionDTO } from '@interfaces/IActionDTO';
import { IMessageDTO } from '@interfaces/IMessageDTO';
import { Board } from '@tools/board';
import { ConfigJson } from '@tools/config';
import { CustomError } from '@tools/customError';
import { ConfigLanguage } from '@tools/languageConfig';
import { DeleteRegister } from '@tools/lastModification/delete/index';
import { CreateRegister } from '@tools/lastModification/save/index';
import { ListProvider } from '@tools/listProvider';
import { CreateApi } from '@tools/makeApi/index';
import { CreateModule } from '@tools/makeModule/index';
import { CreateProvider } from '@tools/makeProvider/index';
import { Messages } from '@tools/messages';
import { GetNames } from '@tools/names';

new (class Main {
  private readonly fullComand: [keyof IActionDTO, ...Array<string>];
  private readonly createRegister: CreateRegister;
  private readonly getFatherNames: GetNames;
  private readonly comand: keyof IActionDTO;
  private readonly messages: IMessageDTO;
  private readonly actions: IActionDTO;
  private readonly getNames: GetNames;
  private readonly father: string;
  private readonly arg: string;

  public constructor() {
    const [, , ...fullComand] = argv;
    const [comand, arg, father] = fullComand;
    this.fullComand = fullComand;
    this.comand = comand;
    this.father = father;
    this.arg = arg;
    this.messages = Messages.getInstance().execute();
    this.getFatherNames = new GetNames(this.father);
    this.getNames = new GetNames(this.arg);
    this.createRegister = new CreateRegister(
      this.fullComand,
      this.arg,
      this.getNames.execute(),
      this.getFatherNames.execute(),
    );
    this.actions = Object.freeze<IActionDTO>({
      'make:provider': () =>
        new CreateProvider(this.arg, this.getFatherNames.execute()),
      'list:provider': () => new ListProvider(),
      'make:module': () =>
        new CreateModule(
          this.getNames.execute(),
          this.getFatherNames.execute(),
        ),
      language: () => new ConfigLanguage(),
      'make:api': () => new CreateApi(),
      config: () => new ConfigJson(),
      comands: () => new Board(),
      revert: () => ({
        execute: (): void => {
          new DeleteRegister().execute();
          return this.createRegister.execute();
        },
      }),
    });
  }

  public execute(): void {
    if (!Object.hasOwn(this.actions, this.comand)) {
      throw new CustomError([
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
        },
        {
          message: this.messages.comands.description.attempt.comand,
          color: 'yellow',
          bold: true,
        },
        {
          message: this.messages.comands.description.attempt.info,
          color: 'blue',
          bold: true,
          breakEnd: true,
        },
      ]);
    }

    if (this.comand !== 'revert') {
      this.createRegister.execute();
    }

    return this.actions[this.comand]().execute();
  }
})().execute();
