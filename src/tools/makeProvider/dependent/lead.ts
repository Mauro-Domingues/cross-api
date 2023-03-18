import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateLeadConfig } from '@templates/providers/config/leadConfig';
import { CreateILeadDTO } from '@templates/providers/dtos/ILeadDTO';
import { CreateFakeLead } from '@templates/providers/fakes/fakeLead';
import { CreateRDStationLead } from '@templates/providers/implementations/RDStationLead';
import { CreateLeadIndex } from '@templates/providers/leadIndex';
import { CreateILead } from '@templates/providers/models/ILead';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentLeadProvider {
  private messages: typeof messages;
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private createILead: CreateILead;
  private createILeadDTO: CreateILeadDTO;
  private createRDStationLead: CreateRDStationLead;
  private createFakeLead: CreateFakeLead;
  private createLeadConfig: CreateLeadConfig;
  private createLeadIndex: CreateLeadIndex;
  private createContainer: CreateContainer;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.messages = messages;
    this.fatherNames = fatherNames;
    this.createILead = new CreateILead();
    this.createILeadDTO = new CreateILeadDTO();
    this.createRDStationLead = new CreateRDStationLead();
    this.createFakeLead = new CreateFakeLead();
    this.createLeadConfig = new CreateLeadConfig();
    this.createLeadIndex = new CreateLeadIndex();
    this.createContainer = new CreateContainer();
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.providerNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

    if (!existsSync('src')) {
      mkdirSync('src');
    }
    if (!existsSync('src/config')) {
      mkdirSync('src/config');
    }
    if (!existsSync('src/modules')) {
      mkdirSync('src/modules');
    }
    if (!existsSync('src/shared')) {
      mkdirSync('src/shared');
    }
    if (!existsSync('src/shared/container')) {
      mkdirSync('src/shared/container');
    }
    if (!existsSync('src/shared/container/index.ts')) {
      appendFileSync(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
      );
    }
    if (!existsSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      mkdirSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
        '',
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/dtos`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/dtos`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/fakes`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/fakes`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/implementations`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/implementations`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/models`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/models`,
      );
    }
    appendFileSync(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      `\nimport './LeadProvider';`,
    );
    if (!existsSync('src/config/lead.ts')) {
      appendFileSync('src/config/lead.ts', this.createLeadConfig.execute());
    } else {
      truncateSync('src/config/lead.ts');
      appendFileSync('src/config/lead.ts', this.createLeadConfig.execute());
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
        this.createILeadDTO.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/dtos/ICreateLeadDTO.ts`,
        this.createILeadDTO.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
        this.createFakeLead.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/fakes/FakeLeadProvider.ts`,
        this.createFakeLead.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
        this.createRDStationLead.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/implementations/RDStationProvider.ts`,
        this.createRDStationLead.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
        this.createILead.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/models/ILeadProvider.ts`,
        this.createILead.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
        this.createLeadIndex.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/LeadProvider/index.ts`,
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
