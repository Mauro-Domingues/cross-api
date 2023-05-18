import { Console } from '../../console.js';
import { Messages } from '../../messages.js';
import { MakeCacheProvider } from './cache.js';
import { MakeCryptoProvider } from './crypto.js';
import { MakeHashProvider } from './hash.js';
import { MakeLeadProvider } from './lead.js';
import { MakeMailProvider } from './mail.js';
import { MakeMailTemplateProvider } from './mailTemplate.js';
import { MakeNotificationProvider } from './notification.js';
import { MakeStorageProvider } from './storage.js';
export class MakeProvider {
    messages;
    console;
    providerName;
    makeStorageProvider;
    makeNotificationProvider;
    makeMailTemplateProvider;
    makeMailProvider;
    makeLeadProvider;
    makeHashProvider;
    makeCryptoProvider;
    makeCacheProvider;
    constructor(providerName) {
        this.providerName = providerName;
        this.messages = new Messages().execute();
        this.console = new Console();
        this.makeStorageProvider = new MakeStorageProvider();
        this.makeNotificationProvider = new MakeNotificationProvider();
        this.makeMailTemplateProvider = new MakeMailTemplateProvider();
        this.makeMailProvider = new MakeMailProvider();
        this.makeLeadProvider = new MakeLeadProvider();
        this.makeHashProvider = new MakeHashProvider();
        this.makeCryptoProvider = new MakeCryptoProvider();
        this.makeCacheProvider = new MakeCacheProvider();
    }
    async execute() {
        switch (this.providerName) {
            case 'cache':
                await this.makeCacheProvider.execute();
                break;
            case 'upload':
                await this.makeStorageProvider.execute();
                break;
            case 'mailTemplate':
                await this.makeMailTemplateProvider.execute();
                break;
            case 'mail':
                await this.makeMailTemplateProvider.execute();
                await this.makeMailProvider.execute();
                break;
            case 'notification':
                await this.makeNotificationProvider.execute();
                break;
            case 'lead':
                await this.makeLeadProvider.execute();
                break;
            case 'crypto':
                await this.makeCryptoProvider.execute();
                break;
            case 'hash':
                await this.makeHashProvider.execute();
                break;
            default:
                this.console.one([
                    this.messages.providerNotFound,
                    'red',
                    true,
                    false,
                    false,
                ]);
                break;
        }
    }
}
