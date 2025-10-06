import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateMailTemplateConfig } from '@templates/providers/config/mailTemplateConfig';
import { CreateIMailTemplateFragmentDTO } from '@templates/providers/dtos/IMailTemplateFragmentDTO';
import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateHandlebarsMailTemplate } from '@templates/providers/implementations/HandlebarsMailTemplate';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import { BaseProvider } from '@tools/makeProvider/base';

export class CreateMailTemplateProvider extends BaseProvider {
  private readonly createIMailTemplateFragmentDTO: CreateIMailTemplateFragmentDTO;
  private readonly createHandlebarsMailTemplate: CreateHandlebarsMailTemplate;
  private readonly createMailTemplateConfig: CreateMailTemplateConfig;
  private readonly createMailTemplateIndex: CreateMailTemplateIndex;
  private readonly createFakeMailTemplate: CreateFakeMailTemplate;
  private readonly createIMailTemplateDTO: CreateIMailTemplateDTO;
  private readonly createIMailTemplate: CreateIMailTemplate;

  public constructor(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'> | undefined,
  ) {
    super(fatherNames);
    this.createIMailTemplateFragmentDTO = new CreateIMailTemplateFragmentDTO();
    this.createHandlebarsMailTemplate = new CreateHandlebarsMailTemplate();
    this.createMailTemplateConfig = new CreateMailTemplateConfig();
    this.createMailTemplateIndex = new CreateMailTemplateIndex();
    this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
    this.createFakeMailTemplate = new CreateFakeMailTemplate();
    this.createIMailTemplate = new CreateIMailTemplate();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [this.basePath, 'MailTemplateProvider', 'dtos'],
      [this.basePath, 'MailTemplateProvider', 'fakes'],
      [this.basePath, 'MailTemplateProvider', 'implementations'],
      [this.basePath, 'MailTemplateProvider', 'models'],
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
          this.basePath,
          'MailTemplateProvider',
          'dtos',
          'IParseMailTemplateDTO.ts',
        ],
        this.createIMailTemplateDTO,
      ],
      [
        [
          this.basePath,
          'MailTemplateProvider',
          'dtos',
          'IMailTemplateFragmentDTO.ts',
        ],
        this.createIMailTemplateFragmentDTO,
      ],
    ];
  }

  protected createFake(): IMultiFileDTO {
    return [
      [
        this.basePath,
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
          this.basePath,
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
        this.basePath,
        'MailTemplateProvider',
        'models',
        'IMailTemplateProvider.ts',
      ],
      this.createIMailTemplate,
    ];
  }

  protected createInjection(): IMultiFileDTO {
    this.fileManager.createFile(
      [this.basePath, 'index.ts'],
      "import './MailTemplateProvider';\n",
    );

    return [
      [this.basePath, 'MailTemplateProvider', 'index.ts'],
      this.createMailTemplateIndex,
    ];
  }
}
