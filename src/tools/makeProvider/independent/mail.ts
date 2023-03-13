import { appendFile, existsSync, mkdirSync, truncate } from 'fs';
import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateEtherealMail } from '@templates/providers/implementations/EtherealMail';
import { CreateMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { CreateSESMail } from '@templates/providers/implementations/SESMail';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';

export class MakeMailProvider {
  private messages: typeof messages;
  private createIMail: CreateIMail;
  private createFakeMail: CreateFakeMail;
  private createIMailDTO: CreateIMailDTO;
  private createMailConfig: CreateMailConfig;
  private createMailIndex: CreateMailIndex;
  private createMailTemplate: CreateMailTemplate;
  private createSESMail: CreateSESMail;
  private createEtherealMail: CreateEtherealMail;
  private createIMailTemplate: CreateIMailTemplate;
  private createFakeMailTemplate: CreateFakeMailTemplate;
  private createIMailTemplateDTO: CreateIMailTemplateDTO;
  private createMailTemplateIndex: CreateMailTemplateIndex;

  constructor() {
    this.messages = messages;
    this.createIMail = new CreateIMail();
    this.createFakeMail = new CreateFakeMail();
    this.createIMailDTO = new CreateIMailDTO();
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createIMailTemplate = new CreateIMailTemplate();
    this.createFakeMailTemplate = new CreateFakeMailTemplate();
    this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
    this.createMailTemplateIndex = new CreateMailTemplateIndex();
    this.createMailTemplate = new CreateMailTemplate();
    this.createSESMail = new CreateSESMail();
    this.createEtherealMail = new CreateEtherealMail();
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
    if (!existsSync('src/config/mail.ts')) {
      appendFile(
        'src/config/mail.ts',
        this.createMailConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate('src/config/mail.ts', error => {
        if (error) console.log(error);
      });
      appendFile(
        'src/config/mail.ts',
        this.createMailConfig.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
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
        this.createIMailDTO.execute(),
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
        this.createIMailDTO.execute(),
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
        this.createFakeMail.execute(),
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
        this.createFakeMail.execute(),
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
        this.createEtherealMail.execute(),
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
        this.createEtherealMail.execute(),
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
        this.createSESMail.execute(),
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
        this.createSESMail.execute(),
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
        this.createIMail.execute(),
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
        this.createIMail.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    if (!existsSync('src/shared/container/providers/MailProvider/index.ts')) {
      appendFile(
        'src/shared/container/providers/MailProvider/index.ts',
        this.createMailIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    } else {
      truncate(
        'src/shared/container/providers/MailProvider/index.ts',
        error => {
          if (error) console.log(error);
        },
      );
      appendFile(
        'src/shared/container/providers/MailProvider/index.ts',
        this.createMailIndex.execute(),
        error => {
          if (error) throw error;
        },
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- MailProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
