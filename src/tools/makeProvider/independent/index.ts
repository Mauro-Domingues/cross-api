import { IMessagesDTO, Messages } from '@tools/messages';
import { MakeCacheProvider } from './cache';
import { MakeCryptoProvider } from './crypto';
import { MakeHashProvider } from './hash';
import { MakeLeadProvider } from './lead';
import { MakeMailProvider } from './mail';
import { MakeMailTemplateProvider } from './mailTemplate';
import { MakeNotificationProvider } from './notification';
import { MakeStorageProvider } from './storage';

export class MakeProvider {
  private messages: IMessagesDTO;
  private providerName: string | undefined;
  private makeStorageProvider: MakeStorageProvider;
  private makeNotificationProvider: MakeNotificationProvider;
  private makeMailTemplateProvider: MakeMailTemplateProvider;
  private makeMailProvider: MakeMailProvider;
  private makeLeadProvider: MakeLeadProvider;
  private makeHashProvider: MakeHashProvider;
  private makeCryptoProvider: MakeCryptoProvider;
  private makeCacheProvider: MakeCacheProvider;

  constructor(providerName: string | undefined) {
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

  public async execute(): Promise<void> {
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
