import { CreateLeadConfig } from '@templates/providers/config/leadConfig';
import { CreateIAuthDTO } from '@templates/providers/dtos/IAuthDTO';
import { CreateILeadDTO } from '@templates/providers/dtos/ILeadDTO';
import { CreateFakeLead } from '@templates/providers/fakes/fakeLead';
import { CreateRDStationLead } from '@templates/providers/implementations/RDStationLead';
import { CreateLeadIndex } from '@templates/providers/leadIndex';
import { CreateILead } from '@templates/providers/models/ILead';
import { BaseProvider } from '@tools/makeProvider/independent/base';

export class MakeLeadProvider extends BaseProvider {
  private readonly createRDStationLead: CreateRDStationLead;
  private readonly createLeadConfig: CreateLeadConfig;
  private readonly createLeadIndex: CreateLeadIndex;
  private readonly createILeadDTO: CreateILeadDTO;
  private readonly createIAuthDTO: CreateIAuthDTO;
  private readonly createFakeLead: CreateFakeLead;
  private readonly createILead: CreateILead;

  public constructor() {
    super();
    this.createRDStationLead = new CreateRDStationLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
    this.createILeadDTO = new CreateILeadDTO();
    this.createIAuthDTO = new CreateIAuthDTO();
    this.createFakeLead = new CreateFakeLead();
    this.createILead = new CreateILead();
  }

  public execute(): void {
    this.constructBase();
    this.fileManager.createFile(
      ['src', 'shared', 'container', 'providers', 'index.ts'],
      "import './LeadProvider';\n",
    );
    this.fileManager.checkAndCreateMultiDirSync([
      ['src', 'shared', 'container', 'providers', 'LeadProvider', 'dtos'],
      ['src', 'shared', 'container', 'providers', 'LeadProvider', 'fakes'],
      [
        'src',
        'shared',
        'container',
        'providers',
        'LeadProvider',
        'implementations',
      ],
      ['src', 'shared', 'container', 'providers', 'LeadProvider', 'models'],
    ]);
    return this.fileManager.checkAndCreateMultiFile([
      [['src', 'config', 'lead.ts'], this.createLeadConfig],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
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
      ],
      [
        ['src', 'shared', 'container', 'providers', 'LeadProvider', 'index.ts'],
        this.createLeadIndex,
      ],
    ]);
  }
}
