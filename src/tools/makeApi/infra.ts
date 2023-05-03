import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';

export class MakeInfra {
  private messages: IMessagesDTO;
  private fileManager: FileManager;
  private console: Console;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public async execute(): Promise<void> {
    if (!this.fileManager.checkIfExists(['src'])) {
      await this.fileManager.createDir(['src']);
    }
    if (!this.fileManager.checkIfExists(['src', 'config'])) {
      await this.fileManager.createDir(['src', 'config']);
    }
    if (!this.fileManager.checkIfExists(['src', '@types'])) {
      await this.fileManager.createDir(['src', '@types']);
    }
    if (!this.fileManager.checkIfExists(['src', 'dtos'])) {
      await this.fileManager.createDir(['src', 'dtos']);
    }
    if (!this.fileManager.checkIfExists(['src', 'assets'])) {
      await this.fileManager.createDir(['src', 'assets']);
    }
    if (!this.fileManager.checkIfExists(['src', 'middlewares'])) {
      await this.fileManager.createDir(['src', 'middlewares']);
    }
    if (!this.fileManager.checkIfExists(['src', 'modules'])) {
      await this.fileManager.createDir(['src', 'modules']);
    }
    if (!this.fileManager.checkIfExists(['src', 'routes'])) {
      await this.fileManager.createDir(['src', 'routes']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared'])) {
      await this.fileManager.createDir(['src', 'shared']);
    }
    if (!this.fileManager.checkIfExists(['src', 'utils'])) {
      await this.fileManager.createDir(['src', 'utils']);
    }
    if (!this.fileManager.checkIfExists(['src', 'utils', 'mappers'])) {
      await this.fileManager.createDir(['src', 'utils', 'mappers']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
      await this.fileManager.createDir(['src', 'shared', 'container']);
    }
    if (
      !this.fileManager.checkIfExists(['src', 'shared', 'container', 'modules'])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'modules',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'modules',
        'entities',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'modules',
        'entities',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'fakes',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'modules',
        'repositories',
        'fakes',
      ]);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'errors'])) {
      await this.fileManager.createDir(['src', 'shared', 'errors']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'typeorm'])) {
      await this.fileManager.createDir(['src', 'shared', 'typeorm']);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'typeorm',
        'migrations',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'typeorm',
        'migrations',
      ]);
    }
    if (
      !this.fileManager.checkIfExists(['src', 'shared', 'typeorm', 'seeds'])
    ) {
      await this.fileManager.createDir(['src', 'shared', 'typeorm', 'seeds']);
    }
    return this.console.one([
      this.messages.apiCreated,
      'blue',
      true,
      false,
      false,
    ]);
  }
}
