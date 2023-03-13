import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';

export class MakeMailTemplateProvider {
  private messages: typeof messages;
  private createIMailTemplate: CreateIMailTemplate;
  private createIMailTemplateDTO: CreateIMailTemplateDTO;
  private createMailTemplate: CreateMailTemplate;
  private createFakeMailTemplate: CreateFakeMailTemplate;
  private createMailTemplateIndex: CreateMailTemplateIndex;

  constructor() {
    this.messages = messages;
    this.createIMailTemplate = new CreateIMailTemplate();
    this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
    this.createMailTemplate = new CreateMailTemplate();
    this.createFakeMailTemplate = new CreateFakeMailTemplate();
    this.createMailTemplateIndex = new CreateMailTemplateIndex();
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
    if (!existsSync('src/shared/container/providers/MailTemplateProvider')) {
      mkdirSync('src/shared/container/providers/MailTemplateProvider');
    }
    if (
      !existsSync('src/shared/container/providers/MailTemplateProvider/dtos')
    ) {
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
        this.createIMailTemplateDTO.execute(),
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
        this.createIMailTemplateDTO.execute(),
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
        this.createFakeMailTemplate.execute(),
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
        this.createFakeMailTemplate.execute(),
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
        this.createMailTemplate.execute(),
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
        this.createMailTemplate.execute(),
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
        this.createIMailTemplate.execute(),
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
        this.createIMailTemplate.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (
      !existsSync(
        'src/shared/container/providers/MailTemplateProvider/index.ts',
      )
    ) {
      appendFile(
        'src/shared/container/providers/MailTemplateProvider/index.ts',
        this.createMailTemplateIndex.execute(),
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
        this.createMailTemplateIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- MailTemplateProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
