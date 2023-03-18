import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateContainer } from '@templates/index/container';
import { CreateMailConfig } from '@templates/providers/config/mailConfig';
import { CreateIMailDTO } from '@templates/providers/dtos/IMailDTO';
import { CreateIMailTemplateDTO } from '@templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMail } from '@templates/providers/fakes/fakeMail';
import { CreateFakeMailTemplate } from '@templates/providers/fakes/fakeMailTemplate';
import { CreateDependentEtherealMail } from '@templates/providers/implementations/dependentEtherealMail';
import { CreateDependentSESMail } from '@templates/providers/implementations/dependentSESMail';
import { CreateMailTemplate } from '@templates/providers/implementations/MailTemplate';
import { CreateMailIndex } from '@templates/providers/mailIndex';
import { CreateMailTemplateIndex } from '@templates/providers/mailTemplateIndex';
import { CreateIMail } from '@templates/providers/models/IMail';
import { CreateIMailTemplate } from '@templates/providers/models/IMailTemplate';
import messages from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';

export class MakeDependentMailProvider {
  private fatherNames:
    | Pick<IModuleNamesDTO, 'pluralLowerModuleName'>
    | undefined;
  private messages: typeof messages;
  private createIMail: CreateIMail;
  private createFakeMail: CreateFakeMail;
  private createIMailDTO: CreateIMailDTO;
  private createMailConfig: CreateMailConfig;
  private createMailIndex: CreateMailIndex;
  private createContainer: CreateContainer;
  private createMailTemplate: CreateMailTemplate;
  private createDependentSESMail: CreateDependentSESMail;
  private createDependentEtherealMail: CreateDependentEtherealMail;
  private createIMailTemplate: CreateIMailTemplate;
  private createFakeMailTemplate: CreateFakeMailTemplate;
  private createIMailTemplateDTO: CreateIMailTemplateDTO;
  private createMailTemplateIndex: CreateMailTemplateIndex;

  constructor(fatherNames: IModuleNamesDTO | undefined) {
    this.fatherNames = fatherNames;
    this.messages = messages;
    this.createIMail = new CreateIMail();
    this.createFakeMail = new CreateFakeMail();
    this.createIMailDTO = new CreateIMailDTO();
    this.createMailConfig = new CreateMailConfig();
    this.createMailIndex = new CreateMailIndex();
    this.createContainer = new CreateContainer();
    this.createIMailTemplate = new CreateIMailTemplate();
    this.createFakeMailTemplate = new CreateFakeMailTemplate();
    this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
    this.createMailTemplateIndex = new CreateMailTemplateIndex();
    this.createMailTemplate = new CreateMailTemplate();
    this.createDependentSESMail = new CreateDependentSESMail(this.fatherNames);
    this.createDependentEtherealMail = new CreateDependentEtherealMail(
      this.fatherNames,
    );
  }

  public async execute(): Promise<void> {
    if (!this.fatherNames) {
      console.log(
        '\x1b[1m',
        '\x1b[38;2;255;0;0m',
        this.messages.providerNotFound,
        '\x1b[0m',
      );
      throw new Error();
    }

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
      appendFileSync(
        'src/shared/container/index.ts',
        this.createContainer.execute(),
      );
    }
    if (!existsSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`)) {
      mkdirSync(`src/modules/${this.fatherNames.pluralLowerModuleName}`);
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
        '',
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models`,
      );
    }
    appendFileSync(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      `\nimport './MailTemplateProvider';`,
    );
    if (!existsSync('src/config/mail.ts')) {
      appendFileSync('src/config/mail.ts', this.createMailConfig.execute());
    } else {
      truncateSync('src/config/mail.ts');
      appendFileSync('src/config/mail.ts', this.createMailConfig.execute());
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
        this.createIMailTemplateDTO.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/dtos/IParseMailTemplateDTO.ts`,
        this.createIMailTemplateDTO.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
        this.createFakeMailTemplate.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/fakes/FakeMailTemplateProvider.ts`,
        this.createFakeMailTemplate.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
        this.createMailTemplate.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/implementations/HandlebarsMailTemplateProvider.ts`,
        this.createMailTemplate.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
        this.createIMailTemplate.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/models/IMailTemplateProvider.ts`,
        this.createIMailTemplate.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
        this.createMailTemplateIndex.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailTemplateProvider/index.ts`,
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
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations`,
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/models`,
      )
    ) {
      mkdirSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/models`,
      );
    }
    appendFileSync(
      `src/shared/container/index.ts`,
      `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`,
    );
    appendFileSync(
      `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/index.ts`,
      `\nimport './MailProvider';`,
    );
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
        this.createIMailDTO.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/dtos/ISendMailDTO.ts`,
        this.createIMailDTO.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
        this.createFakeMail.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/fakes/FakeMailProvider.ts`,
        this.createFakeMail.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
        this.createDependentEtherealMail.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/EtherealMailProvider.ts`,
        this.createDependentEtherealMail.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
        this.createDependentSESMail.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/implementations/SESMailProvider.ts`,
        this.createDependentSESMail.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
        this.createIMail.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/models/IMailProvider.ts`,
        this.createIMail.execute(),
      );
    }
    if (
      !existsSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
      )
    ) {
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
        this.createMailIndex.execute(),
      );
    } else {
      truncateSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
      );
      appendFileSync(
        `src/modules/${this.fatherNames.pluralLowerModuleName}/providers/MailProvider/index.ts`,
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
