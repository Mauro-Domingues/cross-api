import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';

export class MakeMailTemplateProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createIMailTemplate: CreateIMailTemplate;
  private readonly createIMailTemplateDTO: CreateIMailTemplateDTO;
  private readonly createMailTemplate: CreateMailTemplate;
  private readonly createFakeMailTemplate: CreateFakeMailTemplate;
  private readonly createMailTemplateIndex: CreateMailTemplateIndex;

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
      'MailTemplateProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './MailTemplateProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'dtos',
        'IParseMailTemplateDTO.ts',
      ],
      this.createIMailTemplateDTO,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'fakes',
        'FakeMailTemplateProvider.ts',
      ],
      this.createFakeMailTemplate,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'implementations',
        'HandlebarsMailTemplateProvider.ts',
      ],
      this.createMailTemplate,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'models',
        'IMailTemplateProvider.ts',
      ],
      this.createIMailTemplate,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'index.ts',
      ],
      this.createMailTemplateIndex,
    );
    return this.console.one([
      `- MailTemplateProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
