import { CreateMailConfig } from '../../../templates/providers/config/mailConfig.js';
import { CreateIMailDTO } from '../../../templates/providers/dtos/IMailDTO.js';
import { CreateFakeMail } from '../../../templates/providers/fakes/fakeMail.js';
import { CreateEtherealMail } from '../../../templates/providers/implementations/EtherealMail.js';
import { CreateSESMail } from '../../../templates/providers/implementations/SESMail.js';
import { CreateMailIndex } from '../../../templates/providers/mailIndex.js';
import { CreateIMail } from '../../../templates/providers/models/IMail.js';
import { Messages } from '../../messages.js';
import { Console } from '../../console.js';
import { FileManager } from '../../fileManager.js';
export class MakeMailProvider {
    messages;
    console;
    fileManager;
    createIMail;
    createFakeMail;
    createIMailDTO;
    createMailConfig;
    createMailIndex;
    createSESMail;
    createEtherealMail;
    constructor() {
        this.messages = new Messages().execute();
        this.fileManager = new FileManager();
        this.console = new Console();
        this.createIMail = new CreateIMail();
        this.createFakeMail = new CreateFakeMail();
        this.createIMailDTO = new CreateIMailDTO();
        this.createMailConfig = new CreateMailConfig();
        this.createMailIndex = new CreateMailIndex();
        this.createSESMail = new CreateSESMail();
        this.createEtherealMail = new CreateEtherealMail();
    }
    async execute() {
        if (!this.fileManager.checkIfExists(['src'])) {
            await this.fileManager.createDir(['src']);
        }
        if (!this.fileManager.checkIfExists(['src', 'config'])) {
            await this.fileManager.createDir(['src', 'config']);
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
            'providers',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
            ]);
        }
        if (!this.fileManager.checkIfExists(['src', 'config', 'mail.ts'])) {
            await this.fileManager.createFile(['src', 'config', 'mail.ts'], this.createMailConfig.execute());
        }
        else {
            await this.fileManager.truncateFile(['src', 'config', 'mail.ts']);
            await this.fileManager.createFile(['src', 'config', 'mail.ts'], this.createMailConfig.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'dtos',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'dtos',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'fakes',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'fakes',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'implementations',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'implementations',
            ]);
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'models',
        ])) {
            await this.fileManager.createDir([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'models',
            ]);
        }
        await this.fileManager.createFile(['src', 'shared', 'container', 'providers', 'index.ts'], `import './MailProvider';\n`);
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'dtos',
            'ISendMailDTO.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'dtos',
                'ISendMailDTO.ts',
            ], this.createIMailDTO.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'dtos',
                'ISendMailDTO.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'dtos',
                'ISendMailDTO.ts',
            ], this.createIMailDTO.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'fakes',
            'FakeMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'fakes',
                'FakeMailProvider.ts',
            ], this.createFakeMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'fakes',
                'FakeMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'fakes',
                'FakeMailProvider.ts',
            ], this.createFakeMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'implementations',
            'EtherealMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'implementations',
                'EtherealMailProvider.ts',
            ], this.createEtherealMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'implementations',
                'EtherealMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'implementations',
                'EtherealMailProvider.ts',
            ], this.createEtherealMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'implementations',
            'SESMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'implementations',
                'SESMailProvider.ts',
            ], this.createSESMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'implementations',
                'SESMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'implementations',
                'SESMailProvider.ts',
            ], this.createSESMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'models',
            'IMailProvider.ts',
        ])) {
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'models',
                'IMailProvider.ts',
            ], this.createIMail.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'models',
                'IMailProvider.ts',
            ]);
            await this.fileManager.createFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'models',
                'IMailProvider.ts',
            ], this.createIMail.execute());
        }
        if (!this.fileManager.checkIfExists([
            'src',
            'shared',
            'container',
            'providers',
            'MailProvider',
            'index.ts',
        ])) {
            await this.fileManager.createFile(['src', 'shared', 'container', 'providers', 'MailProvider', 'index.ts'], this.createMailIndex.execute());
        }
        else {
            await this.fileManager.truncateFile([
                'src',
                'shared',
                'container',
                'providers',
                'MailProvider',
                'index.ts',
            ]);
            await this.fileManager.createFile(['src', 'shared', 'container', 'providers', 'MailProvider', 'index.ts'], this.createMailIndex.execute());
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
