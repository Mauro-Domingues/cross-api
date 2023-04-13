import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { resolve } from 'path';
import { CreateLeadConfig } from '../../../templates/providers/config/leadConfig.js';
import { CreateILeadDTO } from '../../../templates/providers/dtos/ILeadDTO.js';
import { CreateFakeLead } from '../../../templates/providers/fakes/fakeLead.js';
import { CreateRDStationLead } from '../../../templates/providers/implementations/RDStationLead.js';
import { CreateLeadIndex } from '../../../templates/providers/leadIndex.js';
import { CreateILead } from '../../../templates/providers/models/ILead.js';
import { Messages } from '../../messages.js';

export class MakeLeadProvider {
  messages;
  createILead;
  createILeadDTO;
  createRDStationLead;
  createFakeLead;
  createLeadConfig;
  createLeadIndex;
  constructor() {
    this.messages = new Messages().execute();
    this.createILead = new CreateILead();
    this.createILeadDTO = new CreateILeadDTO();
    this.createRDStationLead = new CreateRDStationLead();
    this.createFakeLead = new CreateFakeLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
  }
  async execute() {
    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'providers'))) {
      mkdirSync(resolve('src', 'shared', 'container', 'providers'));
    }
    if (
      !existsSync(
        resolve('src', 'shared', 'container', 'providers', 'LeadProvider'),
      )
    ) {
      mkdirSync(
        resolve('src', 'shared', 'container', 'providers', 'LeadProvider'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      `import './LeadProvider';\n`,
    );
    if (!existsSync(resolve('src', 'config', 'lead.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'lead.ts'),
        this.createLeadConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'lead.ts'));
      appendFileSync(
        resolve('src', 'config', 'lead.ts'),
        this.createLeadConfig.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
          'ICreateLeadDTO.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
          'ICreateLeadDTO.ts',
        ),
        this.createILeadDTO.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
          'ICreateLeadDTO.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'dtos',
          'ICreateLeadDTO.ts',
        ),
        this.createILeadDTO.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
          'FakeLeadProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
          'FakeLeadProvider.ts',
        ),
        this.createFakeLead.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
          'FakeLeadProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'fakes',
          'FakeLeadProvider.ts',
        ),
        this.createFakeLead.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
          'RDStationProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
          'RDStationProvider.ts',
        ),
        this.createRDStationLead.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
          'RDStationProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'implementations',
          'RDStationProvider.ts',
        ),
        this.createRDStationLead.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
          'ILeadProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
          'ILeadProvider.ts',
        ),
        this.createILead.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
          'ILeadProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'models',
          'ILeadProvider.ts',
        ),
        this.createILead.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'index.ts',
        ),
        this.createLeadIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'LeadProvider',
          'index.ts',
        ),
        this.createLeadIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- LeadProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
