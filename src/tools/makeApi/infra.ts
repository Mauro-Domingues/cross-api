import { IMessagesDTO, Messages } from '@tools/messages';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

export class MakeInfra {
  private messages: IMessagesDTO;

  constructor() {
    this.messages = new Messages().execute();
  }

  public async execute(): Promise<void> {
    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', '@types'))) {
      mkdirSync(resolve('src', '@types'));
    }
    if (!existsSync(resolve('src', 'dtos'))) {
      mkdirSync(resolve('src', 'dtos'));
    }
    if (!existsSync(resolve('src', 'assets'))) {
      mkdirSync(resolve('src', 'assets'));
    }
    if (!existsSync(resolve('src', 'middlewares'))) {
      mkdirSync(resolve('src', 'middlewares'));
    }
    if (!existsSync(resolve('src', 'modules'))) {
      mkdirSync(resolve('src', 'modules'));
    }
    if (!existsSync(resolve('src', 'routes'))) {
      mkdirSync(resolve('src', 'routes'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'utils'))) {
      mkdirSync(resolve('src', 'utils'));
    }
    if (!existsSync(resolve('src', 'utils', 'mappers'))) {
      mkdirSync(resolve('src', 'utils', 'mappers'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'errors'))) {
      mkdirSync(resolve('src', 'shared', 'errors'));
    }
    if (!existsSync(resolve('src', 'shared', 'typeorm'))) {
      mkdirSync(resolve('src', 'shared', 'typeorm'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'providers'))) {
      mkdirSync(resolve('src', 'shared', 'container', 'providers'));
    }
    if (!existsSync(resolve('src', 'shared', 'typeorm', 'migrations'))) {
      mkdirSync(resolve('src', 'shared', 'typeorm', 'migrations'));
    }
    if (!existsSync(resolve('src', 'shared', 'typeorm', 'seeds'))) {
      mkdirSync(resolve('src', 'shared', 'typeorm', 'seeds'));
    }
    console.log(
      '\x1b[1m',
      '\x1b[38;2;0;155;255m',
      this.messages.apiCreated,
      '\x1b[0m',
    );
  }
}
