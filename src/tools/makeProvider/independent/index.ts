import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { MakeCacheProvider } from './cache';
import { MakeCryptoProvider } from './crypto';
import { MakeHashProvider } from './hash';
import { MakeLeadProvider } from './lead';
import { MakeMailProvider } from './mail';
import { MakeMailTemplateProvider } from './mailTemplate';
import { MakeNotificationProvider } from './notification';
import { MakeStorageProvider } from './storage';
import { MakeQueueProvider } from './queue';

export class MakeProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly providerName: string | undefined;
  private readonly makeStorageProvider: MakeStorageProvider;
  private readonly makeNotificationProvider: MakeNotificationProvider;
  private readonly makeMailTemplateProvider: MakeMailTemplateProvider;
  private readonly makeMailProvider: MakeMailProvider;
  private readonly makeLeadProvider: MakeLeadProvider;
  private readonly makeHashProvider: MakeHashProvider;
  private readonly makeCryptoProvider: MakeCryptoProvider;
  private readonly makeCacheProvider: MakeCacheProvider;
  private readonly makeQueueProvider: MakeQueueProvider;

  constructor(providerName: string | undefined) {
    this.providerName = providerName;
    this.messages = new Messages().execute();
    this.console = new Console();
    this.makeStorageProvider = new MakeStorageProvider();
    this.makeNotificationProvider = new MakeNotificationProvider();
    this.makeMailTemplateProvider = new MakeMailTemplateProvider();
    this.makeMailProvider = new MakeMailProvider();
    this.makeLeadProvider = new MakeLeadProvider();
    this.makeHashProvider = new MakeHashProvider();
    this.makeQueueProvider = new MakeQueueProvider();
    this.makeCryptoProvider = new MakeCryptoProvider();
    this.makeCacheProvider = new MakeCacheProvider();
  }

  public async execute(): Promise<void> {
    switch (this.providerName) {
      case 'cache':
        await this.makeCacheProvider.execute();
        break;
      case 'crypto':
        await this.makeCryptoProvider.execute();
        break;
      case 'hash':
        await this.makeHashProvider.execute();
        break;
      case 'lead':
        await this.makeLeadProvider.execute();
        break;
      case 'mail':
        await this.makeMailTemplateProvider.execute();
        await this.makeMailProvider.execute();
        break;
      case 'mailTemplate':
        await this.makeMailTemplateProvider.execute();
        break;
      case 'notification':
        await this.makeNotificationProvider.execute();
        break;
      case 'queue':
        await this.makeQueueProvider.execute();
        break;
      case 'upload':
        await this.makeStorageProvider.execute();
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
