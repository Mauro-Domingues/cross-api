import { Console } from './console.js';
export class ListProvider {
    providers;
    console;
    constructor() {
        this.console = new Console();
        this.providers = [
            { Name: 'cache       ', Provider: 'CacheProvider       ' },
            { Name: 'crypto      ', Provider: 'CryptoProvider      ' },
            { Name: 'hash        ', Provider: 'HashProvider        ' },
            { Name: 'lead        ', Provider: 'leadProvider        ' },
            { Name: 'mail        ', Provider: 'MailProvider        ' },
            { Name: 'mailTemplate', Provider: 'MailTemplateProvider' },
            { Name: 'notification', Provider: 'NotificationProvider' },
            { Name: 'upload      ', Provider: 'StorageProvider     ' },
        ];
    }
    renderEmptyLine() {
        this.console.one([
            '|                                                       |   ',
            'blue',
            true,
            false,
            false,
        ]);
    }
    renderHeader() {
        this.console.many([
            [
                ` /=====================================================\\   `,
                'blue',
                true,
                true,
                true,
            ],
            ['|   ', 'blue', true, false, false],
            [`       NAME   `, 'green', true, false, false],
            ['         |   ', 'blue', true, false, false],
            [`        DESCRIPTION   `, 'green', true, false, false],
            ['           |   ', 'blue', true, false, true],
            [
                '| – – – – – – – – – – – – – – – – – – – – – – – – – – – |   ',
                'blue',
                true,
                false,
                false,
            ],
        ]);
    }
    renderProviderOptions() {
        this.providers.forEach(provider => {
            this.console.many([
                ['|   ', 'blue', true, false, false],
                [` ➤  ${provider.Name}       `, 'yellow', true, false, false],
                ['|   ', 'blue', true, false, false],
                [` ${provider.Provider}     `, 'white', false, false, false],
                ['       |   ', 'blue', true, false, false],
            ]);
            this.renderEmptyLine();
        });
    }
    renderFooter() {
        this.console.one([
            ` \\=====================================================/   `,
            'blue',
            true,
            false,
            true,
        ]);
    }
    execute() {
        this.renderHeader();
        this.renderProviderOptions();
        this.renderFooter();
    }
}
