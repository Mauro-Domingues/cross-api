import { CreateMailTemplateConfig } from '@templates/providers/config/mailTemplateConfig';
import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateHandlebarsMailTemplate } from '@templates/providers/implementations/HandlebarsMailTemplate';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import { BaseProvider } from './base';

export class MakeMailTemplateProvider extends BaseProvider {
  private readonly createHandlebarsMailTemplate: CreateHandlebarsMailTemplate;
  private readonly createMailTemplateConfig: CreateMailTemplateConfig;
  private readonly createMailTemplateIndex: CreateMailTemplateIndex;
  private readonly createFakeMailTemplate: CreateFakeMailTemplate;
  private readonly createIMailTemplateDTO: CreateIMailTemplateDTO;
  private readonly createIMailTemplate: CreateIMailTemplate;

  public constructor() {
    super();
    this.createHandlebarsMailTemplate = new CreateHandlebarsMailTemplate();
    this.createMailTemplateConfig = new CreateMailTemplateConfig();
    this.createMailTemplateIndex = new CreateMailTemplateIndex();
    this.createFakeMailTemplate = new CreateFakeMailTemplate();
    this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
    this.createIMailTemplate = new CreateIMailTemplate();
  }

  public execute(): void {
    this.constructBase();
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
      ['src', 'config', 'mailTemplate.ts'],
      this.createMailTemplateConfig,
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
      this.createHandlebarsMailTemplate,
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
