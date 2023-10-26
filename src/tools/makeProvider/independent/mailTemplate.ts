import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import { FileManager } from '@tools/fileManager';

export class MakeMailTemplateProvider {
  private readonly createMailTemplateIndex: CreateMailTemplateIndex;
  private readonly createFakeMailTemplate: CreateFakeMailTemplate;
  private readonly createIMailTemplateDTO: CreateIMailTemplateDTO;
  private readonly createIMailTemplate: CreateIMailTemplate;
  private readonly createMailTemplate: CreateMailTemplate;
  private readonly fileManager: FileManager;

  constructor() {
    this.createMailTemplateIndex = new CreateMailTemplateIndex();
    this.createFakeMailTemplate = new CreateFakeMailTemplate();
    this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
    this.createIMailTemplate = new CreateIMailTemplate();
    this.createMailTemplate = new CreateMailTemplate();
    this.fileManager = new FileManager();
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
      'MailTemplateProvider',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'MailTemplateProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './MailTemplateProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
  }
}
