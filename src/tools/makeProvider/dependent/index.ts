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

export class MakeDependentProvider {
  private messages: IMessagesDTO;
  private console: Console;
  private providerName: string | undefined;
  private fatherNames: IModuleNamesDTO | undefined;
  private makeDependentStorageProvider: MakeDependentStorageProvider;
  private makeDependentNotificationProvider: MakeDependentNotificationProvider;
  private makeDependentMailTemplateProvider: MakeDependentMailTemplateProvider;
  private makeDependentMailProvider: MakeDependentMailProvider;
  private makeDependentLeadProvider: MakeDependentLeadProvider;
  private makeDependentHashProvider: MakeDependentHashProvider;
  private makeDependentCryptoProvider: MakeDependentCryptoProvider;
  private makeDependentCacheProvider: MakeDependentCacheProvider;

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
  }

  public async execute(): Promise<void> {
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
