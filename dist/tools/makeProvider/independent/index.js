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
        console.log(
          '\x1b[1m',
          '\x1b[38;2;255;0;0m',
          this.messages.providerNotFound,
          '\x1b[0m',
        );
        break;
    }
  }
}
