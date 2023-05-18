import { Console } from '../../console.js';
import { Messages } from '../../messages.js';
import { MakeDependentCacheProvider } from './cache.js';
import { MakeDependentCryptoProvider } from './crypto.js';
import { MakeDependentHashProvider } from './hash.js';
import { MakeDependentLeadProvider } from './lead.js';
import { MakeDependentMailProvider } from './mail.js';
import { MakeDependentMailTemplateProvider } from './mailTemplate.js';
import { MakeDependentNotificationProvider } from './notification.js';
import { MakeDependentStorageProvider } from './storage.js';
export class MakeDependentProvider {
    messages;
    console;
    providerName;
    fatherNames;
    makeDependentStorageProvider;
    makeDependentNotificationProvider;
    makeDependentMailTemplateProvider;
    makeDependentMailProvider;
    makeDependentLeadProvider;
    makeDependentHashProvider;
    makeDependentCryptoProvider;
    makeDependentCacheProvider;
    constructor(providerName, fatherNames) {
        this.messages = new Messages().execute();
        this.console = new Console();
        this.providerName = providerName;
        this.fatherNames = fatherNames;
        this.makeDependentStorageProvider = new MakeDependentStorageProvider(this.fatherNames);
        this.makeDependentNotificationProvider =
            new MakeDependentNotificationProvider(this.fatherNames);
        this.makeDependentMailTemplateProvider =
            new MakeDependentMailTemplateProvider(this.fatherNames);
        this.makeDependentMailProvider = new MakeDependentMailProvider(this.fatherNames);
        this.makeDependentLeadProvider = new MakeDependentLeadProvider(this.fatherNames);
        this.makeDependentHashProvider = new MakeDependentHashProvider(this.fatherNames);
        this.makeDependentCryptoProvider = new MakeDependentCryptoProvider(this.fatherNames);
        this.makeDependentCacheProvider = new MakeDependentCacheProvider(this.fatherNames);
    }
    async execute() {
        switch (this.providerName) {
            case 'cache':
                await this.makeDependentCacheProvider.execute();
                break;
            case 'upload':
                await this.makeDependentStorageProvider.execute();
                break;
            case 'mailTemplate':
                await this.makeDependentMailTemplateProvider.execute();
                break;
            case 'mail':
                await this.makeDependentMailTemplateProvider.execute();
                await this.makeDependentMailProvider.execute();
                break;
            case 'notification':
                await this.makeDependentNotificationProvider.execute();
                break;
            case 'lead':
                await this.makeDependentLeadProvider.execute();
                break;
            case 'crypto':
                await this.makeDependentCryptoProvider.execute();
                break;
            case 'hash':
                await this.makeDependentHashProvider.execute();
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
