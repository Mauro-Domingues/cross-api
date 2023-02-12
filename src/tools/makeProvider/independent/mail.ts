import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createMailConfig } from '@templates/providers/config/mailConfig';
import { createIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { createIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { createFakeMail } from '@templates/providers/fakes/fakeMail';
import { createFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { createEtherealMail } from '@templates/providers/implementations/EtherealMail';
import { createMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { createSESMail } from '@templates/providers/implementations/SESMail';
import { createMailIndex } from '@templates/providers/mailIndex';
import { createMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { createIMail } from '@templates/providers/models/IMail';
import { createIMailTemplate } from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';

export async function makeMailProvider(): Promise<void> {
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
  if (!existsSync('src/shared/container/providers/MailTemplateProvider')) {
    mkdirSync('src/shared/container/providers/MailTemplateProvider');
  }
  if (!existsSync('src/shared/container/providers/MailTemplateProvider/dtos')) {
    mkdirSync('src/shared/container/providers/MailTemplateProvider/dtos');
  }
  if (
    !existsSync('src/shared/container/providers/MailTemplateProvider/fakes')
  ) {
    mkdirSync('src/shared/container/providers/MailTemplateProvider/fakes');
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailTemplateProvider/implementations',
    )
  ) {
    mkdirSync(
      'src/shared/container/providers/MailTemplateProvider/implementations',
    );
  }
  if (
    !existsSync('src/shared/container/providers/MailTemplateProvider/models')
  ) {
    mkdirSync('src/shared/container/providers/MailTemplateProvider/models');
  }
  appendFile(
    'src/shared/container/providers/index.ts',
    `\nimport './MailTemplateProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (!existsSync('src/config/mail.ts')) {
    appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
    });
  } else {
    truncate('src/config/mail.ts', error => {
      if (error) console.log(error);
    });
    appendFile('src/config/mail.ts', createMailConfig(), error => {
      if (error) throw error;
    });
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts',
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts',
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts',
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/models/IMailTemplateProvider.ts',
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync('src/shared/container/providers/MailTemplateProvider/index.ts')
  ) {
    appendFile(
      'src/shared/container/providers/MailTemplateProvider/index.ts',
      createMailTemplateIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailTemplateProvider/index.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
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
  if (!existsSync('src/shared/container/providers/MailProvider')) {
    mkdirSync('src/shared/container/providers/MailProvider');
  }
  if (!existsSync('src/shared/container/providers/MailProvider/dtos')) {
    mkdirSync('src/shared/container/providers/MailProvider/dtos');
  }
  if (!existsSync('src/shared/container/providers/MailProvider/fakes')) {
    mkdirSync('src/shared/container/providers/MailProvider/fakes');
  }
  if (
    !existsSync('src/shared/container/providers/MailProvider/implementations')
  ) {
    mkdirSync('src/shared/container/providers/MailProvider/implementations');
  }
  if (!existsSync('src/shared/container/providers/MailProvider/models')) {
    mkdirSync('src/shared/container/providers/MailProvider/models');
  }
  appendFile(
    'src/shared/container/providers/index.ts',
    `\nimport './MailProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (
    !existsSync(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
      createIMailDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailProvider/dtos/ISendMailDTO.ts',
      createIMailDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
      createFakeMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailProvider/fakes/FakeMailProvider.ts',
      createFakeMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
      createEtherealMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailProvider/implementations/EtherealMailProvider.ts',
      createEtherealMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
      createSESMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailProvider/implementations/SESMailProvider.ts',
      createSESMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
    )
  ) {
    appendFile(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
      createIMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      'src/shared/container/providers/MailProvider/models/IMailProvider.ts',
      createIMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (!existsSync('src/shared/container/providers/MailProvider/index.ts')) {
    appendFile(
      'src/shared/container/providers/MailProvider/index.ts',
      createMailIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate('src/shared/container/providers/MailProvider/index.ts', error => {
      if (error) console.log(error);
    });
    appendFile(
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
