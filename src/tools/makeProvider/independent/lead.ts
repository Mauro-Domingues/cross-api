import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { CreateLeadConfig } from '@templates/providers/config/leadConfig';
import { CreateILeadDTO } from '@templates/providers/dtos/ILeadDTO';
import { CreateFakeLead } from '@templates/providers/fakes/fakeLead';
import { CreateRDStationLead } from '@templates/providers/implementations/RDStationLead';
import { CreateLeadIndex } from '@templates/providers/leadIndex';
import { CreateILead } from '@templates/providers/models/ILead';
import messages from '@tools/messages';

export class MakeLeadProvider {
  private messages: typeof messages;
  private createILead: CreateILead;
  private createILeadDTO: CreateILeadDTO;
  private createRDStationLead: CreateRDStationLead;
  private createFakeLead: CreateFakeLead;
  private createLeadConfig: CreateLeadConfig;
  private createLeadIndex: CreateLeadIndex;

  constructor() {
    this.messages = messages;
    this.createILead = new CreateILead();
    this.createILeadDTO = new CreateILeadDTO();
    this.createRDStationLead = new CreateRDStationLead();
    this.createFakeLead = new CreateFakeLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
  }

  public async execute(): Promise<void> {
    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/providers')) {
      mkdirSync('src/shared/container/providers');
    }
    if (!existsSync('src/shared/container/providers/LeadProvider')) {
      mkdirSync('src/shared/container/providers/LeadProvider');
    }
    if (!existsSync('src/shared/container/providers/LeadProvider/dtos')) {
      mkdirSync('src/shared/container/providers/LeadProvider/dtos');
    }
    if (!existsSync('src/shared/container/providers/LeadProvider/fakes')) {
      mkdirSync('src/shared/container/providers/LeadProvider/fakes');
    }
    if (
      !existsSync('src/shared/container/providers/LeadProvider/implementations')
    ) {
      mkdirSync('src/shared/container/providers/LeadProvider/implementations');
    }
    if (!existsSync('src/shared/container/providers/LeadProvider/models')) {
      mkdirSync('src/shared/container/providers/LeadProvider/models');
    }
    appendFile(
      'src/shared/container/providers/index.ts',
      `\nimport './LeadProvider';`,
      error => {
        if (error) throw error;
      },
    );
    if (!existsSync('src/config/lead.ts')) {
      appendFile(
        'src/config/lead.ts',
        this.createLeadConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/lead.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/lead.ts',
        this.createLeadConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
        this.createILeadDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
        this.createILeadDTO.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
        this.createFakeLead.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
        this.createFakeLead.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
        this.createRDStationLead.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
        this.createRDStationLead.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
        this.createILead.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
        this.createILead.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (!existsSync('src/shared/container/providers/LeadProvider/index.ts')) {
      appendFile(
        'src/shared/container/providers/LeadProvider/index.ts',
        this.createLeadIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/LeadProvider/index.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/LeadProvider/index.ts',
        this.createLeadIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- LeadProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
