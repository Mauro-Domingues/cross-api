import fs from 'fs';
import createMailConfig from '@templates/providers/config/mailConfig';
import createIMailDTO from '@templates/providers/dtos/IMailDTO';
import createIMailTemplateDTO from '@templates/providers/dtos/IParseMailTemplateDTO';
import createFakeMail from '@templates/providers/fakes/fakeMail';
import createFakeMailTemplate from '@templates/providers/fakes/fakeMailTemplate';
import createEtherealMail from '@templates/providers/implementations/EtherealMail';
import createMailTemplate from '@templates/providers/implementations/MailTemplate';
import createSESMail from '@templates/providers/implementations/SESMail';
import createMailIndex from '@templates/providers/mailIndex';
import createMailTemplateIndex from '@templates/providers/mailTemplateIndex';
import createIMail from '@templates/providers/models/IMail';
import createIMailTemplate from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';

export default async function makeMailProvider(): Promise<void> {
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
  if (!fs.existsSync('src/config/mail.ts')) {
    fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
    });
  } else {
    fs.truncate('src/config/mail.ts', error => {
      if (error) console.log(error);
    });
    fs.appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
    });
  }
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
  if (!fs.existsSync('src/shared/container/providers/MailProvider')) {
    fs.mkdirSync('src/shared/container/providers/MailProvider');
  }
  if (!fs.existsSync('src/shared/container/providers/MailProvider/dtos')) {
    fs.mkdirSync('src/shared/container/providers/MailProvider/dtos');
  }
  if (!fs.existsSync('src/shared/container/providers/MailProvider/fakes')) {
    fs.mkdirSync('src/shared/container/providers/MailProvider/fakes');
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailProvider/implementations',
    )
  ) {
    fs.mkdirSync('src/shared/container/providers/MailProvider/implementations');
  }
  if (!fs.existsSync('src/shared/container/providers/MailProvider/models')) {
    fs.mkdirSync('src/shared/container/providers/MailProvider/models');
  }
  fs.appendFile(
    'src/shared/container/providers/index.ts',
    `\nimport './MailProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
      createIMailDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
      createIMailDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
      createFakeMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
      createFakeMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
      createEtherealMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
      createEtherealMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
      createSESMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
      createSESMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
    )
  ) {
    fs.appendFile(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
      createIMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
      createIMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!fs.existsSync('src/shared/container/providers/MailProvider/index.ts')) {
    fs.appendFile(
      'src/shared/container/providers/MailProvider/index.ts',
      createMailIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      'src/shared/container/providers/MailProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      'src/shared/container/providers/MailProvider/index.ts',
      createMailIndex(),
      error => {
        if (error) throw error;
      },
    );
  }
  console.log(
    '\x1b[38;2;255;255;0m',
    `- MailProvider ${messages.created}`,
    '\x1b[0m',
  );
}
