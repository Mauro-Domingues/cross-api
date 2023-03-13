import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { createContainer } from '@templates/index/container';
import { createMailConfig } from '@templates/providers/config/mailConfig';
import { createIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { createIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { createFakeMail } from '@templates/providers/fakes/fakeMail';
import { createFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { createDependentEtherealMail } from '@templates/providers/implementations/dependentEtherealMail';
import { createDependentSESMail } from '@templates/providers/implementations/dependentSESMail';
import { createMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { createMailIndex } from '@templates/providers/mailIndex';
import { createMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { createIMail } from '@templates/providers/models/IMail';
import { createIMailTemplate } from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export async function makeDependentMailProvider(
  fatherNames: IModuleNamesDTO,
): Promise<void> {
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
    appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!existsSync(`src/modules/${fatherNames.pluralLowerModuleName}`)) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}`);
  }
  if (
    !existsSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`)
  ) {
    mkdirSync(`src/modules/${fatherNames.pluralLowerModuleName}/providers`);
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
      '',
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
    );
  }
  appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherNames.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  appendFile(
    `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
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
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      createMailTemplateIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
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
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations`,
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/models`,
    )
  ) {
    mkdirSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/models`,
    );
  }
  appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherNames.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  appendFile(
    `src/modules/${fatherNames.pluralLowerModuleName}/providers/index.ts`,
    `\nimport './MailProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
      createIMailDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
      createIMailDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
      createFakeMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
      createFakeMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
      createDependentEtherealMail(fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
      createDependentEtherealMail(fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
      createDependentSESMail(fatherNames),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
      createDependentSESMail(fatherNames),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
      createIMail(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
      createIMail(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !existsSync(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
    )
  ) {
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
      createMailIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    truncate(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    appendFile(
      `src/modules/${fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
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
