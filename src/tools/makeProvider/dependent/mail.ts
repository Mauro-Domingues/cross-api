import { IModuleNameDTO } from '@interfaces/IModuleNameDTO';
import { IMultiFileDTO } from '@interfaces/IMultiFileDTO';
import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateDependentNodemailerMail } from '@templates/providers/implementations/dependentNodemailerMail';
import { CreateDependentSESMail } from '@templates/providers/implementations/dependentSESMail';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { DependentBaseProvider } from '@tools/makeProvider/dependent/base';

export class MakeDependentMailProvider extends DependentBaseProvider {
  private readonly createDependentNodemailerMail: CreateDependentNodemailerMail;
  private readonly createDependentSESMail: CreateDependentSESMail;
  private readonly createMailConfig: CreateMailConfig;
  private readonly createMailIndex: CreateMailIndex;
  private readonly createFakeMail: CreateFakeMail;
  private readonly createIMailDTO: CreateIMailDTO;
  private readonly createIMail: CreateIMail;

  public constructor(
    protected readonly fatherNames:
      | Pick<IModuleNameDTO, 'pluralLowerModuleName'>
      | undefined,
  ) {
    super(fatherNames);
    this.createDependentSESMail = new CreateDependentSESMail(this.fatherNames);
    this.createDependentNodemailerMail = new CreateDependentNodemailerMail(
      this.fatherNames,
    );
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createFakeMail = new CreateFakeMail();
    this.createIMailDTO = new CreateIMailDTO();
    this.createIMail = new CreateIMail();
  }

  protected declare createJobs: () => Array<IMultiFileDTO>;

  protected createInfra(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): void {
    return this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'dtos',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'models',
      ],
    ]);
  }

  protected createConfig(): IMultiFileDTO {
    return [['src', 'config', 'mail.ts'], this.createMailConfig];
  }

  protected createDtos(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'dtos',
          'ISendMailDTO.ts',
        ],
        this.createIMailDTO,
      ],
    ];
  }

  protected createFake(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'fakes',
        'FakeMailProvider.ts',
      ],
      this.createFakeMail,
    ];
  }

  protected createImplementations(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): Array<IMultiFileDTO> {
    return [
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'implementations',
          'NodemailerMailProvider.ts',
        ],
        this.createDependentNodemailerMail,
      ],
      [
        [
          'src',
          'modules',
          fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'implementations',
          'SESMailProvider.ts',
        ],
        this.createDependentSESMail,
      ],
    ];
  }

  protected createModel(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'models',
        'IMailProvider.ts',
      ],
      this.createIMail,
    ];
  }

  protected createInjection(
    fatherNames: Pick<IModuleNameDTO, 'pluralLowerModuleName'>,
  ): IMultiFileDTO {
    this.fileManager.createFile(
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      "import './MailProvider';\n",
    );

    return [
      [
        'src',
        'modules',
        fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'index.ts',
      ],
      this.createMailIndex,
    ];
  }
}
