import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateDependentNodemailerMail } from '@templates/providers/implementations/dependentNodemailerMail';
import { CreateDependentSESMail } from '@templates/providers/implementations/dependentSESMail';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { IModuleNamesDTO } from '@tools/names';
import { DependentBaseProvider } from './base';

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
      | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
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

  public execute(): void {
    if (!this.fatherNames) {
      throw this.console.single({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    this.constructBase();
    this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './MailProvider';\n`,
    );
    this.fileManager.checkAndCreateMultiDirSync([
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'dtos',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'fakes',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'implementations',
      ],
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'models',
      ],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'mail.ts'], this.createMailConfig],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'dtos',
          'ISendMailDTO.ts',
        ],
        this.createIMailDTO,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'fakes',
          'FakeMailProvider.ts',
        ],
        this.createFakeMail,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
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
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'implementations',
          'SESMailProvider.ts',
        ],
        this.createDependentSESMail,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'models',
          'IMailProvider.ts',
        ],
        this.createIMail,
      ],
      [
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'MailProvider',
          'index.ts',
        ],
        this.createMailIndex,
      ],
    ]);
  }
}
