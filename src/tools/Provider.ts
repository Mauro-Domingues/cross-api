import { MakeDependentCacheProvider } from '@tools/makeProvider/dependent/cache';
import { MakeDependentCryptoProvider } from '@tools/makeProvider/dependent/crypto';
import { MakeDependentHashProvider } from '@tools/makeProvider/dependent/hash';
import { MakeDependentLeadProvider } from '@tools/makeProvider/dependent/lead';
import { MakeDependentMailProvider } from '@tools/makeProvider/dependent/mail';
import { MakeDependentMailTemplateProvider } from '@tools/makeProvider/dependent/mailTemplate';
import { MakeDependentNotificationProvider } from '@tools/makeProvider/dependent/notification';
import { MakeDependentQueueProvider } from '@tools/makeProvider/dependent/queue';
import { MakeDependentStorageProvider } from '@tools/makeProvider/dependent/storage';
import { MakeCacheProvider } from '@tools/makeProvider/independent/cache';
import { MakeCryptoProvider } from '@tools/makeProvider/independent/crypto';
import { MakeHashProvider } from '@tools/makeProvider/independent/hash';
import { MakeLeadProvider } from '@tools/makeProvider/independent/lead';
import { MakeMailProvider } from '@tools/makeProvider/independent/mail';
import { MakeMailTemplateProvider } from '@tools/makeProvider/independent/mailTemplate';
import { MakeNotificationProvider } from '@tools/makeProvider/independent/notification';
import { MakeQueueProvider } from '@tools/makeProvider/independent/queue';
import { MakeStorageProvider } from '@tools/makeProvider/independent/storage';
import { IModuleNamesDTO } from '@tools/names';

export class Provider {
  public readonly key: 'dependent' | 'independent';
  public readonly list: {
    [key: string]: {
      name: string;
      description: string;
      dependent: { execute: () => Promise<void> };
      independent: { execute: () => Promise<void> };
    };
  };

  constructor(fatherNames?: IModuleNamesDTO) {
    if (fatherNames) {
      this.key = 'dependent';
    } else {
      this.key = 'independent';
    }

    this.list = {
      cache: {
        name: 'cache       ',
        description: 'CacheProvider       ',
        independent: new MakeCacheProvider(),
        dependent: new MakeDependentCacheProvider(fatherNames),
      },
      crypto: {
        name: 'crypto      ',
        description: 'CryptoProvider      ',
        independent: new MakeCryptoProvider(),
        dependent: new MakeDependentCryptoProvider(fatherNames),
      },
      hash: {
        name: 'hash        ',
        description: 'HashProvider        ',
        independent: new MakeHashProvider(),
        dependent: new MakeDependentHashProvider(fatherNames),
      },
      lead: {
        name: 'lead        ',
        description: 'leadProvider        ',
        independent: new MakeLeadProvider(),
        dependent: new MakeDependentLeadProvider(fatherNames),
      },
      mail: {
        name: 'mail        ',
        description: 'MailProvider        ',
        independent: {
          execute: (): Promise<void> =>
            new MakeMailTemplateProvider()
              .execute()
              .then(() => new MakeMailProvider().execute()),
        },
        dependent: {
          execute: (): Promise<void> =>
            new MakeDependentMailTemplateProvider(fatherNames)
              .execute()
              .then(() => new MakeDependentMailProvider(fatherNames).execute()),
        },
      },
      mailTemplate: {
        name: 'mailTemplate',
        description: 'MailTemplateProvider',
        independent: new MakeMailTemplateProvider(),
        dependent: new MakeDependentMailTemplateProvider(fatherNames),
      },
      queue: {
        name: 'queue       ',
        description: 'QueueProvider       ',
        independent: new MakeQueueProvider(),
        dependent: new MakeDependentQueueProvider(fatherNames),
      },
      notification: {
        name: 'notification',
        description: 'NotificationProvider',
        independent: new MakeNotificationProvider(),
        dependent: new MakeDependentNotificationProvider(fatherNames),
      },
      upload: {
        name: 'upload      ',
        description: 'StorageProvider     ',
        independent: new MakeStorageProvider(),
        dependent: new MakeDependentStorageProvider(fatherNames),
      },
    };
  }
}
