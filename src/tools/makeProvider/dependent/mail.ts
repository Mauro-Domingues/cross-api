import { CreateContainer } from '@templates/index/container.js';
import { CreateMailConfig } from '@templates/providers/config/mailConfig.js';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO.js';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail.js';
import { CreateDependentEtherealMail } from '@templates/providers/implementations/dependentEtherealMail.js';
import { CreateDependentSESMail } from '@templates/providers/implementations/dependentSESMail.js';
import { CreateMailIndex } from '@templates/providers/mailIndex.js';
import { CreateIMail } from '@templates/providers/models/IMail.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeDependentMailProvider {
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private readonly fileManager: FileManager;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly createIMail: CreateIMail;
  private readonly createFakeMail: CreateFakeMail;
  private readonly createIMailDTO: CreateIMailDTO;
  private readonly createMailConfig: CreateMailConfig;
  private readonly createMailIndex: CreateMailIndex;
  private readonly createContainer: CreateContainer;
  private readonly createDependentSESMail: CreateDependentSESMail;
  private readonly createDependentEtherealMail: CreateDependentEtherealMail;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createIMail = new CreateIMail();
    this.createFakeMail = new CreateFakeMail();
    this.createIMailDTO = new CreateIMailDTO();
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createContainer = new CreateContainer();
    this.createDependentSESMail = new CreateDependentSESMail(this.fatherNames);
    this.createDependentEtherealMail = new CreateDependentEtherealMail(
      this.fatherNames,
    );
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      this.console.one([
        this.messages.providerNotFound,
        'red',
        true,
        false,
        false,
      ]);
      throw new Error();
    }

    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'modules']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'LeadProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'LeadProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'LeadProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'LeadProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'modules',
      this.fatherNames.pluralLowerModuleName,
      'providers',
      'LeadProvider',
      'models',
    ]);
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'index.ts'],
        this.createContainer.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'modules',
          this.fatherNames.pluralLowerModuleName,
          'providers',
          'index.ts',
        ],
        '',
      );
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'index.ts'],
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    await this.fileManager.createFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'index.ts',
      ],
      `import './MailProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'mail.ts'],
      this.createMailConfig,
    );
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'MailProvider',
        'implementations',
        'EtherealMailProvider.ts',
      ],
      this.createDependentEtherealMail,
    );
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    await this.fileManager.checkAndCreateFile(
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
    return this.console.one([
      `- MailProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
