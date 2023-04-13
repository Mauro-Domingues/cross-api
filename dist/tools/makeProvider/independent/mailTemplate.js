import { appendFileSync, existsSync, mkdirSync, truncateSync } from 'fs';
import { CreateIMailTemplateDTO } from '../../../templates/providers/dtos/IParseMailTemplateDTO';
import { CreateFakeMailTemplate } from '../../../templates/providers/fakes/fakeMailTemplate';
import { CreateMailTemplate } from '../../../templates/providers/implementations/MailTemplate';
import { CreateMailTemplateIndex } from '../../../templates/providers/mailTemplateIndex';
import { CreateIMailTemplate } from '../../../templates/providers/models/IMailTemplate';
import { Messages } from '../../messages';
import { resolve } from 'path';
export class MakeMailTemplateProvider {
    messages;
    createIMailTemplate;
    createIMailTemplateDTO;
    createMailTemplate;
    createFakeMailTemplate;
    createMailTemplateIndex;
    constructor() {
        this.messages = new Messages().execute();
        this.createIMailTemplate = new CreateIMailTemplate();
        this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
        this.createMailTemplate = new CreateMailTemplate();
        this.createFakeMailTemplate = new CreateFakeMailTemplate();
        this.createMailTemplateIndex = new CreateMailTemplateIndex();
    }
    async execute() {
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
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations'));
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models'))) {
            mkdirSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models'));
        }
        appendFileSync(resolve('src', 'shared', 'container', 'providers', 'index.ts'), `import './MailTemplateProvider';\n`);
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'), this.createIMailTemplateDTO.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'dtos', 'IParseMailTemplateDTO.ts'), this.createIMailTemplateDTO.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'), this.createFakeMailTemplate.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'fakes', 'FakeMailTemplateProvider.ts'), this.createFakeMailTemplate.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'), this.createMailTemplate.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'implementations', 'HandlebarsMailTemplateProvider.ts'), this.createMailTemplate.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'), this.createIMailTemplate.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'models', 'IMailTemplateProvider.ts'), this.createIMailTemplate.execute());
        }
        if (!existsSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'))) {
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'), this.createMailTemplateIndex.execute());
        }
        else {
            truncateSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'));
            appendFileSync(resolve('src', 'shared', 'container', 'providers', 'MailTemplateProvider', 'index.ts'), this.createMailTemplateIndex.execute());
        }
        console.log('\x1b[38;2;255;255;0m', `- MailTemplateProvider ${this.messages.created}`, '\x1b[0m');
    }
}
