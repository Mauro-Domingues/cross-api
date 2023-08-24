import { Console } from '@tools/console';
import { IMessagesDTO, Messages } from '@tools/messages';
import { IModuleNamesDTO } from '@tools/names';
import { MakeDependentCacheProvider } from './cache';
import { MakeDependentCryptoProvider } from './crypto';
import { MakeDependentHashProvider } from './hash';
import { MakeDependentLeadProvider } from './lead';
import { MakeDependentMailProvider } from './mail';
import { MakeDependentMailTemplateProvider } from './mailTemplate';
import { MakeDependentNotificationProvider } from './notification';
import { MakeDependentStorageProvider } from './storage';
import { MakeDependentQueueProvider } from './queue';

export class MakeDependentProvider {
  private readonly messages: IMessagesDTO;
  private readonly console: Console;
  private readonly providerName: string | undefined;
  private readonly fatherNames: IModuleNamesDTO | undefined;
  private readonly makeDependentStorageProvider: MakeDependentStorageProvider;
  private readonly makeDependentNotificationProvider: MakeDependentNotificationProvider;
  private readonly makeDependentMailTemplateProvider: MakeDependentMailTemplateProvider;
  private readonly makeDependentMailProvider: MakeDependentMailProvider;
  private readonly makeDependentLeadProvider: MakeDependentLeadProvider;
  private readonly makeDependentHashProvider: MakeDependentHashProvider;
  private readonly makeDependentCryptoProvider: MakeDependentCryptoProvider;
  private readonly makeDependentCacheProvider: MakeDependentCacheProvider;
  private readonly makeDependentQueueProvider: MakeDependentQueueProvider;

  constructor(
    providerName: string | undefined,
    fatherNames: IModuleNamesDTO | undefined,
  ) {
    this.messages = new Messages().execute();
    this.console = new Console();
    this.providerName = providerName;
    this.fatherNames = fatherNames;
    this.makeDependentStorageProvider = new MakeDependentStorageProvider(
      this.fatherNames,
    );
    this.makeDependentNotificationProvider =
      new MakeDependentNotificationProvider(this.fatherNames);
    this.makeDependentMailTemplateProvider =
      new MakeDependentMailTemplateProvider(this.fatherNames);
    this.makeDependentMailProvider = new MakeDependentMailProvider(
      this.fatherNames,
    );
    this.makeDependentLeadProvider = new MakeDependentLeadProvider(
      this.fatherNames,
    );
    this.makeDependentHashProvider = new MakeDependentHashProvider(
      this.fatherNames,
    );
    this.makeDependentCryptoProvider = new MakeDependentCryptoProvider(
      this.fatherNames,
    );
    this.makeDependentCacheProvider = new MakeDependentCacheProvider(
      this.fatherNames,
    );
    this.makeDependentQueueProvider = new MakeDependentQueueProvider(
      this.fatherNames,
    );
  }

  public async execute(): Promise<void> {
    switch (this.providerName) {
      case 'cache':
        await this.makeDependentCacheProvider.execute();
        break;
      case 'crypto':
        await this.makeDependentCryptoProvider.execute();
        break;
      case 'hash':
        await this.makeDependentHashProvider.execute();
        break;
      case 'lead':
        await this.makeDependentLeadProvider.execute();
        break;
      case 'mail':
        await this.makeDependentMailTemplateProvider.execute();
        await this.makeDependentMailProvider.execute();
        break;
      case 'mailTemplate':
        await this.makeDependentMailTemplateProvider.execute();
        break;
      case 'notification':
        await this.makeDependentNotificationProvider.execute();
        break;
      case 'queue':
        await this.makeDependentQueueProvider.execute();
        break;
      case 'upload':
        await this.makeDependentStorageProvider.execute();
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
