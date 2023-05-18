import { CreateContainer } from '../../../templates/index/container.js';
import { CreateMailConfig } from '../../../templates/providers/config/mailConfig.js';
import { CreateIMailDTO } from '../../../templates/providers/dtos/IMailDTO.js';
import { CreateFakeMail } from '../../../templates/providers/fakes/fakeMail.js';
import { CreateDependentEtherealMail } from '../../../templates/providers/implementations/dependentEtherealMail.js';
import { CreateDependentSESMail } from '../../../templates/providers/implementations/dependentSESMail.js';
import { CreateMailIndex } from '../../../templates/providers/mailIndex.js';
import { CreateIMail } from '../../../templates/providers/models/IMail.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeDependentMailProvider {
    fatherNames;
    fileManager;
    messages;
    console;
    createIMail;
    createFakeMail;
    createIMailDTO;
    createMailConfig;
    createMailIndex;
    createContainer;
    createDependentSESMail;
    createDependentEtherealMail;
    constructor(fatherNames) {
        this.fatherNames = fatherNames;
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
        this.createIMail = new CreateIMail();
        this.createFakeMail = new CreateFakeMail();
        this.createIMailDTO = new CreateIMailDTO();
        this.createMailConfig = new CreateMailConfig();
        this.createMailIndex = new CreateMailIndex();
        this.createContainer = new CreateContainer();
        this.createDependentSESMail = new CreateDependentSESMail(this.fatherNames);
        this.createDependentEtherealMail = new CreateDependentEtherealMail(this.fatherNames);
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
        await this.fileManager.createFile(['src', 'shared', 'container', 'index.ts'], `import '@modules/${this.fatherNames.pluralLowerModuleName}/providers';`);
        if (!this.fileManager.checkIfExists(['src', 'config', 'mail.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'mail.ts'], this.createMailConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'mail.ts']);
            await this.fileManager.createFile(['src', 'config', 'mail.ts'], this.createMailConfig.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'dtos',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'dtos',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'fakes',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'fakes',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'implementations',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'implementations',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'models',
        ])) {
            await this.fileManager.createDir([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'models',
            ]);
        }
        await this.fileManager.createFile([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'index.ts',
        ], `import './MailProvider';\n`);
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'dtos',
            'ISendMailDTO.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'dtos',
                'ISendMailDTO.ts',
            ], this.createIMailDTO.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'dtos',
                'ISendMailDTO.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'dtos',
                'ISendMailDTO.ts',
            ], this.createIMailDTO.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'fakes',
            'FakeMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'fakes',
                'FakeMailProvider.ts',
            ], this.createFakeMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'fakes',
                'FakeMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'fakes',
                'FakeMailProvider.ts',
            ], this.createFakeMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'implementations',
            'EtherealMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'implementations',
                'EtherealMailProvider.ts',
            ], this.createDependentEtherealMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'implementations',
                'EtherealMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'implementations',
                'EtherealMailProvider.ts',
            ], this.createDependentEtherealMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'implementations',
            'SESMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'implementations',
                'SESMailProvider.ts',
            ], this.createDependentSESMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'implementations',
                'SESMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'implementations',
                'SESMailProvider.ts',
            ], this.createDependentSESMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'models',
            'IMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'models',
                'IMailProvider.ts',
            ], this.createIMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'models',
                'IMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'models',
                'IMailProvider.ts',
            ], this.createIMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'modules',
            this.fatherNames.pluralLowerModuleName,
            'providers',
            'MailProvider',
            'index.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'index.ts',
            ], this.createMailIndex.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'index.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'modules',
                this.fatherNames.pluralLowerModuleName,
                'providers',
                'MailProvider',
                'index.ts',
            ], this.createMailIndex.execute());
        }
        return this.console.one([
            `- MailProvider ${this.messages.created}`,
            'yellow',
            true,
            false,
            false,
        ]);
    }
}
