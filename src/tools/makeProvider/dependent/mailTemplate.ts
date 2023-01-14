import fs from 'fs';
import createContainer from '../../../templates/index/container';
import createIMailTemplateDTO from '../../../templates/providers/dtos/IParseMailTemplateDTO';
import createFakeMailTemplate from '../../../templates/providers/fakes/fakeMailTemplate';
import createMailTemplate from '../../../templates/providers/implementations/MailTemplate';
import createMailTemplateIndex from '../../../templates/providers/mailTemplateIndex';
import createIMailTemplate from '../../../templates/providers/models/IMailTemplate';
import messages from '../../messages';

export default async function makeDependentMailTemplateProvider(fatherData: {
  [key: string]: string;
}): Promise<void> {
  if (!fs.existsSync('src')) {
    fs.mkdirSync('src');
  }
  if (!fs.existsSync('src/config')) {
    fs.mkdirSync('src/config');
  }
  if (!fs.existsSync('src/modules')) {
    fs.mkdirSync('src/modules');
  }
  if (!fs.existsSync('src/shared/container')) {
    fs.mkdirSync('src/shared/container');
  }
  if (!fs.existsSync('src/shared/container/index.ts')) {
    fs.appendFile('src/shared/container/index.ts', createContainer(), error => {
      if (error) throw error;
    });
  }
  if (!fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}`)) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}`);
  }
  if (
    !fs.existsSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`)
  ) {
    fs.mkdirSync(`src/modules/${fatherData.pluralLowerModuleName}/providers`);
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
      '',
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
    )
  ) {
    fs.mkdirSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
    );
  }
  fs.appendFile(
    `src/shared/container/index.ts`,
    `import '@modules/${fatherData.pluralLowerModuleName}/providers';`,
    error => {
      if (error) throw error;
    },
  );
  fs.appendFile(
    `src/modules/${fatherData.pluralLowerModuleName}/providers/index.ts`,
    `\nimport './MailTemplateProvider';`,
    error => {
      if (error) throw error;
    },
  );
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      createIMailTemplateDTO(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      createFakeMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      createMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      createIMailTemplate(),
      error => {
        if (error) throw error;
      },
    );
  }
  if (
    !fs.existsSync(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
    )
  ) {
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      createMailTemplateIndex(),
      error => {
        if (error) throw error;
      },
    );
  } else {
    fs.truncate(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      error => {
        if (error) console.log(error);
      },
    );
    fs.appendFile(
      `src/modules/${fatherData.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
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
