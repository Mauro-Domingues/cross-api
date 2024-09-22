import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateMailTemplateConfig } from '@templates/providers/config/mailTemplateConfig';
import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateHandlebarsMailTemplate } from '@templates/providers/implementations/HandlebarsMailTemplate';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import { BaseProvider } from '@tools/makeProvider/independent/base';

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

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'dtos',
      ],
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'fakes',
      ],
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'implementations',
      ],
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'models',
      ],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [
      ['src', 'config', 'mailTemplate.ts'],
      this.createMailTemplateConfig,
    ];
  }

  protected createDtos(): Array<IMultiFileDTO> {
    return [
      [
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
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
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
    ];
  }

  protected createImplementations(): Array<IMultiFileDTO> {
    return [
      [
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
      ],
    ];
  }

  protected createModel(): IMultiFileDTO {
    return [
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
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      "import './MailTemplateProvider';\n",
    );

    return [
      [
        'src',
        'shared',
        'container',
        'providers',
        'MailTemplateProvider',
        'index.ts',
      ],
      this.createMailTemplateIndex,
    ];
  }
}
