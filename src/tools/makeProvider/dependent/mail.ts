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
      throw this.console.one({
        message: this.messages.providerNotFound,
        color: 'red',
        bold: true,
        breakStart: false,
        breakEnd: false,
      });
    }

    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'MailProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'MailProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'MailProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'MailProvider',
      'models',
    ]);
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
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'mail.ts'],
      this.createMailConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    this.fileManager.checkAndCreateFile(
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
    );
    return this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'index.ts',
      ],
      this.createMailIndex,
    );
  }
}
