export class ListProvider {
    providers;
    constructor() {
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
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|                                                         |', '\x1b[0m');
    }
    renderHeader() {
        console.log('');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', ` /=======================================================\\`, '\x1b[0m');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;0;255;155m', `       NAME`, '\x1b[38;2;0;155;255m', '         |', '\x1b[38;2;0;255;155m', `        DESCRIPTION`, '\x1b[38;2;0;155;255m', '         |', '\x1b[0m');
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '| – – – – – – – – – – – – – – – – – – – – – – – – – – – – |', '\x1b[0m');
    }
    renderProviderOptions() {
        this.providers.forEach(provider => {
            console.log('\x1b[1m', '\x1b[38;2;0;155;255m', '|', '\x1b[38;2;255;255;0m', `➤  ${provider.Name}     `, '\x1b[38;2;0;155;255m', '|', '\x1b[0m', `${provider.Provider}`, '\x1b[1m', '\x1b[38;2;0;155;255m', '       |', '\x1b[0m');
            this.renderEmptyLine();
        });
    }
    renderFooter() {
        console.log('\x1b[1m', '\x1b[38;2;0;155;255m', ` \\=======================================================/`, '\x1b[0m');
        console.log('');
    }
    execute() {
        this.renderHeader();
        this.renderProviderOptions();
        this.renderFooter();
    }
}
