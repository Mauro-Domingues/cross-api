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
  private readonly createRDStationLead: CreateRDStationLead;
  private readonly createLeadConfig: CreateLeadConfig;
  private readonly createLeadIndex: CreateLeadIndex;
  private readonly createILeadDTO: CreateILeadDTO;
  private readonly createIAuthDTO: CreateIAuthDTO;
  private readonly createFakeLead: CreateFakeLead;
  private readonly fileManager: FileManager;
  private readonly createILead: CreateILead;
  private readonly messages: IMessagesDTO;
  private readonly console: Console;

  constructor() {
    this.createRDStationLead = new CreateRDStationLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
    this.createILeadDTO = new CreateILeadDTO();
    this.createIAuthDTO = new CreateIAuthDTO();
    this.createFakeLead = new CreateFakeLead();
    this.messages = new Messages().execute();
    this.createILead = new CreateILead();
    this.fileManager = new FileManager();
    this.console = new Console();
  }

  public execute(): void {
    this.fileManager.checkAndCreateDir(['src']);
    this.fileManager.checkAndCreateDir(['src', 'config']);
    this.fileManager.checkAndCreateDir(['src', 'shared']);
    this.fileManager.checkAndCreateDir(['src', 'shared', 'container']);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'dtos',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'fakes',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'implementations',
    ]);
    this.fileManager.checkAndCreateDir([
      'src',
      'shared',
      'container',
      'providers',
      'LeadProvider',
      'models',
    ]);
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      `import './LeadProvider';\n`,
    );
    this.fileManager.checkAndCreateFile(
      ['src', 'config', 'lead.ts'],
      this.createLeadConfig,
    );
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
    this.fileManager.checkAndCreateFile(
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
