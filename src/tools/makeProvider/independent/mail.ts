import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateNodemailerMail } from '@templates/providers/implementations/NodemailerMail';
import { CreateSESMail } from '@templates/providers/implementations/SESMail';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeMailProvider {
  private readonly createNodemailerMail: CreateNodemailerMail;
  private readonly createMailConfig: CreateMailConfig;
  private readonly createMailIndex: CreateMailIndex;
  private readonly createIMailDTO: CreateIMailDTO;
  private readonly createFakeMail: CreateFakeMail;
  private readonly createSESMail: CreateSESMail;
  private readonly fileManager: FileManager;
  private readonly createIMail: CreateIMail;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor() {
    this.createNodemailerMail = new CreateNodemailerMail();
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createIMailDTO = new CreateIMailDTO();
    this.createFakeMail = new CreateFakeMail();
    this.createSESMail = new CreateSESMail();
    this.messages = new Messages().execute();
    this.createIMail = new CreateIMail();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './MailProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'mail.ts'],
      this.createMailConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    return this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'MailProvider', 'index.ts'],
      this.createMailIndex,
    );
  }
}
