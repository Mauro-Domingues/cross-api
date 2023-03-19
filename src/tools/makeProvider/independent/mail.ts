import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
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
import { resolve } from 'path';

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
    if (!existsSync(resolve('src'))) {
      mkdirSync(resolve('src'));
    }
    if (!existsSync(resolve('src', 'config'))) {
      mkdirSync(resolve('src', 'config'));
    }
    if (!existsSync(resolve('src', 'shared'))) {
      mkdirSync(resolve('src', 'shared'));
    }
    if (!existsSync(resolve('src', 'shared', 'container'))) {
      mkdirSync(resolve('src', 'shared', 'container'));
    }
    if (!existsSync(resolve('src', 'shared', 'container', 'providers'))) {
      mkdirSync(resolve('src', 'shared', 'container', 'providers'));
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      `\nimport './MailTemplateProvider';`,
    );
    if (!existsSync(resolve('src', 'config', 'mail.ts'))) {
      appendFileSync(
        resolve('src', 'config', 'mail.ts'),
        this.createMailConfig.execute(),
      );
    } else {
      truncateSync(resolve('src', 'config', 'mail.ts'));
      appendFileSync(
        resolve('src', 'config', 'mail.ts'),
        this.createMailConfig.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
          'IParseMailTemplateDTO.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
          'IParseMailTemplateDTO.ts',
        ),
        this.createIMailTemplateDTO.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
          'IParseMailTemplateDTO.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'dtos',
          'IParseMailTemplateDTO.ts',
        ),
        this.createIMailTemplateDTO.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
          'FakeMailTemplateProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
          'FakeMailTemplateProvider.ts',
        ),
        this.createFakeMailTemplate.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
          'FakeMailTemplateProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'fakes',
          'FakeMailTemplateProvider.ts',
        ),
        this.createFakeMailTemplate.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
          'HandlebarsMailTemplateProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
          'HandlebarsMailTemplateProvider.ts',
        ),
        this.createMailTemplate.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
          'HandlebarsMailTemplateProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'implementations',
          'HandlebarsMailTemplateProvider.ts',
        ),
        this.createMailTemplate.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
          'IMailTemplateProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
          'IMailTemplateProvider.ts',
        ),
        this.createIMailTemplate.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
          'IMailTemplateProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'models',
          'IMailTemplateProvider.ts',
        ),
        this.createIMailTemplate.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'index.ts',
        ),
        this.createMailTemplateIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailTemplateProvider',
          'index.ts',
        ),
        this.createMailTemplateIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- MailTemplateProvider ${this.messages.created}`,
      '\x1b[0m',
    );
    if (
      !existsSync(
        resolve('src', 'shared', 'container', 'providers', 'MailProvider'),
      )
    ) {
      mkdirSync(
        resolve('src', 'shared', 'container', 'providers', 'MailProvider'),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'dtos',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'dtos',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'fakes',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'fakes',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
        ),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'models',
        ),
      )
    ) {
      mkdirSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'models',
        ),
      );
    }
    appendFileSync(
      resolve('src', 'shared', 'container', 'providers', 'index.ts'),
      `\nimport './MailProvider';`,
    );
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'dtos',
          'ISendMailDTO.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'dtos',
          'ISendMailDTO.ts',
        ),
        this.createIMailDTO.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'dtos',
          'ISendMailDTO.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'dtos',
          'ISendMailDTO.ts',
        ),
        this.createIMailDTO.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'fakes',
          'FakeMailProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'fakes',
          'FakeMailProvider.ts',
        ),
        this.createFakeMail.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'fakes',
          'FakeMailProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'fakes',
          'FakeMailProvider.ts',
        ),
        this.createFakeMail.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'EtherealMailProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'EtherealMailProvider.ts',
        ),
        this.createEtherealMail.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'EtherealMailProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'EtherealMailProvider.ts',
        ),
        this.createEtherealMail.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'SESMailProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'SESMailProvider.ts',
        ),
        this.createSESMail.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'SESMailProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'implementations',
          'SESMailProvider.ts',
        ),
        this.createSESMail.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'models',
          'IMailProvider.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'models',
          'IMailProvider.ts',
        ),
        this.createIMail.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'models',
          'IMailProvider.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'models',
          'IMailProvider.ts',
        ),
        this.createIMail.execute(),
      );
    }
    if (
      !existsSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'index.ts',
        ),
      )
    ) {
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'index.ts',
        ),
        this.createMailIndex.execute(),
      );
    } else {
      truncateSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'index.ts',
        ),
      );
      appendFileSync(
        resolve(
          'src',
          'shared',
          'container',
          'providers',
          'MailProvider',
          'index.ts',
        ),
        this.createMailIndex.execute(),
      );
    }
    console.log(
      '\x1b[38;2;255;255;0m',
      `- MailProvider ${this.messages.created}`,
      '\x1b[0m',
    );
  }
}
