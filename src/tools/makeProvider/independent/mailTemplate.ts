import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { createFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { createMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { createMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { createIMailTemplate } from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';

export async function makeMailTemplateProvider(): Promise<void> {
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
}
