import fs from 'fs';
import createIMailTemplateDTO from '../../../templates/providers/dtos/IParseMailTemplateDTO';
import createFakeMailTemplate from '../../../templates/providers/fakes/fakeMailTemplate';
import createMailTemplate from '../../../templates/providers/implementations/MailTemplate';
import createMailTemplateIndex from '../../../templates/providers/mailTemplateIndex';
import createIMailTemplate from '../../../templates/providers/models/IMailTemplate';
import messages from '../../messages';

export default async function makeMailTemplateProvider(): Promise<void> {
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
  if (!fs.existsSync('src/shared/container/providers/MailTemplateProvider')) {
    fs.mkdirSync('src/shared/container/providers/MailTemplateProvider');
  }
  if (
    !fs.existsSync('src/shared/container/providers/MailTemplateProvider/dtos')
  ) {
    fs.mkdirSync('src/shared/container/providers/MailTemplateProvider/dtos');
  }
  if (
    !fs.existsSync('src/shared/container/providers/MailTemplateProvider/fakes')
  ) {
    fs.mkdirSync('src/shared/container/providers/MailTemplateProvider/fakes');
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailTemplateProvider/implementations',
    )
  ) {
    fs.mkdirSync(
      'src/shared/container/providers/MailTemplateProvider/implementations',
    );
  }
  if (
    !fs.existsSync('src/shared/container/providers/MailTemplateProvider/models')
  ) {
    fs.mkdirSync('src/shared/container/providers/MailTemplateProvider/models');
  }
  fs.appendFile(
    'src/shared/container/providers/index.ts',
    `\nimport './MailTemplateProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailTemplateProvider/index.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/index.ts',
      createMailTemplateIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailTemplateProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailTemplateProvider/index.ts',
      createMailTemplateIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- MailTemplateProvider ${messages.created}`,
    '\x1b[0m',
  );
}
