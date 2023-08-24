import { CreateLeadConfig } from '@templates/providers/config/leadConfig';
import { CreateILeadDTO } from '@templates/providers/dtos/ILeadDTO';
import { CreateFakeLead } from '@templates/providers/fakes/fakeLead';
import { CreateRDStationLead } from '@templates/providers/implementations/RDStationLead';
import { CreateLeadIndex } from '@templates/providers/leadIndex';
import { CreateILead } from '@templates/providers/models/ILead';
import { IMessagesDTO, Messages } from '@tools/messages';
import { Console } from '@tools/console';
import { FileManager } from '@tools/fileManager';
import { CreateIAuthDTO } from '@templates/providers/dtos/IAuthDTO';

export class MakeLeadProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly fileManager: FileManager;
  private readonly createILead: CreateILead;
  private readonly createILeadDTO: CreateILeadDTO;
  private readonly createIAuthDTO: CreateIAuthDTO;
  private readonly createRDStationLead: CreateRDStationLead;
  private readonly createFakeLead: CreateFakeLead;
  private readonly createLeadConfig: CreateLeadConfig;
  private readonly createLeadIndex: CreateLeadIndex;

  constructor() {
    this.messages = new Messages().execute();
    this.fileManager = new FileManager();
    this.console = new Console();
    this.createILead = new CreateILead();
    this.createILeadDTO = new CreateILeadDTO();
    this.createIAuthDTO = new CreateIAuthDTO();
    this.createRDStationLead = new CreateRDStationLead();
    this.createFakeLead = new CreateFakeLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
  }

  public async execute(): Promise<void> {
    await this.fileManager.checkAndCreateDir(['src']);
    await this.fileManager.checkAndCreateDir(['src', 'config']);
    await this.fileManager.checkAndCreateDir(['src', 'shared']);
    await this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'dtos',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'fakes',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'implementations',
    ]);
    await this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'models',
    ]);
    await this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './LeadProvider';\n`,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'config', 'lead.ts'],
      this.createLeadConfig,
    );
    await this.fileManager.checkAndCreateFile(
      [
        'src',
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
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
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'models',
        'ILeadProvider.ts',
      ],
      this.createILead,
    );
    await this.fileManager.checkAndCreateFile(
      ['src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'],
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
