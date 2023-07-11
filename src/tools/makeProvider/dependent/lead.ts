import { CreateContainer } from '@templates/index/container.js';
import { CreateLeadConfig } from '@templates/providers/config/leadConfig.js';
import { CreateILeadDTO } from '@templates/providers/dtos/ILeadDTO.js';
import { CreateFakeLead } from '@templates/providers/fakes/fakeLead.js';
import { CreateRDStationLead } from '@templates/providers/implementations/RDStationLead.js';
import { CreateLeadIndex } from '@templates/providers/leadIndex.js';
import { CreateILead } from '@templates/providers/models/ILead.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { IModuleNamesDTO } from '@tools/names.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';
import { CreateIAuthDTO } from '@templates/providers/dtos/IAuthDTO.js';

export class MakeDependentLeadProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private readonly createILead: CreateILead;
  private readonly createILeadDTO: CreateILeadDTO;
  private readonly createIAuthDTO: CreateIAuthDTO;
  private readonly createRDStationLead: CreateRDStationLead;
  private readonly createFakeLead: CreateFakeLead;
  private readonly createLeadConfig: CreateLeadConfig;
  private readonly createLeadIndex: CreateLeadIndex;
  private readonly createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.fatherNames = fatherNames;
    this.createILead = new CreateILead();
    this.createILeadDTO = new CreateILeadDTO();
    this.createIAuthDTO = new CreateIAuthDTO();
    this.createRDStationLead = new CreateRDStationLead();
    this.createFakeLead = new CreateFakeLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
    this.createContainer = new CreateContainer();
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
      `import './LeadProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'lead.ts'],
      this.createLeadConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'LeadProvider',
        'dtos',
        'ICreateLeadDTO.ts',
      ],
      this.createILeadDTO,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'LeadProvider',
        'dtos',
        'IAuthDTO.ts',
      ],
      this.createIAuthDTO,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'LeadProvider',
        'fakes',
        'FakeLeadProvider.ts',
      ],
      this.createFakeLead,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'LeadProvider',
        'implementations',
        'RDStationProvider.ts',
      ],
      this.createRDStationLead,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'LeadProvider',
        'models',
        'ILeadProvider.ts',
      ],
      this.createILead,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'modules',
        this.fatherNames.pluralLowerModuleName,
        'providers',
        'LeadProvider',
        'index.ts',
      ],
      this.createLeadIndex,
    );
    return this.console.one([
      `- LeadProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
