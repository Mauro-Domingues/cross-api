import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO.js';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate.js';
import { CreateMailTemplate } from '@templates/providers/implementations/MailTemplate.js';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex.js';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeMailTemplateProvider {
  private messages: IMessagesDTO;
  private console: Console;
  private fileManager: FileManager;
  private createIMailTemplate: CreateIMailTemplate;
  private createIMailTemplateDTO: CreateIMailTemplateDTO;
  private createMailTemplate: CreateMailTemplate;
  private createFakeMailTemplate: CreateFakeMailTemplate;
  private createMailTemplateIndex: CreateMailTemplateIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createIMailTemplate = new CreateIMailTemplate();
    this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
    this.createMailTemplate = new CreateMailTemplate();
    this.createFakeMailTemplate = new CreateFakeMailTemplate();
    this.createMailTemplateIndex = new CreateMailTemplateIndex();
  }

  public async execute(): Promise<void> {
    if (!this.fileManager.checkIfExists(['src'])) {
      await this.fileManager.createDir(['src']);
    }
    if (!this.fileManager.checkIfExists(['src', 'config'])) {
      await this.fileManager.createDir(['src', 'config']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared'])) {
      await this.fileManager.createDir(['src', 'shared']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
      await this.fileManager.createDir(['src', 'shared', 'container']);
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
        'container',
        'providers',
        'MailTemplateProvider',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'dtos',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'dtos',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'fakes',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'fakes',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'implementations',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'implementations',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'models',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'models',
      ]);
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './MailTemplateProvider';\n`,
    );
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'dtos',
        'IParseMailTemplateDTO.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
          'IParseMailTemplateDTO.ts',
        ],
        this.createIMailTemplateDTO.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'dtos',
        'IParseMailTemplateDTO.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
          'IParseMailTemplateDTO.ts',
        ],
        this.createIMailTemplateDTO.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'fakes',
        'FakeMailTemplateProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
          'FakeMailTemplateProvider.ts',
        ],
        this.createFakeMailTemplate.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'fakes',
        'FakeMailTemplateProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
          'FakeMailTemplateProvider.ts',
        ],
        this.createFakeMailTemplate.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'implementations',
        'HandlebarsMailTemplateProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
          'HandlebarsMailTemplateProvider.ts',
        ],
        this.createMailTemplate.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'implementations',
        'HandlebarsMailTemplateProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
          'HandlebarsMailTemplateProvider.ts',
        ],
        this.createMailTemplate.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'models',
        'IMailTemplateProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
          'IMailTemplateProvider.ts',
        ],
        this.createIMailTemplate.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'models',
        'IMailTemplateProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
          'IMailTemplateProvider.ts',
        ],
        this.createIMailTemplate.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'index.ts',
        ],
        this.createMailTemplateIndex.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'index.ts',
        ],
        this.createMailTemplateIndex.execute(),
      );
    }
    return this.console.one([
      `- MailTemplateProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
