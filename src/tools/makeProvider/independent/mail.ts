import { CreateMailConfig } from '@templates/providers/config/mailConfig.js';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO.js';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail.js';
import { CreateNodemailerMail } from '@templates/providers/implementations/NodemailerMail.js';
import { CreateSESMail } from '@templates/providers/implementations/SESMail.js';
import { CreateMailIndex } from '@templates/providers/mailIndex.js';
import { CreateIMail } from '@templates/providers/models/IMail.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeMailProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createIMail: CreateIMail;
  private readonly createFakeMail: CreateFakeMail;
  private readonly createIMailDTO: CreateIMailDTO;
  private readonly createMailConfig: CreateMailConfig;
  private readonly createMailIndex: CreateMailIndex;
  private readonly createSESMail: CreateSESMail;
  private readonly createNodemailerMail: CreateNodemailerMail;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createIMail = new CreateIMail();
    this.createFakeMail = new CreateFakeMail();
    this.createIMailDTO = new CreateIMailDTO();
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createSESMail = new CreateSESMail();
    this.createNodemailerMail = new CreateNodemailerMail();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './MailProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'mail.ts'],
      this.createMailConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'dtos',
        'ISendMailDTO.ts',
      ],
      this.createIMailDTO,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'fakes',
        'FakeMailProvider.ts',
      ],
      this.createFakeMail,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'implementations',
        'NodemailerMailProvider.ts',
      ],
      this.createNodemailerMail,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'implementations',
        'SESMailProvider.ts',
      ],
      this.createSESMail,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailProvider',
        'models',
        'IMailProvider.ts',
      ],
      this.createIMail,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'MailProvider', 'index.ts'],
      this.createMailIndex,
    );
    return this.console.one([
      `- MailProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
