import { CreateContainer } from '../../../templates/index/container.js';
import { CreateIMailTemplateDTO } from '../../../templates/providers/dtos/IParseMailTemplateDTO.js';
import { CreateFakeMailTemplate } from '../../../templates/providers/fakes/fakeMailTemplate.js';
import { CreateMailTemplate } from '../../../templates/providers/implementations/MailTemplate.js';
import { CreateMailTemplateIndex } from '../../../templates/providers/mailTemplateIndex.js';
import { CreateIMailTemplate } from '../../../templates/providers/models/IMailTemplate.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeDependentMailTemplateProvider {
    fatherNames;
    messages;
    fileManager;
    console;
    createIMailTemplate;
    createIMailTemplateDTO;
    createMailTemplate;
    createFakeMailTemplate;
    createMailTemplateIndex;
    createContainer;
    constructor(fatherNames) {
        this.fatherNames = fatherNames;
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
        this.createIMailTemplate = new CreateIMailTemplate();
        this.createIMailTemplateDTO = new CreateIMailTemplateDTO();
        this.createMailTemplate = new CreateMailTemplate();
        this.createFakeMailTemplate = new CreateFakeMailTemplate();
        this.createMailTemplateIndex = new CreateMailTemplateIndex();
        this.createContainer = new CreateContainer();
    }
    async execute() {
        if (!this.fatherNames) {
            this.console.one([
                this.messages.providerNotFound,
                'red',
                true,
                false,
                false,
            ]);
            throw new Error();
        }
        if (!this.fileManager.checkIfExists(['src'])) {
            await this.fileManager.createDir(['src']);
        }
        if (!this.fileManager.checkIfExists(['src', 'config'])) {
            await this.fileManager.createDir(['src', 'config']);
        }
        if (!this.fileManager.checkIfExists(['src', 'modules'])) {
            await this.fileManager.createDir(['src', 'modules']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared'])) {
            await this.fileManager.createDir(['src', 'shared']);
        }
        if (!this.fileManager.checkIfExists(['src', 'shared', 'container'])) {
            await this.fileManager.createDir(['src', 'shared', 'container']);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'index.ts',
        ])) {
            await this.fileManager.createFile(['src', 'shared', 'container', 'index.ts'], this.createContainer.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'index.ts',
            ], '');
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'dtos',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'dtos',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'fakes',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'fakes',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'implementations',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'implementations',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'models',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'models',
            ]);
        }
        await this.fileManager.createFile(['src', 'shared', 'container', 'index.ts'], `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
        await this.fileManager.createFile([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
        ], `import './MailTemplateProvider';\n`);
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'dtos',
            'IParseMailTemplateDTO.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'dtos',
                'IParseMailTemplateDTO.ts',
            ], this.createIMailTemplateDTO.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'dtos',
                'IParseMailTemplateDTO.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'dtos',
                'IParseMailTemplateDTO.ts',
            ], this.createIMailTemplateDTO.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'fakes',
            'FakeMailTemplateProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'fakes',
                'FakeMailTemplateProvider.ts',
            ], this.createFakeMailTemplate.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'fakes',
                'FakeMailTemplateProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'fakes',
                'FakeMailTemplateProvider.ts',
            ], this.createFakeMailTemplate.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'implementations',
            'HandlebarsMailTemplateProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'implementations',
                'HandlebarsMailTemplateProvider.ts',
            ], this.createMailTemplate.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'implementations',
                'HandlebarsMailTemplateProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'implementations',
                'HandlebarsMailTemplateProvider.ts',
            ], this.createMailTemplate.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'models',
            'IMailTemplateProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'models',
                'IMailTemplateProvider.ts',
            ], this.createIMailTemplate.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'models',
                'IMailTemplateProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'models',
                'IMailTemplateProvider.ts',
            ], this.createIMailTemplate.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailTemplateProvider',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'index.ts',
            ], this.createMailTemplateIndex.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'index.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailTemplateProvider',
                'index.ts',
            ], this.createMailTemplateIndex.execute());
        }
        return this.console.one([
            `- MailTemplateProvider ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
