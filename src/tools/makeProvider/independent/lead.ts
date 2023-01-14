import fs from 'fs';
import createLeadConfig from '../../../templates/providers/config/leadConfig';
import createILeadDTO from '../../../templates/providers/dtos/ILeadDTO';
import createFakeLead from '../../../templates/providers/fakes/fakeLead';
import createRDStationLead from '../../../templates/providers/implementations/RDStationLead';
import createLeadIndex from '../../../templates/providers/leadIndex';
import createILead from '../../../templates/providers/models/ILead';
import messages from '../../messages';

export default async function makeLeadProvider(): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/shared')) {
    fs.mkdirSync('src/shared');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/providers')) {
    fs.mkdirSync('src/shared/container/providers');
  }
  if (!fs.existsSync('src/shared/container/providers/LeadProvider')) {
    fs.mkdirSync('src/shared/container/providers/LeadProvider');
  }
  if (!fs.existsSync('src/shared/container/providers/LeadProvider/dtos')) {
    fs.mkdirSync('src/shared/container/providers/LeadProvider/dtos');
  }
  if (!fs.existsSync('src/shared/container/providers/LeadProvider/fakes')) {
    fs.mkdirSync('src/shared/container/providers/LeadProvider/fakes');
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/LeadProvider/implementations',
    )
  ) {
    fs.mkdirSync('src/shared/container/providers/LeadProvider/implementations');
  }
  if (!fs.existsSync('src/shared/container/providers/LeadProvider/models')) {
    fs.mkdirSync('src/shared/container/providers/LeadProvider/models');
  }
  fs.appendFile(
    'src/shared/container/providers/index.ts',
    `import './LeadProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!fs.existsSync('src/config/lead.ts')) {
    fs.appendFile('src/config/lead.ts', createLeadConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/lead.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/lead.ts', createLeadConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
      createILeadDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/dtos/ICreateLeadDTO.ts',
      createILeadDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
      createFakeLead(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/fakes/FakeLeadProvider.ts',
      createFakeLead(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
      createRDStationLead(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/implementations/RDStationProvider.ts',
      createRDStationLead(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
      createILead(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/models/ILeadProvider.ts',
      createILead(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!fs.existsSync('src/shared/container/providers/LeadProvider/index.ts')) {
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/index.ts',
      createLeadIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/LeadProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/LeadProvider/index.ts',
      createLeadIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- LeadProvider ${messages.created}`,
    '\x1b[0m',
  );
}
