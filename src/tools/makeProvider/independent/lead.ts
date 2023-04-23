import { CreateLeadConfig } from '@templates/providers/config/leadConfig.js';
import { CreateILeadDTO } from '@templates/providers/dtos/ILeadDTO.js';
import { CreateFakeLead } from '@templates/providers/fakes/fakeLead.js';
import { CreateRDStationLead } from '@templates/providers/implementations/RDStationLead.js';
import { CreateLeadIndex } from '@templates/providers/leadIndex.js';
import { CreateILead } from '@templates/providers/models/ILead.js';
import { IMessagesDTO, Messages } from '@tools/messages.js';
import { Console } from '@tools/console.js';
import { FileManager } from '@tools/fileManager.js';

export class MakeLeadProvider {
  private messages: IMessagesDTO;
  private console: Console;
  private fileManager: FileManager;
  private createILead: CreateILead;
  private createILeadDTO: CreateILeadDTO;
  private createRDStationLead: CreateRDStationLead;
  private createFakeLead: CreateFakeLead;
  private createLeadConfig: CreateLeadConfig;
  private createLeadIndex: CreateLeadIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createILead = new CreateILead();
    this.createILeadDTO = new CreateILeadDTO();
    this.createRDStationLead = new CreateRDStationLead();
    this.createFakeLead = new CreateFakeLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
  }

  public async execute(): Promise<void> {
    if (!this.fileManager.checkIfExists(['src'])) {
      await this.fileManager.createDir(['src']);
    }
    if (!this.fileManager.checkIfExists(['src', 'config'])) {
      await this.fileManager.createDir(['src', 'config']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared'])) {
      await this.fileManager.createDir(['src', 'shared']);
    }
    if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
      await this.fileManager.createDir(['src', 'shared', 'container']);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'dtos',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'dtos',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'fakes',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'fakes',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'implementations',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'implementations',
      ]);
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'models',
      ])
    ) {
      await this.fileManager.createDir([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'models',
      ]);
    }
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './LeadProvider';\n`,
    );
    if (!this.fileManager.checkIfExists(['src', 'config', 'lead.ts'])) {
      await this.fileManager.createFile(
        ['src', 'config', 'lead.ts'],
        this.createLeadConfig.execute(),
      );
    } else {
      await this.fileManager.truncateFile(['src', 'config', 'lead.ts']);
      await this.fileManager.createFile(
        ['src', 'config', 'lead.ts'],
        this.createLeadConfig.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'dtos',
        'ICreateLeadDTO.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
          'ICreateLeadDTO.ts',
        ],
        this.createILeadDTO.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'dtos',
        'ICreateLeadDTO.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
          'ICreateLeadDTO.ts',
        ],
        this.createILeadDTO.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'fakes',
        'FakeLeadProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
          'FakeLeadProvider.ts',
        ],
        this.createFakeLead.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'fakes',
        'FakeLeadProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
          'FakeLeadProvider.ts',
        ],
        this.createFakeLead.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'implementations',
        'RDStationProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
          'RDStationProvider.ts',
        ],
        this.createRDStationLead.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'implementations',
        'RDStationProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
          'RDStationProvider.ts',
        ],
        this.createRDStationLead.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'models',
        'ILeadProvider.ts',
      ])
    ) {
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
          'ILeadProvider.ts',
        ],
        this.createILead.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'models',
        'ILeadProvider.ts',
      ]);
      await this.fileManager.createFile(
        [
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
          'ILeadProvider.ts',
        ],
        this.createILead.execute(),
      );
    }
    if (
      !this.fileManager.checkIfExists([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'index.ts',
      ])
    ) {
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'],
        this.createLeadIndex.execute(),
      );
    } else {
      await this.fileManager.truncateFile([
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'index.ts',
      ]);
      await this.fileManager.createFile(
        ['src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'],
        this.createLeadIndex.execute(),
      );
    }
    return this.console.one([
      `- LeadProvider ${this.messages.created}`,
      'yellow',
      true,
      false,
      false,
    ]);
  }
}
