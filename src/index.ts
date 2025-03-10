#!/usr/bin/env node

import { argv } from 'node:process';
import { IActionDTO } from '@interfaces/IActionDTO';
import { IHelpDTO } from '@interfaces/IMessageDTO/IHelpDTO';
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
  private readonly fullCommand: [keyof IActionDTO, ...Array<string>];
  private readonly createRegister: CreateRegister;
  private readonly getFatherNames: GetNames;
  private readonly command: keyof IActionDTO;
  private readonly helpMessages: IHelpDTO;
  private readonly actions: IActionDTO;
  private readonly getNames: GetNames;
  private readonly father: string;
  private readonly arg: string;

  public constructor() {
    const [, , ...fullCommand] = argv;
    const [command, arg, father] = fullCommand;
    this.fullCommand = fullCommand;
    this.command = command;
    this.father = father;
    this.arg = arg;
    this.helpMessages = Messages.getInstance().help;
    this.getFatherNames = new GetNames(this.father);
    this.getNames = new GetNames(this.arg);
    this.createRegister = new CreateRegister(
      this.fullCommand,
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
      help: () => new Board(),
      revert: () => ({
        execute: (): void => {
          new DeleteRegister().execute();
          return this.createRegister.execute();
        },
      }),
    });
  }

  private validateCommand(): void {
    if (!Object.hasOwn(this.actions, this.command)) {
      throw new CustomError([
        {
          message: this.helpMessages.errors.notFound,
          color: 'red',
          bold: true,
          breakStart: true,
          breakEnd: true,
        },
        {
          message: this.helpMessages.description.attempt.action,
          color: 'blue',
          bold: true,
        },
        {
          message: this.helpMessages.description.attempt.command,
          color: 'yellow',
          bold: true,
        },
        {
          message: this.helpMessages.description.attempt.info,
          color: 'blue',
          bold: true,
          breakEnd: true,
        },
      ]);
    }

    if (this.command !== 'revert') {
      this.createRegister.execute();
    }
  }

  public execute(): void {
    this.validateCommand();

    return this.actions[this.command]().execute();
  }
})().execute();
